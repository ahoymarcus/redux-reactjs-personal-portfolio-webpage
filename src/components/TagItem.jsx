import React from 'react';

import { mainTags } from '../data/main-tags';


	
const TagItem = ({ tag }) => {
	console.log(tag);
	
	const result = mainTags.map((value) => {
		if (value.name.toLowerCase() === tag) {
			return value.count;
		}
	});
	
	console.log(result);
	
	return (
		<li>#{tag} (<span className="number-values">{result}</span>)</li>
	);
};



export default TagItem;


