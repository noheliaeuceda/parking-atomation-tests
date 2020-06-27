var ParkingPage = require('../../Pages/parking-calculator/parking-page');
var CalendarPage = require('../../Pages/parking-calculator/calendar-page');
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
    it('Given as a user, When the user enters the date in the date field AND the user spends two hours in Economy parking, THEN parking cost equals to $4'
        , async (done) => {
            ParkingPage.chooseParking('Long-Garage')
            ParkingPage.selectStartDate()
            CalendarPage.clickMonth()
            CalendarPage.selectMonth(6)
            CalendarPage.clickStartDate(25)
            ParkingPage.typeStartHour('5:00')
            ParkingPage.startHour()
            ParkingPage.selectEndDate()
            CalendarPage.clickMonth()
            CalendarPage.selectMonth(6)
            CalendarPage.clickStartDate(25)
            ParkingPage.typeEndHour('7:00')
            ParkingPage.endHour()
            ParkingPage.calculateClick()
            ParkingPage.verifyCost('$ 4.00')


            done()
        });
    it('Given as a user, When the user enters the date in the date field AND the user spends minus two hours in valet parking, THEN parking cost equals to $0'
        , async (done) => {
            ParkingPage.chooseParking('Long-Garage')
            ParkingPage.selectStartDate()
            CalendarPage.clickMonth()
            CalendarPage.selectMonth(6)
            CalendarPage.clickStartDate(25)
            ParkingPage.typeStartHour('5:00')
            ParkingPage.startHour()
            ParkingPage.selectEndDate()
            CalendarPage.clickMonth()
            CalendarPage.selectMonth(6)
            CalendarPage.clickStartDate(25)
            ParkingPage.typeEndHour('2:30')
            ParkingPage.endHour()
            ParkingPage.calculateClick()
            ParkingPage.verifyCost('$ 0.00')


            done()
        });
    it('Given as a user, When the user enters the date in the date field AND the user spends minus two hours in valet parking, THEN parking cost equals to $0'
        , async (done) => {
            ParkingPage.chooseParking('Long-Garage')
            ParkingPage.selectStartDate()
            CalendarPage.clickMonth()
            CalendarPage.selectMonth(6)
            CalendarPage.clickStartDate(17)
            ParkingPage.typeStartHour('5:00')
            ParkingPage.startHour()
            ParkingPage.selectEndDate()
            CalendarPage.clickMonth()
            CalendarPage.selectMonth(6)
            CalendarPage.clickStartDate(24)
            ParkingPage.typeEndHour('5:00')
            ParkingPage.endHour()
            ParkingPage.calculateClick()
            ParkingPage.verifyCost('$ 72.00')


            done()
        });
        it('Given as a user, When the user enters the date in the date field AND the user spends minus two hours in valet parking, THEN parking cost equals to $0'
        , async (done) => {
            ParkingPage.chooseParking('Long-Garage')
            ParkingPage.selectStartDate()
            CalendarPage.clickMonth()
            CalendarPage.selectMonth(6)
            CalendarPage.clickStartDate(17)
            ParkingPage.typeStartHour('5:00')
            ParkingPage.startHour()
            ParkingPage.selectEndDate()
            CalendarPage.clickMonth()
            CalendarPage.selectMonth(6)
            CalendarPage.clickStartDate(18)
            ParkingPage.typeEndHour('6:00')
            ParkingPage.endHour()
            ParkingPage.calculateClick()
            ParkingPage.verifyCost('$ 14.00')


            done()
        });
    afterAll(function () {
        browser.restartSync()
    })
});