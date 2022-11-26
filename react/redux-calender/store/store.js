import { createStore } from "redux";
import { reducers } from "../reducers/reducer";


const store = createStore(reducers, window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__())


export default store