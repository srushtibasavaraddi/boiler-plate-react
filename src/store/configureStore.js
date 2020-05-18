import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import submissionReducer from '../reducers/submission';
import filterReducer from '../reducers/filter';
import authReducer from '../reducers/auth';
import galleryReducer from '../reducers/gallery';
import newsReducer from '../reducers/news';
import annoucementReducer from '../reducers/annoucement';

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store=createStore(
        combineReducers({
            submissions:submissionReducer,
            filter:filterReducer,
            auth:authReducer,
            gallery:galleryReducer,
            news:newsReducer,
            annoucement:annoucementReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store
}