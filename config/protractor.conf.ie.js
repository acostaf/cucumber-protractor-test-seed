require('ts-node/register');
var helpers = require('./helpers');
var config = require('./protractor.conf.js').config;

/* Uncomment to use the already running instance of the IE Driver Server */
// config.seleniumAddress = 'http://localhost:5555/';

config.directConnect = false; // Required for IE

config.capabilities = {
  'browserName': 'internet explorer',
};

/* Uncomment to start the IE driver from the test */
config.seleniumArgs = ['-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_Win32_2.53.1.exe'];

exports.config = config;