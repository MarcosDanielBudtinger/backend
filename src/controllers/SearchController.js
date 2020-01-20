const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        //buscando desenvolvedores em um raio de 10km
        //filtrando por tecnologia que trabalha
        const { latitude, longitude, techs } = request.query;
       
        const techsArray = parseStringAsArray(techs);

        console.log(techsArray);
        return response.json({ devs: []});
    },
}