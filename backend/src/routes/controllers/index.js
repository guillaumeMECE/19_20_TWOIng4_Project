/* eslint-disable global-require */

module.exports = {

    // Measure handlers
    CreateMeasure: require('./measure/Create'),
    ReadOneMeasure: require('./measure/ReadOne'),
    ReadMeasure: require('./measure/Read'),
    UpdateMeasure: require('./measure/Update'),
    DeleteMeasure: require('./measure/Delete'),

    // User handlers
    CreateUser: require('./user/Create'),
    ReadOneUser: require('./user/ReadOne'),
    ReadUser: require('./user/Read'),
    UpdateUser: require('./user/Update'),
    DeleteUser: require('./user/Delete'),

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
    // Sensor handlers
    CreateSensor: require('./sensor/Create'),
    ReadOneSensor: require('./sensor/ReadOne'),
    ReadSensor: require('./sensor/Read'),
    UpdateSensor: require('./sensor/Update'),
    DeleteSensor: require('./sensor/Delete'),
};
