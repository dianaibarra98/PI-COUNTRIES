import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCoutryName, byContinents, getDetail } from '../../redux/action';
import { StyledSearch } from './StyledSearch';


const Search = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	// const [id, setId] = useState('');

	// const handleChange = (e) => {
	// 	e.preventDefault()
	// 	setId(e.target.value);
	// };

	const handleChange = (e) => {
		e.preventDefault()
		setName(e.target.value);
	};


	useEffect(() => {
		dispatch(getCoutryName(name));
	}, [dispatch, name]);

		useEffect(() => {
		dispatch(byContinents(name));
	}, [dispatch, name]);

	// useEffect(() => {
	// 	dispatch(getDetail(name));
	// }, [dispatch, name]);


	return (
		<StyledSearch>
			<div className='dark-mode'>
				<input
					type='text'
					placeholder='Buscar País...'
					onChange={(e) => handleChange(e)}
				></input>
			</div>
			<div>
				<input	
				type='text'
				placeholder='Buscar continente...'
				onChange={(e) => handleChange(e)}
				></input>
			</div>
			{/* <div>
				<input	
				type='text'
				placeholder='Buscar id País...'
				onChange={(e) => handleChange(e)}
				></input>
			</div> */}
		</StyledSearch>
	);
};

export default Search;