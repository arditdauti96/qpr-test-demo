# QPR Local Server
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "QPR - Local Server" -ForegroundColor Yellow
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

$port = 8000
$url = "http://localhost:$port"

Write-Host "Starting local server on $url" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Check if Python is available
$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python) {
    $python = Get-Command python3 -ErrorAction SilentlyContinue
}

if ($python) {
    Write-Host "Server starting..." -ForegroundColor Green
    Write-Host ""
    
    # Start server in background
    Start-Process python -ArgumentList "-m", "http.server", $port -NoNewWindow
    
    # Wait a moment for server to start
    Start-Sleep -Seconds 2
    
    # Open browser
    Write-Host "Opening browser..." -ForegroundColor Green
    Start-Process $url
    
    Write-Host ""
    Write-Host "Server is running!" -ForegroundColor Green
    Write-Host "To stop the server, close this window or press Ctrl+C" -ForegroundColor Yellow
    Write-Host ""
    
    # Keep window open
    Read-Host "Press Enter to stop the server"
    
    # Stop server
    Get-Process python | Where-Object {$_.MainWindowTitle -eq ""} | Stop-Process -Force
} else {
    Write-Host "ERROR: Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Python from https://www.python.org/" -ForegroundColor Yellow
    Write-Host "Or open index.html directly in your browser" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
}






