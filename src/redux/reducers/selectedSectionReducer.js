import { ActionTypes } from '../constants/action-types';



// SET_SELECTED_SECTION
const initialState = {
	selectedSection: 'All',
};


export const selectedSectionReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_SELECTED_SECTION:
			return { ...state, selectedSection: payload };
		default:
			return state;
	}
};



