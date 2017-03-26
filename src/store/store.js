import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import indexReducer from '../reducers';

const store = createStore(
    indexReducer,
    applyMiddleware(thunk)
);

export default store;