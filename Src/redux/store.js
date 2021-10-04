import { createStore } from "redux";
import { combineReducers } from "redux";

import {FirstR} from "../redux/reducer/InfoList/firstlist";
import { WorkList } from "../redux/reducer/InfoList/worklist";
import { Progress } from "./reducer/InfoList/progresslist";


const allReducers = combineReducers ({
    firstRS: FirstR,
    workRS: WorkList,
    progressRS: Progress,
});


export const store  = createStore(allReducers);