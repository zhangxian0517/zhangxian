require("chromedriver");
var webdriver = require("selenium-webdriver");
var By = webdriver.By;

var chai = require("chai");
var assert = chai.assert;

var driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().window().maximize();
driver.get("https://autowebtest.github.io/add-remove/index.html");

var date = ["001","002","003","004","005"]
for(var info of date){
driver.findElement(By.id("text")).sendKeys(info);
driver.findElement(By.id("text")).submit();
}

driver.findElements(By.css('li.new-item')).then(function(eles){
return assert.equal(eles.length, 5)
});

driver.findElement(By.css("body > div > div.reminder-container > footer > button")).click();
driver.switchTo().alert().accept();

driver.findElement(By.css('body > div > div.reminder-container > footer > span')).getText().then((text)=>{
return assert.equal(text,0);

driver.findElement(By.className('clear-all')).getAttribute('disabled').then(bool => {
console.log(bool)
return assert.equal(bool,'true')
});

driver.findElement(By.id('text')).sendKeys('006');
driver.findElement(By.id('text')).submit();
driver.sleep(1000);
driver.findElement(By.className('clear-all')).getAttribute('disabled').then(bool => {
console.log(bool)
return assert.equal(bool,null)
})



