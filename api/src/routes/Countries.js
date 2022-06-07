// //MI INTENTO DE COUNTRIES ROUTES



// const { Router } = require("express");
// const router = Router();
// const { Country, Activity } = require("../db");
// const {
//   getApiInfo,
//   getDb,
// } = require("../Controllers/Controllers");


// router.get('/countries', async (req, res) => {
// 	// /countries?name=argentina
// 	const { name } = req.query;
// 	// countries = await getApiInfo();
// 	let countries;
// 	const countryDB = await Country.count();
// 	countries =
// 		countryDB === 0
// 			? await getApiInfo() // asi que si la db esta vacia llamo a la api
// 			: await getDb(); // si no saco de la bd
// 	if (name) {
// 		console.log('este es el name', name);
// 		const byName = countries.filter((n) =>
// 			n.name.toLowerCase().includes(name.toLowerCase())
// 		);
// 		byName.length
// 			? res.status(200).send(byName)
// 			: res.status(404).json({ error: 'no se encontro ningun pais' });
// 	} else {
// 		res.status(200).send(countries);
// 	}
// });


// router.get('/countries/:id', async function (req, res) {
// 	const id = req.params.id.toUpperCase();
// 	const allCountries = await getDb();
// 	if (id) {
// 		const idCountries = allCountries.filter((i) => i.id === id);
// 		idCountries.length
// 			? res.status(200).send(idCountries)
// 			: res.status(404).send('id no valido');
// 	}
// });

// module.exports = router;


