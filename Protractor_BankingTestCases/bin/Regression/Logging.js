//error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5
var winston = require('winston');
winston.remove(winston.transports.Console);
winston.add(winston.transports.File,{filename:'./Reports/winstonLogging.txt'});

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
	    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		browser.manage().window().maximize();
		winston.log("info","url is opened");
		expect(element(by.partialButtonText('Customer Login')));
		expect(element(by.partialButtonText('Bank Manager Login')));
		 
		console.log('Customer login and manager login present on page');

	    winston.log("info","closing the browser");
	    
	    winston.log("error","closing");
       
   });
});

 
