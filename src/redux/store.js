import { createStore } from 'redux';

// reducers
import reducers from './reducers/index';



// combined reducers + state + devTools
const store = createStore(
	reducers,
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



export default store;


