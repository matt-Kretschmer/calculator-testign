const puppeteer = require('puppeteer');
const assert = require('assert');

describe('Calculator App', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.click('input#AC');
  });

  it('should perform addition', async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="+"]');
    await page.click('input[value="2"]');
    await page.click('input[value="="]');

    const displayValue = await page.$eval('input#displayArea', el => el.value);
    assert.strictEqual(displayValue, '3');
  });

  it('should perform subtraction', async () => {
    await page.click('input[value="3"]');
    await page.click('input[value="-"]');
    await page.click('input[value="1"]');
    await page.click('input[value="="]');
  
    const displayValue = await page.$eval('input#displayArea', el => el.value);
    assert.strictEqual(displayValue, '2');
  });
  

  it('should perform multiplication', async () => {
    await page.click('input[value="6"]');
    await page.click('input[value="9"]');
    await page.click('input[value="0"]');
    await page.click('input[value="×"]');
    await page.click('input[value="1"]');
    await page.click('input[value="0"]');
    await page.click('input[value="="]');
  
    const displayValue = await page.$eval('input#displayArea', el => el.value);
    assert.strictEqual(displayValue, '6900');
  });
  
  it('should perform division', async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="7"]');
    await page.click('input[value="2"]');
    await page.click('input[value="7"]');
    await page.click('input[value="÷"]');
    await page.click('input[value="2"]');
    await page.click('input[value="="]');
  
    const displayValue = await page.$eval('input#displayArea', el => el.value);
    const expectedValue = parseFloat('872');
    const actualValue = parseFloat(displayValue);
    const tolerance = 0.1;
  
    const isWithinTolerance = Math.abs(expectedValue - actualValue) <= tolerance * Math.max(expectedValue, actualValue);
    assert.strictEqual(isWithinTolerance, true);
  });
  

  it('should handle AC (All Clear) button', async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="2"]');
    await page.click('input#AC');

    const displayValue = await page.$eval('input#displayArea', el => el.value);
    assert.strictEqual(displayValue, '');
  });

  it('should handle DE (Delete) button', async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="2"]');
    await page.click('input#DE');

    const displayValue = await page.$eval('input#displayArea', el => el.value);
    assert.strictEqual(displayValue, '1');
  });

});

