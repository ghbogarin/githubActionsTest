let firefox = require('selenium-webdriver/firefox');
const firefoxOptions = new firefox.Options()
firefoxOptions.headless();
const driver = await new Builder()
.forBrowser('firefox')
.setFirefoxOptions(firefoxOptions)
.build();
try {
    await driver.get('https://qualabs.com/');
    const title = await driver.getTitle();
    console.log(title);
    console.log("termina");
} finally {
    await driver.quit();
}