var ParkingPage = require('../../Pages/parking-calculator/parking-page');
describe('Protractor Demo App', function () {
	var originalTimeout;

	
	beforeEach(function () {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
			browser.ignoreSynchronization = true;
			browser.get('http://www.shino.de/parkcalc/');
	});

	afterEach(function () {
			jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	});
	it('Parking Page', async (done) => {
            ParkingPage.clickLoginLink()
			browser.driver.sleep(1000)

			done()
	});
	afterAll(function () {
		browser.restartSync()
	})
});