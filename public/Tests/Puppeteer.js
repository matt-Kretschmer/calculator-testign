const puppeteer = require("puppeteer");
const assert = require("assert");

describe("Calculator App", () => {
  let browser;
  let page;

  before(function () {
    this.timeout(20000);
    return (async () => {
      try {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.goto("https://m6p8pjdqm3.eu-west-1.awsapprunner.com");
      } catch (error) {
        console.error("Error during setup:", error);
        throw error;
      }
    })();
  });

  after(async () => {
    if (page) {
      await page.close();
    }
    await browser.close();
  });

  beforeEach(async () => {
    await page.click("input#AC");
  });

  it("should perform addition", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="+"]');
    await page.click('input[value="2"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "3");
  });

  it("should perform subtraction", async () => {
    await page.click('input[value="3"]');
    await page.click('input[value="-"]');
    await page.click('input[value="1"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "2");
  });

  it("should perform multiplication", async () => {
    await page.click('input[value="6"]');
    await page.click('input[value="9"]');
    await page.click('input[value="0"]');
    await page.click('input[value="×"]');
    await page.click('input[value="1"]');
    await page.click('input[value="0"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "6900");
  });

  it("should perform division", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="7"]');
    await page.click('input[value="2"]');
    await page.click('input[value="7"]');
    await page.click('input[value="÷"]');
    await page.click('input[value="2"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    const expectedValue = parseFloat("872");
    const actualValue = parseFloat(displayValue);
    const tolerance = 0.1;

    const isWithinTolerance =
      Math.abs(expectedValue - actualValue) <=
      tolerance * Math.max(expectedValue, actualValue);
    assert.strictEqual(isWithinTolerance, true);
  });

  it("should handle AC (All Clear) button", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="2"]');
    await page.click("input#AC");

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "");
  });

  it("should handle DE (Delete) button", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="2"]');
    await page.click("input#DE");

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "1");
  });

  it("should handle division by zero", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="0"]');
    await page.click('input[value="÷"]');
    await page.click('input[value="0"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "Infinity");
  });

  it("should handle multiplication by zero", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="0"]');
    await page.click('input[value="×"]');
    await page.click('input[value="0"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "0");
  });

  it("should handle consecutive operations", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="0"]');
    await page.click('input[value="+"]');
    await page.click('input[value="-"]');
    await page.click('input[value="5"]');
    await page.click('input[value="×"]');
    await page.click('input[value="2"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "0");
  });

  it("should handle decimal numbers", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="."]');
    await page.click('input[value="5"]');
    await page.click('input[value="+"]');
    await page.click('input[value="2"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "3.5");
  });

  it("should handle negative numbers", async () => {
    await page.click('input[value="5"]');
    await page.click('input[value="-"]');
    await page.click('input[value="3"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "2");
  });

  it("should handle clicking 0 button", async () => {
    await page.click('input[value="0"]');
    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "0");
  });

  it("should handle clicking decimal (.) button", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="."]');
    await page.click('input[value="5"]');
    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "1.5");
  });

  it("should handle clicking AC button", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="2"]');
    await page.click("input#AC");
    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "");
  });

  it("should handle clicking DE (Delete) button", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="2"]');
    await page.click("input#DE");
    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "1");
  });

  it("should handle clicking equal (=) button", async () => {
    await page.click('input[value="1"]');
    await page.click('input[value="+"]');
    await page.click('input[value="2"]');
    await page.click('input[value="="]');
    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "3");
  });

  it("should handle large numbers", async () => {
    await page.click('input[value="9"]');
    await page.click('input[value="8"]');
    await page.click('input[value="7"]');
    await page.click('input[value="6"]');
    await page.click('input[value="+"]');
    await page.click('input[value="1"]');
    await page.click('input[value="2"]');
    await page.click('input[value="="]');

    const displayValueHandle = await page.$("input#displayArea");
    const displayValue = await displayValueHandle.evaluate((el) => el.value);
    assert.strictEqual(displayValue, "9888");
  });
});
