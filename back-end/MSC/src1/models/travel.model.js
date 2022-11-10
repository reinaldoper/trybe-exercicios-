const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const doesPassengerExist = async (passengerId) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [passengerId],
  );
  if (passenger) return true;
  return false;
};

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints.map(async (value) => connection.execute(
      'INSERT INTO waypoints (address, stop_order, travel_id) VALUE (?, ?, ?)',
      [value.address, value.stopOrder, travelId],
    ));
  }
  return [];
};

const insertTravels = async (travel) => {
  const columns = Object.keys(snakeize(travel))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(travel)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
    [...Object.values(travel)],
  );

  return insertId;
};
const insertCars = async (cars) => {
  const columns = Object.keys(snakeize(cars))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(cars)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO cars (${columns}) VALUE (${placeholders})`,
    [...Object.values(cars)],
  );

  return insertId;
};

const insertDrivers = async (drivers) => {
  const columns = Object.keys(snakeize(drivers))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(drivers)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO drivers (${columns}) VALUE (${placeholders})`,
    [...Object.values(drivers)],
  );

  return insertId;
};

const insertDriversCars = (driversCars, driversId) => {
  console.log(driversCars, driversId);
  if (driversCars && driversCars.length > 0) {
    const result = driversCars.map(async (value) => connection.execute(
      'INSERT INTO drivers_cars (driver_id, car_id) VALUE (?, ?)',
      [driversId, value],
    ));
    console.log(result);
    return result;
  }
  return [];
};

const findAllDrivers = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM drivers',
  );
  return result;
};

const getCars = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM cars',
  );
  return result;
};

const findById = async (travelId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM travels WHERE id = ?',
    [travelId],
  );
  return camelize(result);
};

const findByIdCar = async (carsId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM cars WHERE id = ?',
    [carsId],
  );
  return camelize(result);
};

const findByIdDrivers = async (driversId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?',
    [driversId],
  );
  return camelize(result);
};

const findByTravelStatusId = async (travelStatusId) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?',
    [travelStatusId],
  );
  return camelize(result);
};

module.exports = {
  insertTravels,
  findById,
  findByTravelStatusId,
  findAllDrivers,
  insertCars,
  doesPassengerExist,
  saveWaypoints,
  getCars,
  findByIdCar,
  insertDrivers,
  findByIdDrivers,
  insertDriversCars,
};
