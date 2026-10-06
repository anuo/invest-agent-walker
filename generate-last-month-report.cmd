@echo off
REM Run the monthly report skill for each configured company, one by one.
REM Each company name X maps to skill /X-monthly-report.

setlocal enabledelayedexpansion

REM --- Company names to run (comma-separated, no spaces) ---
REM Each name X maps to skill /X-monthly-report.
REM Can be overridden via the first command-line argument, e.g.:
REM   generate-last-month-report.cmd zhipu
REM   generate-last-month-report.cmd minimax,zhipu
REM COMPANIES enum minimax,zhipu,deepseek,kimi,yushu  for example : COMPANIES=zhipu,minimax
set "COMPANIES=zhipu"
if not "%~1"=="" set "COMPANIES=%~1"

REM Run from this project directory
cd /d D:\walker\invest-agent

REM --- Step 1: copy skills from skills-source to skills-target (paths come from config.yml) ---
powershell -NoProfile -ExecutionPolicy Bypass -Command "$cfg = Get-Content 'D:\walker\invest-agent\config.yml' -Raw; $src = [regex]::Match($cfg, '(?ms)^skills-source:.*?path:\s*(.+?)\s*$').Groups[1].Value; $tgt = [regex]::Match($cfg, '(?ms)^skills-target:.*?path:\s*(.+?)\s*$').Groups[1].Value; New-Item -ItemType Directory -Force -Path $tgt | Out-Null; Copy-Item -Path (Join-Path $src '*') -Destination $tgt -Recurse -Force; Write-Host Copied skills from $src to $tgt"
if errorlevel 1 (
    echo Failed to copy skills from skills-source to skills-target. Aborting.
    pause
    exit /b 1
)

REM --- Step 2: run /<company>-monthly-report for each company, one by one ---
for %%c in (%COMPANIES%) do (
    echo.
    echo ============================================================
    echo Running /%%c-monthly-report ...
    echo ============================================================
    claude --dangerously-skip-permissions "/%%c-monthly-report"
    if errorlevel 1 (
        echo WARNING: /%%c-monthly-report exited with an error. Continuing with next.
    )
)

echo.
echo All monthly reports finished for companies: %COMPANIES%
pause
