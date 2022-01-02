import { ActionTypes } from '../constants/action-types';



// SET_FRONTEND_PROJECTS: 'SET_FRONTEND_PROJECTS',
// SET_BACKEND_PROJECTS: 'SET_BACKEND_PROJECTS',
// SET_VANILLAJS_PROJECTS: 'SET_VANILLAJS_PROJECTS',
// SET_WEB_DESIGN_PROJECTS: 'SET_WEB_DESIGN_PROJECTS'
export const setFrontend = (frontend) => {
	return {
		type: ActionTypes.SET_FRONTEND_PROJECTS,
		payload: frontend
	};
};

export const setBackend = (backend) => {
	return {
		type: ActionTypes.SET_BACKEND_PROJECTS,
		payload: backend
	};
};

export const setVanillaJs = (vanillaJs) => {
	return {
		type: ActionTypes.SET_VANILLAJS_PROJECTS,
		payload: vanillaJs
	};
};

export const setWebDesign = (webDesign) => {
	return {
		type: ActionTypes.SET_WEB_DESIGN_PROJECTS,
		payload: webDesign
	};
};





