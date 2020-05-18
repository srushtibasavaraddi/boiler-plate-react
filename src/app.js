import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter,{history} from './routes/AppRouter';
import configureStore from './store/configureStore';
import {startSetSubmissions} from './actions/submissions';
import {Provider} from 'react-redux';
import database,{firebase}  from './firebase/firebase';
import Loader from './components/loader';
import {startSetGallery} from './actions/gallery';

//parent can change prop passed causing the child to get rendered  

const store=configureStore();

const appRoot=document.getElementById("app");
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(<Loader/>,appRoot);
store.dispatch(startSetSubmissions()).then(()=>{
    store.dispatch(startSetGallery()).then(()=>{
        ReactDOM.render(jsx,appRoot);
    })
     
});
