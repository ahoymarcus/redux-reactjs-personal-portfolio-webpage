import React, { useState } from 'react';

// styles
import './AggregationTab.css';




const AggregationTab = () => {
	const [ search, setSearch ] = useState('');
	
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		
		
		console.log(search);
	};
	
	
	return (
		<div className="projects">
			<div className="agregationtab-header">
				<h2>My Technologies</h2>
				<div className="search-bar">
					<form onSubmit={handleSubmit}>
						<input 
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="search for your technology"
						/>
						<button type="submit">
							<i className="fa fa-search"></i>
						</button>
					</form>
				</div>
			</div>
			<div className="aggregationTab-tags-container">
				<h3>Tags</h3>
				<ul>
					<li>React-JS</li>
				</ul>
			</div>
		</div>
	);
};



export default AggregationTab;



