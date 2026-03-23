import puppeteer from 'puppeteer';

(async () => {
  console.log('Starting browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    console.log('Navigating to locally running portfolio...');
    await page.goto('http://localhost:5174/', { waitUntil: 'networkidle0' });
    
    console.log('Scrolling to Achievements Section...');
    
    // Wait for the certificates section to load
    await page.waitForSelector('#certificates', { timeout: 10000 });
    
    // Find the active certificate button (should be the first one visible with View Certificate text)
    console.log('Looking for the View Certificate button...');
    const buttons = await page.$$('a[href*="drive.google.com"], a[href*="coursera.org"]');
    
    if (buttons.length === 0) {
      console.error('No certificate links found!');
      process.exit(1);
    }
    
    console.log(`Found ${buttons.length} certificate links. Finding an active one...`);
    
    // We expect the visible one to be inside a div with pointer-events: auto
    // We will attempt to click the first one that is currently in view (offset === 0)
    let clicked = false;
    for (const btn of buttons) {
      try {
        const isVisible = await btn.isIntersectingViewport();
        if (isVisible) {
          // Attempt a physical click. If something overlaps it, Puppeteer throws an error
          console.log('Attempting to click a visible View Certificate link...');
          await btn.click();
          console.log('✅ Click succeeded! No elements are blocking the anchor tag.');
          clicked = true;
          break;
        }
      } catch (err: any) {
        console.log(`Click failed on one link (maybe overlapping/hidden): ${err.message}`);
      }
    }
    
    if (!clicked) {
      console.error('❌ Failed to click any visible certificate links. Something is blocking them!');
    }

  } catch (error) {
    console.error('Operation failed:', error);
  } finally {
    await browser.close();
  }
})();
