const connection = require('./connection');

const putDrive = async (travelId, driverId) => {
  await connection.execute(
    'UPDATE travels SET driver_id = ? WHERE id = ?',
    [driverId, travelId],
  );
};

const putDriveStatus = async (DRIVER_ON_THE_WAY, travelId, driverId) => {
  await connection.execute(
    'UPDATE travels SET travel_status_id = ? WHERE id = ? AND driver_id = ?',
    [DRIVER_ON_THE_WAY, travelId, driverId],
  );
};

const travelsId = async (travelId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM travels WHERE id = ?',
    [travelId],
  );
  return result;
};

const findAll = async () => {
  const [result] = await connection.execute(
  'SELECT * FROM drivers',
  );

  return result;
};

module.exports = { putDrive, putDriveStatus, travelsId, findAll };