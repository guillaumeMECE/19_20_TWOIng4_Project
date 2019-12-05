
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
const { ReadMeasure, ReadOneMeasure, CreateMeasure, DeleteMeasure, ResetMeasure, UpdateMeasure } = require('@controllers');
const { ReadUser, ReadOneUser, CreateUser, DeleteUser, UpdateUser} = require('@controllers');


/**
 * Routes
 */

// Measure ROUTES
router.post('/measure', CreateMeasure);
// router.get('/measure/read/:id', ReadOneAshtray);
// router.get('/ashtray/read', ReadAshtray);
// router.put('/ashtray/reset/:id', ResetAshtray);
// router.patch('/ashtray/update/:id', UpdateAshtray);
// router.delete('/ashtray/delete/:id', DeleteAshtray);

// User ROUTES
router.post('/users', CreateUser);
router.get('/users/:id', ReadOneUser);
router.get('/users', ReadUser);
router.patch('/users/:id', UpdateUser);
router.delete('/users/:id', DeleteUser);


// TODO ROUTES
// router.post('/ashtray/create', CreateAshtray);
// router.get('/ashtray/read/:id', ReadOneAshtray);
// router.get('/ashtray/read', ReadAshtray);
// router.put('/ashtray/reset/:id', ResetAshtray);
// router.patch('/ashtray/update/:id', UpdateAshtray);
// router.delete('/ashtray/delete/:id', DeleteAshtray);

// QUESTION ROUTES 
// router.post('/question/add', Crearsid', middleware, DeleteQuestion);
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
