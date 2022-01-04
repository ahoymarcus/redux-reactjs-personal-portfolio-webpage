import React from 'react';

import { useSelector } from 'react-redux';


	
const AggregationTagItem = ({ tag }) => {
	//console.log(tag);
	
	const mainTags = useSelector((state) => state.allProjects.mainTags);
	
	const result = mainTags.map((value) => {
		if (value.name.toLowerCase() === tag) {
			return value.count;
		}
	});

	
	return (
		<li>#{tag} (<span className="number-values">{result}</span>)</li>
	);
};



export default AggregationTagItem;
//export const MemoizedAggregationTagItem = React.memo(MemoizedAggregationTagItem);



