@echo off
REM Run the deepseek monthly report skill.
REM The company name maps to skill /deepseek-monthly-report.

setlocal enabledelayedexpansion

REM --- Company name to run ---
REM This name maps to skill /deepseek-monthly-report.
set "COMPANIES=deepseek"

REM Run from this project directory
cd /d D:\walker\invest-agent

REM --- Step 1: copy skills from skills-source to skills-target (paths come from config.yml) ---
powershell -NoProfile -ExecutionPolicy Bypass -Command "$cfg = Get-Content 'D:\walker\invest-agent\config.yml' -Raw; $src = [regex]::Match($cfg, '(?ms)^skills-source:.*?path:\s*(.+?)\s*$').Groups[1].Value; $tgt = [regex]::Match($cfg, '(?ms)^skills-target:.*?path:\s*(.+?)\s*$').Groups[1].Value; New-Item -ItemType Directory -Force -Path $tgt | Out-Null; Copy-Item -Path (Join-Path $src '*') -Destination $tgt -Recurse -Force; Write-Host Copied skills from $src to $tgt"
if errorlevel 1 (
    echo Failed to copy skills from skills-source to skills-target. Aborting.
    pause
    exit /b 1
)

REM --- Step 2: run /<company>-monthly-report ---
for %%c in (%COMPANIES%) do (
    echo.
    echo ============================================================
    echo Running /%%c-monthly-report ...
    echo ============================================================
    claude --dangerously-skip-permissions "/%%c-monthly-report"
    if errorlevel 1 (
        echo WARNING: /%%c-monthly-report exited with an error.
    )
)

echo.
echo Monthly report finished for company: %COMPANIES%
pause
