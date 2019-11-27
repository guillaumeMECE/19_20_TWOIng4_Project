
const { Schema, model } = require('mongoose');

const name = 'Sensor';

// TODO: ObjectID check type for userID & questionID
const attributes = {
    location: {
        type: String,
        required: true
    },
    userID: {
        type: Number,
        required: true
    },
    CreatedAt: {
        type: String,
        required: true
    },
    UpdatedAt: {
        type: String,
        required: true
    }

};

const options = {};

const SensorSchema = new Schema(attributes, options);

const SensorModel = model(name, SensorSchema);

module.exports = SensorModel;
