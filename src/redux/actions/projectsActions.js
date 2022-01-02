import { ActionTypes } from '../constants/action-types';



// SET_FRONTEND_PROJECTS: 'SET_FRONTEND_PROJECTS',
// SET_BACKEND_PROJECTS: 'SET_BACKEND_PROJECTS',
// SET_VANILLAJS_PROJECTS: 'SET_VANILLAJS_PROJECTS',
// SET_WEB_DESIGN_PROJECTS: 'SET_WEB_DESIGN_PROJECTS'
export const setFrontendProjects = (frontend) => {
	return {
		type: ActionTypes.SET_FRONTEND_PROJECTS,
		payload: frontend
	};
};

export const setBackendProjects = (backend) => {
	return {
		type: ActionTypes.SET_BACKEND_PROJECTS,
		payload: backend
	};
};

export const setVanillaJsProjects = (vanillaJs) => {
	return {
		type: ActionTypes.SET_VANILLAJS_PROJECTS,
		payload: vanillaJs
	};
};

export const setWebDesignProjects = (webDesign) => {
	return {
		type: ActionTypes.SET_WEB_DESIGN_PROJECTS,
		payload: webDesign
	};
};





