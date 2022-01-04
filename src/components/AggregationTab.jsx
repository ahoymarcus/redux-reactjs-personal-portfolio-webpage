import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { mainTagsNames } from '../common/main-tags';

import { setTagAddition } from '../redux/actions/projectsActions';

// styles
import './AggregationTab.css';

// components
import AggregationTagItem from './AggregationTagItem';



const AggregationTab = () => {
	const dispatch = useDispatch();
	
		
	const allProjectsObject = useSelector((state) => state.allProjects);
	const allProjectsArr = useSelector((state) => state.allProjects.allProjects);
	const mainTags = useSelector((state) => state.allProjects.mainTags);
	
	
	
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
					//console.log(tag);
					
					mainTags.forEach((obj) => {
						if (obj.name.toLowerCase() === tag) {
							
							dispatch(setTagAddition(tag));
						}
					});
				}
			});

		});
	};
	
	
	// useEffect(() => {
		// const timer = setTimeout(() => {
			// aggregateTags(allProjectsArr);
			// console.log(allProjectsArr);
		// }, 1000);
		
		// return () => clearTimeout(timer);	
	// }, []);
	
	
	
	return (
		<div className="projects">
			<div className="info-numbers">
				<h3>Total de Projetos: <span className="number-values">{totalProjectsArraySize}</span> projetos</h3>
			</div>
			<div className="aggregationTab-tags-container">
				<h3>Main Tags</h3>
				<ul className="tag-list-container">
					{uniqueTagsArr.map((tag, index) => {
						if (mainTagsNames.includes(tag.toLowerCase())) {
							return <AggregationTagItem key={index} tag={tag} />;
						}
					})}
				</ul>
			</div>
			
		</div>
	);
};



//export default AggregationTab;
export const MemoizedAggregationTab = React.memo(AggregationTab);


