import { createStore } from "redux";
import { combineReducers } from "redux";

import {first} from "./reducer/reducer"



const allReducers = combineReducers ({
    firstRS : first,

});


export const store  = createStore(allReducers);