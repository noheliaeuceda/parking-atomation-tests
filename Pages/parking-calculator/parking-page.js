var ParkingPage = function () {

	//Locators
	var selectParking = element(by.css('select#ParkingLot>option[value=\"Short\"]'));

	//Functions
	this.scrollDown = function (element) {
		browser.actions().mouseMove(element).perform();
	}
	this.clickLoginLink = function () {
		selectParking.click();
	}
}
module.exports = new ParkingPage();