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


const sortByDate = (array) => {

};

/**
 * PROCESS :
 */
const process = async (param) => {

    try {
        const res = await UserModel.find({}).select({ 'location': true }).lean().exec();
        res.forEach((element) => {
            // eslint-disable-next-line no-param-reassign
            element.name = element.location;
        });

        let temp = [];
        for (let user = 0; user < res.length; user++) {
            // eslint-disable-next-line no-await-in-loop
            res[user].sensors = await SensorModel.find({ 'userID': res[user]._id }).select({ 'userID': true }).lean().exec();

            for (let sensor = 0; sensor < res[user].sensors.length; sensor++) {
                // eslint-disable-next-line no-await-in-loop
                res[user].sensors[sensor].measures = await MeasureModel.find({ 'sensorID': res[user].sensors[sensor]._id, 'type': 'temperature' }).select({ 'creationDate': true, 'value': true, '_id': false }).lean().exec();
                res[user].sensors[sensor].measures.forEach((element) => {
                    // eslint-disable-next-line no-param-reassign
                    element.name = element.creationDate;
                });
                // console.log('res[user].sensors[sensor].measures: ', res[user].sensors[sensor].measures);
                // eslint-disable-next-line no-restricted-globals
                // if (!isNaN(res[user].sensors[sensor].measures)) {

                temp = temp.concat(res[user].sensors[sensor].measures);
                // }
            }
            res[user].temp = temp;
            res[user].temp.sort((a, b) => {
                return new Date(a.creationDate) - new Date(b.creationDate);
            });
            delete res[user].sensors;
            temp = [];
        }

        // const i = new Date(res[0].temp[0].creationDate);
        // console.log('a: ', i);
        // const j = new Date(res[0].temp[1].creationDate);
        // console.log('b: ', j);
        // console.log('DATE', i - j);
        // console.log('UnSort tab', res[0].temp);
        // res[0].temp.sort((a, b) => {
        //     return new Date(a.creationDate) - new Date(b.creationDate);
        // });
        // console.log('Sort tab', res[0].temp);


        // for (let i = res.length - 1; i >= 4; i--) {
        //     res.splice(Math.floor(Math.random() * res.length), 1);
        //     console.log(res);
        // }

        return res;
    } catch (error) {
        throw new Error('sensorsByLocation can\'t be get'.concat(' > ', error.message));
    }

};

/**
 * LOGIC :
 */
const temperatureByLocation = async (req, res) => {
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
module.exports = temperatureByLocation;
