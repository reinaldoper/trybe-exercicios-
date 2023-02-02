const express = require('express');
const travelModel = require('./models/travel.model');
const driveModel = require('./models/drives.model');

const app = express();

app.use(express.json());

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

app.get('/drivers', async (_req, res) => {
  const result = await travelModel.findAllDrivers();
  res.status(200).json(result);
});
app.get('/drivers/:id', async (req, res) => {
  const { id } = req.params;
  const result = await travelModel.findByIdDrivers(Number(id));
  if (result) {
    res.status(200).json(result);
  }
  return res.status(500).json({ message: 'Driver not found!' });
});

app.get('/cars', async (_req, res) => {
  const result = await travelModel.getCars();
  res.status(200).json(result);
});

app.get('/cars/:id', async (req, res) => {
  const { id } = req.params;
  const result = await travelModel.findByIdCar(Number(id));
  if (result) {
    res.status(200).json(result);
  }
  return res.status(500).json({ message: 'Ocorreu um erro' });
});

app.get('/drivers/open/travels', async (_req, res) => {
  const result = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  res.status(200).json(result);
});

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const {
    startingAddress,
    endingAddress,
    waypoints,
  } = req.body;

  if (await travelModel.doesPassengerExist(passengerId)) {
    // Aqui substituímos o trecho de código SQL pela chamada a função insert do model
    // e armazenamos o retorno da função na variável travelId 
    const travelId = await travelModel
    .insertTravels({ passengerId, startingAddress, endingAddress });

    // Renomeamos o parâmetro result.insertId para travelId
    await Promise.all(travelModel.saveWaypoints(waypoints, travelId));

    const travel = await travelModel.findById(travelId);
    return res.status(201).json(travel);
  }

  res.status(500).json({ message: 'Ocorreu um erro' });
});

app.post('/cars', async (req, res) => {
  const {
    model,
    color,
    licensePlate,
  } = req.body;
    const carsId = await travelModel
    .insertCars({ model, color, licensePlate });

    const car = await travelModel.findByIdCar(carsId);
    if (car) {
      return res.status(201).json(car);
    }
    return res.status(500).json({ message: 'Ocorreu um erro' });
});

app.post('/drivers', async (req, res) => {
  const {
    name,
    carIds,
  } = req.body;
  
    const driversId = await travelModel
    .insertDrivers({ name });
    const result = await Promise.all(travelModel.insertDriversCars(carIds, driversId));
    /* console.log(result); */
    const drive = await travelModel.findByIdDrivers(driversId);
    if (drive && result) {
      return res.status(201).json(drive);
    }
    return res.status(500).json({ message: 'Ocorreu um erro' });
});

app.put('/drivers/:driverId/travels/:travelId/assign', async (req, res) => {
  const { travelId, driverId } = req.params;
  await driveModel.putDrive(travelId, driverId);

  await driveModel.putDriveStatus(DRIVER_ON_THE_WAY, travelId, driverId);
  
  const result = await driveModel.travelsId(travelId);
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/start', async (req, res) => {
  const { travelId, driverId } = req.params;
  
  await driveModel.putDriveStatus(TRAVEL_IN_PROGRESS, travelId, driverId);

  const result = await driveModel.travelsId(travelId);
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/end', async (req, res) => {
  const { travelId, driverId } = req.params;

  await driveModel.putDriveStatus(TRAVEL_FINISHED, travelId, driverId);
  const result = await driveModel.travelsId(travelId);
  res.status(200).json(result);
});

module.exports = app;
