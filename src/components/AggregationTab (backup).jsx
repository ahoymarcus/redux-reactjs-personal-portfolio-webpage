import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { mainTagsNames, mainTags } from '../common/main-tags';


// styles
import './AggregationTab.css';

// components
import TagItem from './TagItem';



const AggregationTab = () => {
	const [ search, setSearch ] = useState('');
	
	const allProjectsObject = useSelector((state) => state.allProjects);
	//console.log(allProjectsObject);
	
	const allProjectsArr = [...allProjectsObject.frontend, ...allProjectsObject.backend, ...allProjectsObject.vanillaJs, ...allProjectsObject.webDesign];
	
	const totalProjectsArraySize = allProjectsObject.frontend.length + allProjectsObject.backend.length + allProjectsObject.vanillaJs.length + allProjectsObject.webDesign.length;
	
	
	let completeTagsArr = [];
	
	completeTagsArr = allProjectsArr.map((project) => {
		completeTagsArr = completeTagsArr.concat(project.tags);
				
		return completeTagsArr;
	});
	
	const uniqueTagsSet = new Set(completeTagsArr[completeTagsArr.length - 1]);
	
	//console.log(uniqueTagsSet);
	const uniqueTagsArr = [...uniqueTagsSet];
	
	
	const aggregateTags = (tagArr) => {
		tagArr.forEach((project) => {
			mainTagsNames.forEach((tag) => {
				if (project.tags.includes(tag)) {
					console.log(tag);
					
					mainTags.forEach((obj) => {
						if (obj.name.toLowerCase() === tag) {
							obj.count += 1;
						}
					});
				}
			});

		});
	};
	
	
	useEffect(() => {
		aggregateTags(allProjectsArr);
		console.log(allProjectsArr);
	}, []);
	
	
		
	
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
				<h3>Total de Projetos: <span className="number-values">{totalProjectsArraySize}</span> projetos</h3>
			</div>
			<div className="aggregationTab-tags-container">
				<h3>Main Tags</h3>
				<ul className="tag-list-container">
					{uniqueTagsArr.map((tag, index) => {
						if (mainTagsNames.includes(tag.toLowerCase())) {
							return <TagItem key={index} tag={tag} />;
						}
					})}
				</ul>
				
				
			</div>
			
		</div>
	);
};



export default AggregationTab;



