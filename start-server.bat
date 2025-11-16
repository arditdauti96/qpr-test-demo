@echo off
echo ====================================
echo QPR - Local Server
echo ====================================
echo.
echo Starting local server on http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo Opening browser...
echo.
cd /d "%~dp0"
python -m http.server 8000
if errorlevel 1 (
    echo.
    echo Python not found! Trying alternative method...
    echo.
    python3 -m http.server 8000
    if errorlevel 1 (
        echo.
        echo ERROR: Python is not installed or not in PATH
        echo.
        echo Please install Python from https://www.python.org/
        echo Or open index.html directly in your browser
        echo.
        pause
    )
)






