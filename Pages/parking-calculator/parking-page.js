var ParkingPage = function () {

	//Locators
	var startDate = element(by.id('StartingDate'));
	var startCalendar = element(by.css('tr:nth-of-type(2) > td:nth-of-type(2) > a > img[alt="Pick a date"]'));
	var startHour = element(by.id('StartingTime'));
	var startHourAMPM = element(by.css('tr:nth-of-type(2) > td:nth-of-type(2) > input:nth-of-type(4)'));
	var endDate = element(by.id('LeavingDate'));
	var endCalendar = element(by.css('tr:nth-of-type(3) > td:nth-of-type(2) > a > img[alt="Pick a date"]'));
	var endHour = element(by.id('LeavingTime'));
	var endHourAMPM = element(by.css('tr:nth-of-type(3) > td:nth-of-type(2) > input:nth-of-type(4)'));
	var calculate = element(by.name('Submit'));
	var total = element(by.css('b'));
	var calendarDate = element(by.css('b'));


	//Functions
	this.scrollDown = function (element) {
		browser.actions().mouseMove(element).perform();
	}
	this.chooseParking = function (value) {
		var selectParking = element(by.css('select#ParkingLot>option[value=\"'+value+'\"]'));
		selectParking.click();
	}
	this.typeStartDate = function (date) {
		startDate.clear();
		startDate.sendKeys(date);
	}
	this.selectStartDate = function () {
		startCalendar.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[1]; // this is your new window
                browser.switchTo().window(newWindowHandle);
            });
        });
	}
	this.selectEndDate = function () {
		endCalendar.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                newWindowHandle = handles[1]; // this is your new window
                browser.switchTo().window(newWindowHandle);
            });
        });
	}
	this.typeStartHour = function (hour) {
		startHour.clear();
		startHour.sendKeys(hour);
	}
	this.startHour = function () {
		startHourAMPM.click();
	}
	this.typeEndDate = function (date) {
		endDate.clear();
		endDate.sendKeys(date);
	}
	this.typeEndHour = function (hour) {
		endHour.clear();
		endHour.sendKeys(hour);
	}
	this.endHour = function () {
		endHourAMPM.click();
	}

	this.calculateClick = function () {
		calculate.click();
	}

	this.verifyCost = function (totalMoney) {
		expect(total.getText()).toEqual(totalMoney);
	}
	this.clickLPAPage = function () {
        browser.driver.wait(
            function () {
                return lpaTestButton.isPresent()
            }
        )
        lpaTestButton.click()
    }
}
module.exports = new ParkingPage();