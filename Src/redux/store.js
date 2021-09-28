import { createStore } from "redux";
import { combineReducers } from "redux";

import {FirstR} from "../redux/reducer/reducer";
import { Exercicies } from "../redux/reducer/reducerWorkout";



const allReducers = combineReducers ({
    firstRS: FirstR,
    exerciciesRS: Exercicies,
});


export const store  = createStore(allReducers);