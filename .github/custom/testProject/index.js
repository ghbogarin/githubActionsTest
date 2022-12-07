const {By, Key, until} = require('selenium-webdriver');
const { Builder, Session, logging } = require('selenium-webdriver');
async function example() {
    let firefox = require('selenium-webdriver/firefox');
    const firefoxOptions = new firefox.Options()
    // console.log(firefoxOptions.useGeckoDriver(true));
    firefoxOptions.setBinary('/usr/bin/firefox')
    firefoxOptions.headless();
    const prefs = new logging.Preferences();
    prefs.setLevel(logging.Type.PERFORMANCE, logging.Level.ALL);
    firefoxOptions.setLoggingPrefs()
    const driver = new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(firefoxOptions)
    // const sess = new Session('id_1',{})
    // console.log(sess.getCapabilities())
    // console.log(sess.getPageLoadStrategy())
    // console.log(sess.getFirefoxOptions())
    // console.log(sess.getHttpAgent())
    // console.log(sess.getServerUrl())
    console.log('before build!')
    driver.build()
    console.log('after build!')
    await driver.get('https://aulas.ort.edu.uy/login/index.php');
    const title = await driver.getTitle();
    console.log(title);
    console.log("termina");
};
example();