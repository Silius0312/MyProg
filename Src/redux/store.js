import { createStore } from "redux";
import { combineReducers } from "redux";
                     
import { workoutReducer } from "./reducer/reducer";                                // принимаем список упражнений с редюсера





const allReducers = combineReducers ({
       workRS: workoutReducer
   
});


export const store  = createStore(
    allReducers,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()                // запуск дебаггера
);