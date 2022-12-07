const {By, Key, until} = require('selenium-webdriver');
const { Builder, Session } = require('selenium-webdriver');
async function example() {
    let firefox = require('selenium-webdriver/firefox');
    const firefoxOptions = new firefox.Options()
    console.log(firefoxOptions.useGeckoDriver());
    console.log(firefoxOptions.setBinary('/usr/bin/firefox'))
    firefoxOptions.headless();
    const driver = new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(firefoxOptions)
    const sess = new Session('id_1',{})
    console.log(sess.getCapabilities())
    console.log(sess.getPageLoadStrategy())
    console.log(sess.getFirefoxOptions())
    console.log(sess.getHttpAgent())
    console.log(sess.getServerUrl())
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