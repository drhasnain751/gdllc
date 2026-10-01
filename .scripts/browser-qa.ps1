$root = "C:\Users\PMLS\Downloads\globaldealzllc-main"
$baseUrl = "http://127.0.0.1:5173"
$routes = @(
  '/',
  '/services',
  '/infrastructure',
  '/joint-ventures',
  '/case-studies',
  '/pricing',
  '/contact',
  '/privacy',
  '/terms',
  '/refund-policy'
)
$widths = @(1440, 1280, 1024, 768, 430, 390, 375, 320)

Set-Location $root

foreach ($route in $routes) {
  foreach ($w in $widths) {
    $h = 900
    if ($w -le 768) { $h = 920 }
    $out = "$root\qa\${w}_${route.Replace('/', '_')}.png"
    $dir = Split-Path -Parent $out
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

    Write-Output "Capture $baseUrl$route @ ${w}x$h -> $out"
    npx playwright screenshot --browser=chromium --viewport-size="$w,$h" "$baseUrl$route" $out
  }
}

Write-Output "Browser QA screenshots saved to $root\qa"