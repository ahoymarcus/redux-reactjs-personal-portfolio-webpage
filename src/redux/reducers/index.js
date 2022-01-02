import { combineReducers } from 'redux';

// reducers
import { projectsReducer } from './projectsReducer';



const reducers = combineReducers({
	allProjects: projectsReducer
});



export default reducers;



