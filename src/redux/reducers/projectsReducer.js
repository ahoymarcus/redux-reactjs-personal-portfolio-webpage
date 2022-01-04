import { ActionTypes } from '../constants/action-types';


// SET_FRONTEND_PROJECTS
// SET_BACKEND_PROJECTS
// SET_VANILLAJS_PROJECTS
// SET_WEB_DESIGN_PROJECTS
// SET_ALL_PROJECTS
// SET_MAIN_TAGS
// SET_TAG_COUNT
// SET_SELECTED_SECTION
const initialState = {
	frontend: [],
	backend: [],
	vanillaJs: [],
	webDesign: [],
	allProjects: [],
	mainTags: [],
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
		case ActionTypes.SET_ALL_PROJECTS:
			return { ...state, allProjects: payload };
		case ActionTypes.SET_MAIN_TAGS:
			return { ...state, mainTags: payload };
		case ActionTypes.SET_TAG_COUNT:
			let tempMainTags = state.mainTags.map((tagItem) => {
				//console.log(tagItem.name + ' ::: ' + payload);
				
				if (tagItem.name.toLowerCase() === payload) {
					tagItem.count =  tagItem.count + 1;
					
					return { ...tagItem };
				}
				
				return tagItem;
			});
			
			return { ...state, mainTags: tempMainTags };
		default:
			return state;
	}
};



