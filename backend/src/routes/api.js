
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */

/**
 * Controllers imports
 */

// Measure IMPORT
const { ReadMeasure, ReadOneMeasure, CreateMeasure, DeleteMeasure, UpdateMeasure } = require('@controllers');


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

module.exports = router;
