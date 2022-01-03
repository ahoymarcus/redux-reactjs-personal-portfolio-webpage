import React from 'react';

import { mainTags } from '../data/main-tags';


	
const TagItem = ({ tag, allProjectsArr }) => {
	

		
	// allProjectsArr.map((project) => {
		// if (project.tags.included(tag.toLowerCase())) {
			// mainTags.map((tag) => {
				// if (tag.name === tag) {
					// tag.count += 1;
				// }
			// });
		// }
	// });
	
	// return <li>#{tag}: {tag.count}</li>;
	
	
	
	return (
		<li>#{tag}</li>
	);
};



export default TagItem;


