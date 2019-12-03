/* eslint-disable global-require */

module.exports = {

    // Ashtray handlers
    // CreateAshtray: require('./ashtray/Create'),
    // ReadOneAshtray: require('./ashtray/ReadOne'),
    // ReadAshtray: require('./ashtray/Read'),
    // ResetAshtray: require('./ashtray/Reset'),
    // UpdateAshtray: require('./ashtray/Update'),
    // DeleteAshtray: require('./ashtray/Delete'),

    // Measure handlers
    CreateMeasure: require('./measure/Create'),
    ReadOneMeasure: require('./measure/ReadOne'),
    ReadMeasure: require('./measure/Read'),
    ResetMeasure: require('./measure/Reset'),
    UpdateMeasure: require('./measure/Update'),
    DeleteMeasure: require('./measure/Delete'),

    // auth handlers
    // RegisterUser: require('./auth/RegisterUser'),
    // LoginUser: require('./auth/LoginUser'),

    // question handlers
    // CreateQuestion: require('./question/Create'),
    // ReadQuestions: require('./question/Read'),
    // ReadQuestion: require('./question/ReadOne'),
    // UpdateQuestion: require('./question/Update'),
    // DeleteQuestion: require('./question/Delete'),

    // user question handlers
    // CreateUserQrsuestion: require('./user_question/Delete'),
};
