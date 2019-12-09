const { UserModel, SensorModel, MeasureModel } = require('@models');

/**
 * Request structure
 * req = { body: {location:{xx,xx}, userID:string, questionID:string, } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async (req) => {

    const inputs = {};

    return inputs;
};

/**
 * PROCESS :
 */
const process = async (param) => {

    try {
        const res = await UserModel.find({}).select({ 'location': true }).lean().exec();

        for (let user = 0; user < res.length; user++) {
            // eslint-disable-next-line no-await-in-loop
            res[user].sensors = await SensorModel.find({ 'userID': res[user]._id }).lean().exec();
            console.log('res[user].sensors[sensor].length: ', res[user].sensors.length);
            for (let sensor = 0; sensor < res[user].sensors.length; sensor++) {
                // eslint-disable-next-line no-await-in-loop
                res[user].sensors[sensor].measures = await MeasureModel.find({ 'sensorID': res[user].sensors[sensor]._id, 'type': 'airPollution' }).exec();
                console.log('res[user].sensors[sensor].measures: ', res[user].sensors[sensor].measures);
            }
        }
        console.log('res: ', res);


        return res;
    } catch (error) {
        throw new Error('sensorsByLocation can\'t be get'.concat(' > ', error.message));
    }

};

/**
 * LOGIC :
 */
const airPollutionByLocation = async (req, res) => {
    try {
        const inputs = await secure(req);

        const data = await process(inputs);

        res.status(200).json({ data });

    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = airPollutionByLocation;
