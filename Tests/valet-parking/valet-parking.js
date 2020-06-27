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
	it('Given as a user, When the user enters the date in the date field AND the user spends two hours in valet parking, THEN parking cost equals to $12'
	, async (done) => {
            ParkingPage.chooseParking('Valet')
			ParkingPage.typeStartDate('07/01/2020')
			ParkingPage.typeStartHour('9:00')
			ParkingPage.startHour()
			ParkingPage.typeEndDate('07/01/2020')
			ParkingPage.typeEndHour('11:00')
			ParkingPage.endHour()
			ParkingPage.calculateClick()
			ParkingPage.verifyCost('$ 12.00')


			done()
	});
	it('Given as a user, When the user enters the date in the date field AND the user spends minus two hours in valet parking, THEN parking cost equals to $0'
	, async (done) => {
            ParkingPage.chooseParking('Valet')
			ParkingPage.typeStartDate('07/01/2020')
			ParkingPage.typeStartHour('9:00')
			ParkingPage.startHour()
			ParkingPage.typeEndDate('07/01/2020')
			ParkingPage.typeEndHour('5:00')
			ParkingPage.endHour()
			ParkingPage.calculateClick()
			ParkingPage.verifyCost('$ 0.00')


			done()
	});
	it('Given as a user, When the user enters the date in the date field AND the user spends one day in valet parking, THEN parking cost equals to $18'
	, async (done) => {
            ParkingPage.chooseParking('Valet')
			ParkingPage.typeStartDate('07/01/2020')
			ParkingPage.typeStartHour('12:00')
			ParkingPage.startHour()
			ParkingPage.typeEndDate('07/01/2020')
			ParkingPage.typeEndHour('11:59')
			ParkingPage.endHour()
			ParkingPage.calculateClick()
			ParkingPage.verifyCost('$ 18.00')


			done()
	});
	it('Given as a user, When the user enters the date in the date field AND the user spends one day plus two hours in valet parking, THEN parking cost equals to $0'
	, async (done) => {
            ParkingPage.chooseParking('Valet')
			ParkingPage.typeStartDate('07/01/2020')
			ParkingPage.typeStartHour('6:00')
			ParkingPage.startHour()
			ParkingPage.typeEndDate('07/02/2020')
			ParkingPage.typeEndHour('7:59')
			ParkingPage.endHour()
			ParkingPage.calculateClick()
			ParkingPage.verifyCost('$ 30.00')


			done()
	});

	it('Given as a user, When the user enters the date in the date field AND the user spends more than 5 hours in valet parking, THEN parking cost equals to $18'
	, async (done) => {
            ParkingPage.chooseParking('Valet')
			ParkingPage.typeStartDate('07/01/2020')
			ParkingPage.typeStartHour('6:00')
			ParkingPage.typeEndDate('07/01/2020')
			ParkingPage.typeEndHour('7:59')
			ParkingPage.endHour()
			ParkingPage.calculateClick()
			ParkingPage.verifyCost('$ 18.00')


			done()
	});
	afterAll(function () {
		browser.restartSync()
	})
});