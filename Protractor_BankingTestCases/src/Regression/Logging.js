//error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5
var winston = require('winston');
winston.remove(winston.transports.Console);
winston.add(winston.transports.File,{filename:'./Reports/winstonLogging.txt'});

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
	    browser.get('http://www.angularjs.org');
		browser.manage().window().maximize();
		winston.log("info","url is opened");
	    var name=element(by.model('yourName')).sendKeys('tekarch');
	    var greeting = element(by.binding('yourName'));
	    expect(greeting.getText()).toEqual('Hello tekarch!'); 
	    winston.log("info","closing the browser");
	    
	    winston.log("error","closing");
       
   });
});

 
