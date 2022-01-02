import { ActionTypes } from '../constants/action-types';


// SET_FRONTEND_PROJECTS: 'SET_FRONTEND_PROJECTS',
// SET_BACKEND_PROJECTS: 'SET_BACKEND_PROJECTS',
// SET_VANILLAJS_PROJECTS: 'SET_VANILLAJS_PROJECTS',
// SET_WEB_DESIGN_PROJECTS: 'SET_WEB_DESIGN_PROJECTS'
const initialState = {
	frontend: [],
	backend: [],
	vanillaJs: [],
	webDesign: [],
};


export const projectsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_FRONTEND_PROJECTS:
			return { ...state, frontend: payload };
		case ActionTypes.SET_BACKEND_PROJECTS:
			return { ...state, backend: payload };
		case ActionTypes.SET_VANILLAJS_PROJECTS:
			return { ...state, vanillaJs: payload };
		case ActionTypes.SET_WEB_DESIGN_PROJECTS:
			return { ...state, webDesign: payload };
		default:
			return state;
	}
};



