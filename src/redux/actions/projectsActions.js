import { ActionTypes } from '../constants/action-types';



// SET_FRONTEND_PROJECTS
// SET_BACKEND_PROJECTS
// SET_VANILLAJS_PROJECTS
// SET_WEB_DESIGN_PROJECTS
// SET_ALL_PROJECTS
// SET_MAIN_TAGS
// SET_TAG_COUNT
// SET_SELECTED_SECTION
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

export const setAllProjects = (allProjects) => {
	return {
		type: ActionTypes.SET_ALL_PROJECTS,
		payload: allProjects
	};
};

export const setMainTags = (mainTags) => {
	return {
		type: ActionTypes.SET_MAIN_TAGS,
		payload: mainTags
	};
};

export const setTagAddition = (tag) => {
	return {
		type: ActionTypes.SET_TAG_COUNT,
		payload: tag
	};
};

/*
export const setSelectedSection = (elemt) => {
	return {
		type: ActionTypes.SET_SELECTED_SECTION,
		payload: elemt
	};
};*/





