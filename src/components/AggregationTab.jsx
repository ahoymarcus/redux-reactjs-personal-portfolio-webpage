import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// styles
import './AggregationTab.css';




const AggregationTab = () => {
	const [ search, setSearch ] = useState('');
	
	const allProjects = useSelector((state) => state.allProjects);
	//console.log(allProjects);
	
	const allProjectsArr = [...allProjects.frontend, ...allProjects.backend, ...allProjects.vanillaJs, ...allProjects.webDesign];
	const totalProjectsSize = allProjects.frontend.length + allProjects.backend.length + allProjects.vanillaJs.length + allProjects.webDesign.length;
	
	let completeTagsArr = [];
	
	completeTagsArr = allProjectsArr.map((project) => {
		completeTagsArr = completeTagsArr.concat(project.tags);
				
		return completeTagsArr;
	});
	
	const uniqueTagsSet = new Set(completeTagsArr[completeTagsArr.length - 1]);
	
	console.log(uniqueTagsSet);
	const uniqueTagsArr = [...uniqueTagsSet];
	
	
	
	
	
	
	
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
							placeholder="search for some tech"
						/>
						<button type="submit">
							<i className="fa fa-search"></i>
						</button>
					</form>
				</div>
			</div>
			<div className="info-numbers">
				<h3>Total de Projetos: {totalProjectsSize}</h3>
			</div>
			<div className="aggregationTab-tags-container">
				<h3>Tags</h3>
				<ul>
					{uniqueTagsArr.map((tag, index) => {
						return <li key={index}>{tag}</li>;
					})}
				</ul>
			</div>
			
		</div>
	);
};



export default AggregationTab;



