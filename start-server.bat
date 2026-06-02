@echo off
echo ====================================
echo QPR - Local Server
echo ====================================
echo.
echo Starting backend and frontend on http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
npm --prefix backend start
if errorlevel 1 (
    echo.
    echo ERROR: Backend failed to start.
    echo.
    echo Run "npm --prefix backend install" first if dependencies are missing.
    echo.
    pause
)






