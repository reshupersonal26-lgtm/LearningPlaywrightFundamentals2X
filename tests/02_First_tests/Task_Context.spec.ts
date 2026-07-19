import { test, expect } from '@playwright/test';

test('Create Multiple Context', async ({ browser }) => {


    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    console.log("Verify Context1: TTACART");

    let context2 = await browser.newContext();
    let page2 = await context2.newPage();
    await page2.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
    console.log("Verify Context2: TTA-Bank-Digital");

    await page2.close();
    await page1.close();
    await context2.close();
    await context1.close();
});