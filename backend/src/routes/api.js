
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */

/**
 * Controllers imports
 */
// Ashtray IMPORT
// const { ReadAshtray, ReadOneAshtray, CreateAshtray, DeleteAshtray, ResetAshtray, UpdateAshtray } = require('@controllers');

// AUTH IMPORT
// const { RegisterUser, LoginUser } = require('@controllers');

// QUESTION IMPORT
// const { CreateQuestion, ReadQuestions, ReadQuestion, UpdateQuestion, DeleteQuestion } = require('@controllers');

// USER QUESTION IMPORT
// const { CreateUserQuestion, ReadUserQuestions, ReadUserQuestion, UpdateUserQuestion, DeleteUserQuestion } = require('@controllers');

/**
 * Measure IMPORT
 */
const { ReadMeasure, ReadOneMeasure, CreateMeasure, DeleteMeasure, UpdateMeasure } = require('@controllers');


// MIDDLEWARES
// const { middleware } = require('@middlewares');
/**
 * Routes
 */
// AUTH ROUTES
// router.post('/register', RegisterUser);
// router.post('/login', LoginUser);

// Measure ROUTES
router.post('/measure', CreateMeasure);
router.get('/measure/:id', ReadOneMeasure);
router.get('/measure', ReadMeasure);
router.patch('/measure/:id', UpdateMeasure);
router.delete('/measure/:id', DeleteMeasure);

// TODO ROUTES
// router.post('/ashtray/create', CreateAshtray);
// router.get('/ashtray/read/:id', ReadOneAshtray);
// router.get('/ashtray/read', ReadAshtray);
// router.put('/ashtray/reset/:id', ResetAshtray);
// router.patch('/ashtray/update/:id', UpdateAshtray);
// router.delete('/ashtray/delete/:id', DeleteAshtray);

// QUESTION ROUTES 
// router.post('/question/add', Crearsid', middleware, DeleteQuestion);
module.exports = router;
