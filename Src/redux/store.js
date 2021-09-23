import { createStore } from "redux";
import { combineReducers } from "redux";

import {FirstR} from "../redux/reducer/reducer"




const allReducers = combineReducers ({
    firstRS: FirstR,

});


export const store  = createStore(allReducers);