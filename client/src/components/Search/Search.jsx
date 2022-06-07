import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCoutryName } from '../../redux/action';
import { StyledSearch } from './StyledSearch';

const Search = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	const handleChange = (e) => {
		e.preventDefault()
		setName(e.target.value);
	};


	useEffect(() => {
		dispatch(getCoutryName(name));
	}, [dispatch, name]);

	return (
		<StyledSearch>
			<div className='dark-mode'>
				<i class='fas fa-search'></i>
				<input
					type='text'
					placeholder='Buscar País...'
					onChange={(e) => handleChange(e)}
				></input>
				<i class='fas fa-times close'></i>
			</div>
		</StyledSearch>
	);
};

export default Search;