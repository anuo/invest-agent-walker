@echo off
REM Generate Kimi weekly digests for the four weeks of last month.
REM Steps:
REM   1. Read D:\walker\invest-agent\config.yml and copy all files from
REM      skills-source to skills-target (overwrite existing files).
REM   2. Compute the four week ranges of last month from the current date.
REM      Week 1-3 are 7-day blocks starting from the 1st of last month;
REM      week 4 runs from the 22nd to the last day of the month.
REM   3. Loop over the four ranges, invoking /kimi-weekly-digest once per
REM      range, passing the range as arguments. All instances run in parallel,
REM      each in its own PowerShell window.

setlocal enabledelayedexpansion

REM --- Company name to run ---
REM This name maps to skill /kimi-weekly-digest.
set "COMPANIES=kimi"

REM Run from this project directory
cd /d D:\walker\invest-agent

REM --- Step 1: copy skills from skills-source to skills-target (paths come from config.yml) ---
powershell -NoProfile -ExecutionPolicy Bypass -Command "$cfg = Get-Content 'D:\walker\invest-agent\config.yml' -Raw; $src = [regex]::Match($cfg, '(?ms)^skills-source:.*?path:\s*(.+?)\s*$').Groups[1].Value; $tgt = [regex]::Match($cfg, '(?ms)^skills-target:.*?path:\s*(.+?)\s*$').Groups[1].Value; New-Item -ItemType Directory -Force -Path $tgt | Out-Null; Copy-Item -Path (Join-Path $src '*') -Destination $tgt -Recurse -Force; Write-Host Copied skills from $src to $tgt"
if errorlevel 1 (
    echo Failed to copy skills from skills-source to skills-target. Aborting.
    pause
    exit /b 1
)

REM --- Step 2: compute the four week ranges of last month into a temp file (one "start,end" per line) ---
set "WEEKFILE=%cd%\week-ranges.tmp"
powershell -NoProfile -Command "$now = Get-Date; $first = Get-Date -Year $now.Year -Month $now.Month -Day 1; $first = $first.AddMonths(-1); $last = $first.AddMonths(1).AddDays(-1); $cur = $first; $i = 0; while ($i -lt 3) { $s = $cur.ToString('yyyy-MM-dd'); $cur = $cur.AddDays(6); Write-Output ($s + ',' + $cur.ToString('yyyy-MM-dd')); $cur = $cur.AddDays(1); $i = $i + 1 }; Write-Output ($cur.ToString('yyyy-MM-dd') + ',' + $last.ToString('yyyy-MM-dd'))" > "%WEEKFILE%"

REM --- Step 3: run /<company>-weekly-digest for each week range, all in parallel ---
for %%c in (%COMPANIES%) do (
    echo.
    echo ============================================================
    echo Launching weekly digests for company: %%c
    echo ============================================================
    for /f "usebackq tokens=1,2 delims=," %%a in ("%WEEKFILE%") do (
        echo Launching /%%c-weekly-digest for week %%a to %%b ...
        start "%%c Weekly Digest %%a to %%b" powershell -NoExit -Command "claude --dangerously-skip-permissions '/%%c-weekly-digest from %%a to %%b'"
    )
)

echo.
echo All Claude CLI instances launched in parallel for company: %COMPANIES%
echo Each runs in its own PowerShell window with --dangerously-skip-permissions.

del "%WEEKFILE%" >nul 2>&1

echo.
echo Launcher finished for company: %COMPANIES%
echo Check the individual PowerShell windows for each digest's progress/result.
pause
