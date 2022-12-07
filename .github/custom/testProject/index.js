const {By, Key, until} = require('selenium-webdriver');
const { Builder } = require('selenium-webdriver');
async function example() {
    let firefox = require('selenium-webdriver/firefox');
    const firefoxOptions = new firefox.Options()
    firefoxOptions.headless();
    const driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(firefoxOptions)
      .getCapabilities()
    console.log(driver.getCapabilities())
    console.log(driver.getPageLoadStrategy())
    console.log(driver.getFirefoxOptions())
    console.log(driver.getHttpAgent())
    console.log(driver.getServerUrl())
    driver.build()
  try {
    await driver.get('https://aulas.ort.edu.uy/login/index.php');
    const title = await driver.getTitle();
    console.log(title);
    console.log("termina");
  } finally {
    await driver.quit();
  }
};
example();