/* eslint-disable global-require */

module.exports = {

    // Measure handlers
    CreateMeasure: require('./measure/Create'),
    ReadOneMeasure: require('./measure/ReadOne'),
    ReadMeasure: require('./measure/Read'),
    UpdateMeasure: require('./measure/Update'),
    DeleteMeasure: require('./measure/Delete'),

    // Sensor handlers
    CreateSensor: require('./sensor/Create'),
    ReadOneSensor: require('./sensor/ReadOne'),
    ReadSensor: require('./sensor/Read'),
    UpdateSensor: require('./sensor/Update'),
    DeleteSensor: require('./sensor/Delete'),
};
