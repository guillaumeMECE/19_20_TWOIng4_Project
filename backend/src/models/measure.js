
const { Schema, model } = require('mongoose');

const name = 'Measure';

// TODO: ObjectID check type for userID & lifeTime
const attributes = {
    text: {
        type: String,
        required: true
    },
    proposal_a: {
        type: String,
        required: true
    },
    proposal_b: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    lifeTime: {
        type: String,
        required: true
    },
    CreatedAt: {
        type: String,
        required: true
    },
};

const options = {};

const MeasureSchema = new Schema(attributes, options);

const MeasureModel = model(name, MeasureSchema);

module.exports = MeasureModel;
