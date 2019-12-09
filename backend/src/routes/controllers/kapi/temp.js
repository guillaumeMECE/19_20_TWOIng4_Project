const { UserModel } = require('@models');
const { MeasureModel } = require('@models');
const { SensorModel } = require('@models');



/**
 * récupérer le nb nombre de pays
 * comparer toutes les températures dans chaque pays puis diviser par le nb de capteurs
 * envoyer température et pays correspondant
 * 
 */


/**
* PROCESS :
*/
const process = async (param) => {
    const inputs = param;

    console.log('inputs: ', inputs);

    try {
        const data = await MeasureModel INNER JOIN UserModel, SensorModel .group({

            "key":{
                  "users.location": true
            },
            "initial": {
                  "sumforaverageaveragevalue":0,
                  "countforaverageaveragevalue": 0
            },
            "reduce": function( obj , prev ){
                  prev.sumforaverageaveragevalue += obj.value;
                  prev.countforaverageaveragevalue++;
         
            },
            "finalize": function( prev ){
                  prev.averagevalue = prev.sumforaverageaveragevalue / prev.countforaverageaveragevalue;
                  delete prev.sumforaverageaveragevalue;
                  delete prev.countforaverageaveragevalue;
            },
            "cond": {
         
             "$and": [{
                 "$where": "this.users._id  == this. sensors.userId "
             },{
             "$and": [{
                 "$where": "this. sensors._id  == this. measures.sensorId "
             },{	" measures.type " :  "temperature" 
             }]
             }]
            }
         
         });
        



        return data;
    } catch (error) {
        throw new Error('User can\'t be create'.concat(' > ', error.message));
    }

};

/**
* LOGIC :
*/
const tempMoyPays = async (req, res) => {
    try {

        const data = await process(inputs);


        res.status(200).json({ data });

    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(400).json({ 'message': error.message });
    }
};
module.exports = tempMoyPays;
