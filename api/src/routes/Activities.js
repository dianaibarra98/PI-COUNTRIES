// // MI INTENTO DE ACTIVITIES ROUTES 

// const { Router } = require("express");
// const { getDbActivity } = require("../Controllers/Controllers");
// const router = Router();
// const { Country, Activity } = require("../db");

// router.get('/activity', async (req, res) => {
// 	const activities = await getDbActivity();
// 	const { name } = req.query;
// 	res.status(200).send(activities);
// });

// router.post('/activity', async (req, res) => {
// 	let { name, difficulty, duration, season, countriesId } = req.body;

// 	const createActivity = await Activity.create({
// 		name,
// 		difficulty,
// 		duration,
// 		season,
// 	});

// 	if (countriesId) {

// 		await createActivity.addCountries(countriesId); 
// 	} 

// 	return res.status(200).json({ mesage: 'exito', createActivity });
// });

// module.exports = router;




//----------------------------------------------------------------------------------
