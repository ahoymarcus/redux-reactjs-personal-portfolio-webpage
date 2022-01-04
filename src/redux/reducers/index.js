import { combineReducers } from 'redux';

// reducers
import { selectedSectionReducer } from './selectedSectionReducer';
import { projectsReducer } from './projectsReducer';



const reducers = combineReducers({
	selectedSection: selectedSectionReducer,
	allProjects: projectsReducer
});



export default reducers;



