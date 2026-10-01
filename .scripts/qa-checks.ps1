$routes = @('/','/services','/infrastructure','/joint-ventures','/case-studies','/pricing','/contact','/privacy','/terms','/refund-policy')
$patterns = @(
    'Illustrative Dashboard',
    'Illustrative Dashboard — Demo Data',
    '\$2.5M',
    '2.5M',
    '\b4\b',
    '98.5%',
    '3.8x',
    'site-footer',
    'GlobalDealz',
    'GlobalDealz LLC',
    'Scene-',
    'Scene-DKXPtCIb'
)
foreach ($r in $routes) {
    Write-Output "=== $r ==="
    try {
        $uri = "http://localhost:5173$r"
        $resp = Invoke-WebRequest -Uri $uri -UseBasicParsing -TimeoutSec 10
        $content = $resp.Content
    } catch {
        Write-Output "(request failed: $_)"
        continue
    }
    $foundAny = $false
    foreach ($p in $patterns) {
        if ($content -match $p) {
            Write-Output "MATCH: $p"
            $foundAny = $true
        }
    }
    if (-not $foundAny) { Write-Output "NO MATCHES FOUND FOR PATTERNS" }
}
