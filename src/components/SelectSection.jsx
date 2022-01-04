import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedSection } from '../redux/actions/selectedSectionActions';

// styles
import './SelectSection.css';



const SelectSection = () => {
	const dispatch = useDispatch();
	
	
	const [ isSelected, setIsSelected ] = useState('All');
	
	const selected = useSelector((state) => state.selectedSection.selectedSection);	
	
	
	const handleChange = (e) => {
		console.log(e.target.value);
		
		setIsSelected(e.target.value);
	};
	
	useEffect(() => {
		dispatch(setSelectedSection(isSelected));
	}, [isSelected]);
	
	
	
	return (
		<div className="select-section-header">
			<h2>My Technologies</h2>
			<div className="select-option">
				<form>
					<select value={selected} onChange={handleChange}>
						<option value="All">All</option>
						<option value="Frontend">Frontend</option>
						<option value="Backend">Backend</option>
						<option value="VanillaJS">VanillaJS</option>
					</select>						
				</form>
			</div>
		</div>
	);
};



export default SelectSection;


