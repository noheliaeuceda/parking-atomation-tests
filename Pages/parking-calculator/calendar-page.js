var CalendarPage = function () {

	//Locators
	var month = element(by.css('[name="MonthSelector"]'));


	//Functions
	this.scrollDown = function (element) {
		browser.actions().mouseMove(element).perform();
    }
    this.clickMonth = function () {
		month.click();
	}

    this.selectMonth = function (value) {
        var startDate = element(by.css('[name] option:nth-of-type('+value+')'));
		startDate.click();
	}

	this.clickStartDate = function (value) {
        var startDate = element(by.linkText(value));
		startDate.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[0]; // this is your new window
                browser.switchTo().window(newWindowHandle);
            });
        });
	}
	
}
module.exports = new CalendarPage();