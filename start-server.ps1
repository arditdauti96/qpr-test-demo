# QPR Local Server
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "QPR - Local Server" -ForegroundColor Yellow
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

$port = 3000
$url = "http://localhost:$port"

Write-Host "Starting local server on $url" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "Starting Node backend from /backend ..." -ForegroundColor Green
Write-Host ""
Start-Process $url
npm --prefix backend start
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Backend failed to start." -ForegroundColor Red
    Write-Host "Run 'npm --prefix backend install' first if dependencies are missing." -ForegroundColor Yellow
}






