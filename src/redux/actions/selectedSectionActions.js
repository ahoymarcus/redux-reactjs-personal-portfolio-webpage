import { ActionTypes } from '../constants/action-types';



// SET_SELECTED_SECTION
export const setSelectedSection = (element) => {
	return {
		type: ActionTypes.SET_SELECTED_SECTION,
		payload: element
	};
};



