import { createStore } from "redux";
import { combineReducers } from "redux";

import {FirstR} from "../redux/reducer/InfoList/firstlist";
import { WorkList } from "../redux/reducer/InfoList/worklist";





const allReducers = combineReducers ({
    firstRS: FirstR,
    WorkRS: WorkList,
});


export const store  = createStore(allReducers);