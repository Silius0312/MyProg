import { createStore } from "redux";
import { combineReducers } from "redux";

import {FirstR} from "../redux/reducer/reducer"
import {Second} from "../redux/reducer/reducer"
import { Tree } from "../redux/reducer/reducer";



const allReducers = combineReducers ({
    firstRS: FirstR,
    secondRS: Second,
    treeRS: Tree,

});


export const store  = createStore(allReducers);