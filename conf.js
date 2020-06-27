

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
     //'./Tests/valet-parking/valet-parking.js',
     //'./Tests/short-parking/short-parking.js'
  ],
  suites: {
    ValetParkig: './Tests/valet-parking/valet-parking.js',
    ShortParkig: './Tests/short-parking/short-parking.js'
  },
  
  multiCapabilities: [{
    browserName: 'chrome' , 
    trustAllSSLCertificates: true,
    acceptInsecureCerts: true,
    ACCEPT_SSL_CERTS: true,
    chromeOptions: {
      args: [ 
        //'incognito',
         "--disable-gpu",
      //'--headless',
       "--window-size=1600,900" ]
    }
  }],
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
  
}
