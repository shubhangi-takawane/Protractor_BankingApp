function calculate(Avalue,Bvalue,index){
		element(by.model('first')).sendKeys(Avalue);
	    
	    element.all(by.options('value for (key, value) in operators')).then(function(text) {
	    	text[index].click();
	    });
	    element(by.model('second')).sendKeys(Bvalue);
	    element(by.buttonText('Go!')).click();
}
describe('Calculator test Scripts', function() {
	
	beforeEach(function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    browser.manage().window().maximize();
	});
	
	afterEach(function() {
		console.log("test case passed");
	});
	
  xit('Addition', function() {
    calculate(10,20,0);

   var sum= element(by.binding('latest')).getText();
   expect(sum.getText()).toBe('30');//assertion
    
  });
  
  xit('Division', function() {
	    calculate(10,5,1);
	 
	   var sum= element(by.binding('latest')).getText();
	   expect(sum.getText()).toBe('2');//assertion
	    
	  });
  
  xit('Multiplication', function() {
	    calculate(10,5,3);
	
	   var sum= element(by.binding('latest')).getText();
	   expect(sum.getText()).toBe('50');//assertion
	    
	  });
  //read the webtable
  xit('display the content of webtable', function() {
	    calculate(10,5,0);
	    calculate(10,5,1);
	    calculate(10,5,3);
	
	   element.all(by.repeater("result in memory")).then(function(text) {
	   	for(i=0;i<text.length;i++){
	   		text[i].getText().then(function(data) {	//capture get text data in data after then like promise
	   			console.log(data);
	   		});
	   	};
	   });
	    
	  });
//read the webtable row and colum
  xit('display the row of webtable', function() {
	    calculate(10,5,0);
	    calculate(10,5,1);
	    calculate(10,5,3);
	
	   element(by.repeater("result in memory").row(1)).getText().then(function(text) {
	   
	   			console.log(text);
	   		});
	     });  
  
it('display the column of webtable', function() {
    calculate(10,5,0);
    calculate(10,5,1);
    calculate(10,5,3);

   element.all(by.repeater("result in memory").column('result.value')).getText().then(function(text) {
	   
			console.log(text);
		});
   
     });
 
});

 
