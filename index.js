// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const firstTwoDrivers = [drivers[0], drivers[1]];
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const lastTwoDrivers = [drivers[(drivers.length)-2], drivers[(drivers.length)-1]];
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor) {
    return function(fare) {
        return fare * factor;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, fn) { 
    if(fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else if(fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}
