require('chromedriver');
var webdriver = require('selenium-webdriver'),
 By = webdriver.By,
 until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get("https://autowebtest.github.io/myself/");



//driver.wait(until.elementLocater(By.css('body>div.wrapper>header>a')),2000);





driver.sleep(2*1000).then(function(){
    return driver.findElement(By.css("body>div.wrapper>header>a")).click();
})

driver.findElement(By.css("body>div.wrapper>header>nav>ul>li:nth-child(1)>a")).click();

driver.sleep(2*1000).then(function(){
 return driver.findElement (By.css("body>div.wrapper>header>a")) .click();
})
driver.findElement(By.css("body>div.wrapper>header>nav>ul>li:nth-child(1)>a")).click();
driver.sleep(5*1000).then(function(){
  
  return driver.quit() ; 
})
