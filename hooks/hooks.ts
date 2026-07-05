import { createBdd } from 'playwright-bdd';

const { Before, After } = createBdd();


Before(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    page.on('console', msg => {
        if (msg.type() === 'error') {
            const errorText = msg.text();

            if (
                !errorText.includes('401') &&
                !errorText.includes('Failed to load resource')
            ) {
                console.log(`Browser Console Error: ${errorText}`);
            }
        }
    });
});

After(async () => {
    console.log('Scenario execution completed');
});