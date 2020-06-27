const Reporter = require('jasmine-2-testrail')
const reporter = new Reporter({
});
 

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites: {

  },
  onPrepare: () => {
  },
  afterLaunch: () => {

    return new Promise(() => true)
  },
  multiCapabilities: [{
    browserName: 'chrome' , 
    /*chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }*/ 
  }],
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
  
}
