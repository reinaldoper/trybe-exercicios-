const travelModel = require('../models/travel.model');
const driverModel = require('../models/drives.model');

const WAITING_DRIVER = 1;
// const DRIVER_ON_THE_WAY = 2;
// const TRAVEL_IN_PROGRESS = 3;
// const TRAVEL_FINISHED = 4;

const getWaitingDriverTravels = async () => {
  const [result] = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  return { type: null, message: result }; 
};
const getDrivers = async () => {
  const drivers = await driverModel.findAll();
     return { type: null, message: drivers };
};

module.exports = {
  getWaitingDriverTravels,
  getDrivers,
};