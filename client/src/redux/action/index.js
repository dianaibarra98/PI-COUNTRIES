import axios from 'axios';
export const COUNTRIES = 'COUNTRIES';
export const BY_CONTINENTS = 'BY_CONTINENTS';
export const BY_ACTIVITY = 'BY_ACTIVITY';
export const ALPHABETICAL_ORDER = 'ALPHABETICAL_ORDER';
export const POPULATION_ORDER = 'POPULATION_ORDER';
export const SEARCH = 'SEARCH';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_DETAIL = 'GET_DETAIL';
export const SET_LOADING = 'SET_LOADING';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

export const getAllActivities = () => {
	return async (dispatch) => {
		const { data } = await axios('http://localhost:3001/activity');
		return dispatch({
			type: GET_ACTIVITIES,
			payload: data,
		});
	};
};

export const getAllCountries = () => {
	return async (dispatch) => {
		const { data } = await axios('http://localhost:3001/countries');
		return dispatch({
			type: COUNTRIES,
			payload: data,
		});
	};
};

export const getDetail = (id) => {
	return async (dispatch) => {
		const { data } = await axios(`http://localhost:3001/countries/${id}`);
		return dispatch({
			type: GET_DETAIL,
			payload: data,
		});
	};
};

export const getCoutryName = (payload) => {
	// try {
		return async (dispatch) => {
			const { data } = await axios(
				`http://localhost:3001/countries?name=${payload}`
			);

			return dispatch({
				type: SEARCH,
				payload: data,
			});
		};
	// } catch (error) {
	// 	console.log(error);
	// }
};
// return dispatch({
//   type: SEARCH,
//   payload:error,
// })

export const createActivity = (payload) => {
	return async (dispatch) => {
		const res = await axios.post('http://localhost:3001/activity', payload);
		return dispatch({
			type: CREATE_ACTIVITY,
			res,
		});
	};
};

export const byContinents = (payload) => {
	return {
		type: BY_CONTINENTS,
		payload,
	};
};

export const byActivity = (payload) => {
	return {
		type: BY_ACTIVITY,
		payload,
	};
};

export const alphabeticalOrder = (payload) => {
	return {
		type: ALPHABETICAL_ORDER,
		payload,
	};
};

export const populationOrder = (payload) => {
	return {
		type: POPULATION_ORDER,
		payload,
	};
};

export function setLoading(payload) {
	return { type: SET_LOADING, payload };
}