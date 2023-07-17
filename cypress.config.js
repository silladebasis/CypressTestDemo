const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  projectId: 'i1cqac',
  e2e: {
    retries:{
      runMode:0,
      openMode:0
    },
    watchForFileChanges:false,
    video:true,
    //baseUrl:"https://ecommerce-playground.lambdatest.io/index.php?route=account",
    reporter:'cypress-mochawesome-reporter',
    reporterOptions:{
      charts:true,
      embeddedScreenshots:true,
      inlineAssets:true,
      reportPageTitle:'Cypress Test Automation Report '
    },
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on)

      on('after:spec',(spec,results) => {
        if(results && results.video && results.stats.failures === 0){
          fs.unlinkSync(results.video)
        }
      })
      const appURL = config.env.type || 'prod';

      const allUrls = {
        staging:'https://ecommerce-playground.lambdatest.io/index.php?route=account',
        prod:'https://ecommerce-playground.lambdatest.io/index.php?route=account'
      }
      config.baseUrl=allUrls[appURL]
      return config;
    },
  },
});
