import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const logs = [];
  const errors = [];
  
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', error => errors.push(`PAGE_ERROR: ${error.message}`));
  page.on('requestfailed', req => errors.push(`REQ_FAIL: ${req.url()} - ${req.failure()?.errorText}`));

  try {
    const resp = await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 15000 });
    console.log('HTTP Status:', resp.status());
  } catch(e) {
    // Try alternate port
    try {
      const resp = await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 15000 });
      console.log('HTTP Status (5173):', resp.status());
    } catch(e2) {
      console.log('Could not connect to dev server on 5173 or 5174');
    }
  }

  const rootHTML = await page.evaluate(() => {
    const root = document.getElementById('root');
    return root ? root.innerHTML.substring(0, 500) : 'NO ROOT ELEMENT';
  });
  
  const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 500));
  const errorOverlay = await page.evaluate(() => {
    // Vite error overlay is a custom element
    const overlay = document.querySelector('vite-error-overlay');
    if (overlay) {
      return overlay.shadowRoot?.textContent?.substring(0, 1000) || 'overlay found but no text';
    }
    return null;
  });

  console.log('\n=== CONSOLE LOGS ===');
  logs.forEach(l => console.log(l));
  
  console.log('\n=== ERRORS ===');
  errors.forEach(e => console.log(e));
  
  console.log('\n=== ROOT HTML (first 500 chars) ===');
  console.log(rootHTML);
  
  console.log('\n=== BODY TEXT ===');
  console.log(bodyText);
  
  if (errorOverlay) {
    console.log('\n=== VITE ERROR OVERLAY ===');
    console.log(errorOverlay);
  }

  await browser.close();
})();
