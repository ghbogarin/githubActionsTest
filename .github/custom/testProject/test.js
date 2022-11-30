let firefox = require('selenium-webdriver/firefox');
const firefoxOptions = new firefox.Options()
firefoxOptions.headless();
const driver = await new Builder()
.forBrowser('firefox')
.setFirefoxOptions(firefoxOptions)
.build();
try {
    await driver.get('https://aulas.ort.edu.uy/login/index.php');
    const title = await driver.getTitle();
    console.log(title);
    console.log("termina");
} finally {
    await driver.quit();
}