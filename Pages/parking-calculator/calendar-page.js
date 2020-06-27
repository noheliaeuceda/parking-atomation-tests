var CalendarPage = function () {

	//Locators
	var startDate = element(by.linkText(''));
	


	//Functions
	this.scrollDown = function (element) {
		browser.actions().mouseMove(element).perform();
	}
	this.chooseParking = function (value) {
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