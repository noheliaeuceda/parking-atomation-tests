exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  suites: {
    LoginOC: ['./Tests/LoginOC/Login_LCX_HP.js'],
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
};