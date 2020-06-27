var CalendarPage = function () {

	//Locators
	


	//Functions
	this.scrollDown = function (element) {
		browser.actions().mouseMove(element).perform();
    }

    this.selectMonth = function (value) {
        var startDate = element(by.css('select[name="MonthSelector"] > option:nth-of-type("'+value+'\")'));
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