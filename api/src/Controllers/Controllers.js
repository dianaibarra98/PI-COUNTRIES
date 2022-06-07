// //MI INTENTO DE CONTROLLER



// const axios = require("axios");
// // const { Op } = require("sequelize");
// const { Country, Activity } = require("../db");

// const getApiInfo = async () => {
// 	try{const { data } = await axios('https://restcountries.com/v3/all');
// 	const apiInfo = await data.map((country) => {
// 		return {
// 			id: country.cca3,
// 			name: country.name.common,
// 			img: country.flags[0],
// 			continents: country.continents[0],
// 			capital: country.capital? country.capital[0] : 'Capital Not Found' , // pregunto si hay capital, si hay la traigo y si no, mando un mensaje de not found
// 			subregion: country.subregion ? country.subregion : 'Sub Region Not Found',  // de lo contrario no accedo
// 			area: country.area,
// 			population: country.population,
// 		};
// 	});
// 	const countryResult = await Country.bulkCreate(apiInfo);
// 	return countryResult;
// }catch(error){
// 	console.log(error);
// }
// };

// const getDb = async () => {
// 	//traer db e incluir una actividad
// 	return await Country.findAll({
// 		include: {
// 			model: Activity,
// 			attributes: ['name', 'difficulty', 'duration', 'season'],
// 			through: {
// 				attributes: []
// 			},
// 		},
// });
// };



// const getDbActivity = async () => {
// 	return await Activity.findAll({
// 		include: {
// 			model: Country,
// 			attribute: ['name:', 'img', 'continents', 'capital'],
// 			through: {
// 				attributes: [],
// 			},
// 		},
// 	});
// };



// module.exports = {
//  getApiInfo,
//  getDb,
//  getDbActivity
// };





