const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const root = 'c:\\Users\\PMLS\\Downloads\\globaldealzllc-main';
  const baseUrl = 'http://127.0.0.1:5173';
  const routes = [
    '/',
    '/services',
    '/infrastructure',
    '/joint-ventures',
    '/case-studies',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
    '/refund-policy',
  ];
  const widths = [1440, 1280, 1024, 768, 430, 390, 375, 320];

  const outDir = path.join(root, 'qa');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  for (const route of routes) {
    for (const width of widths) {
      const height = width <= 768 ? 920 : 900;
      const page = await browser.newPage({ viewport: { width, height } });
      const url = `${baseUrl}${route}`;
      const fileName = `${width}_${route.replace(/\//g, '_') || 'home'}.png`;
      const filePath = path.join(outDir, fileName);

      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      } catch (error) {
        console.log(JSON.stringify({ route, width, status: 'goto-failed', error: error.message }));
        await page.close();
        continue;
      }

      const metrics = await page.evaluate(() => {
        const body = document.body;
        const text = body ? body.innerText : '';
        const footer = document.querySelector('footer');
        const cards = document.querySelectorAll('.depth-card, .depth-panel, .surface-3d, .tilt-card, .depth-metric').length;
        const scenes = document.querySelectorAll('canvas').length;
        const dashboard = Array.from(document.querySelectorAll('*'))
          .map((el) => el.textContent || '')
          .find((text) => text.includes('Illustrative Dashboard')) || '';

        return {
          route: location.pathname,
          width: window.innerWidth,
          height: window.innerHeight,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: body ? body.scrollWidth : 0,
          footerVisible: !!footer && (footer.offsetWidth > 0 || footer.offsetHeight > 0 || footer.getClientRects().length > 0),
          hasFooterText: /GlobalDealz|Privacy|Terms|Contact|Services/i.test(text),
          hasDashboardLabel: dashboard.length > 0,
          canvasCount: scenes,
          cardCount: cards,
          textPreview: text.slice(0, 180).replace(/\s+/g, ' '),
        };
      });

      await page.screenshot({ path: filePath, fullPage: true });
      console.log(JSON.stringify({ route, width, filePath, ...metrics }));
      await page.close();
    }
  }

  await browser.close();
  console.log(`QA screenshots saved to ${outDir}`);
})();
