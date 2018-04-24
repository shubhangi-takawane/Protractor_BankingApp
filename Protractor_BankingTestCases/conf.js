var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// An example configuration file.
exports.config = {
 directConnect: true,
		//seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
    	//shardTestFiles : true,
		//maxInstances : 2,
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./src/FunctionalTests/spec.js'],
	  //['./src/Regression/DataDrivenspec.js'],
	 // ['./src/Regression/spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

	/*multiCapabilities: [
      {
        'browserName': 'chrome',
        specs :['./src/FunctionalTests/Calculator.js'] ,
      }, 
      {
        'browserName': 'firefox',
        specs :['./src/Regression/example_spec.js'] ,
      }
      ],*/
  
 /* onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
   },*/
  
};
