import { createStore } from "redux";
import { combineReducers } from "redux";

import {FirstR} from "../redux/reducer/InfoList/firstlist";                         // bvghjnhbetv компонент со списком для первой страницы
import { workoutReducer } from "./reducer/reducer";                                // принимаем список упражнений с редюсера





const allReducers = combineReducers ({
    firstRS: FirstR,
    workRS: workoutReducer
   
});


export const store  = createStore(
    allReducers,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()                // запуск дебаггера
);