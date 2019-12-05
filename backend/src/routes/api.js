
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */

/**
 * Controllers imports
 */

// MEASURE IMPORT
const { ReadMeasure, ReadOneMeasure, CreateMeasure, DeleteMeasure, UpdateMeasure } = require('@controllers');

// SENSOR IMPORT
const { ReadSensor, ReadOneSensor, CreateSensor, DeleteSensor, UpdateSensor } = require('@controllers');

/**
 * MIDDLEWARES
 */


/**
 * Routes
 */

// Measure ROUTES
router.post('/measure', CreateMeasure);
router.get('/measure/:id', ReadOneMeasure);
router.get('/measure', ReadMeasure);
router.patch('/measure/:id', UpdateMeasure);
router.delete('/measure/:id', DeleteMeasure);

// Sensor ROUTES
router.post('/sensor', CreateSensor);
router.get('/sensor/:id', ReadOneSensor);
router.get('/sensor', ReadSensor);
router.patch('/sensor/:id', UpdateSensor);
router.delete('/sensor/:id', DeleteSensor);

module.exports = router;
