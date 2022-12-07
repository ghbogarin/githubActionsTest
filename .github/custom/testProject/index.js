const {By, Key, until} = require('selenium-webdriver');
const { Builder, Session, logging } = require('selenium-webdriver');
async function example() {
  let firefox = require('selenium-webdriver/firefox');
  const firefoxOptions = new firefox.Options()
  firefoxOptions.setBinary('/usr/bin/firefox')
  firefoxOptions.headless();
  const prefs = new logging.Preferences();
  prefs.setLevel(logging.Type.SERVER, logging.Level.ALL);
  firefoxOptions.setLoggingPrefs(prefs)
  console.log('before build!')
  const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(firefoxOptions)
    .build()
    await driver.get(URL);
    const title = await driver.getTitle();
    console.log(title);
    return driver;
};
example();