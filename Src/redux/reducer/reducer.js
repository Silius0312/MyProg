import { WorkList } from "./InfoList/Worklist";

                                                            // initialState

const initialState = WorkList;
                                                             //action

const ACTION_ADD_NEW_WORKOUT = "ACTION_ADD_NEW_WORKOUT";
const ACTION_DELETE_WORKOUT = "ACTION_DELETE_WORKOUT";


export const addNewWorkout = (newWork) => ({
    type: ACTION_ADD_NEW_WORKOUT,
    payload: newWork,
});
const deleteWorkout = (newWork) => ({
    type: ACTION_DELETE_WORKOUT,
    payload: newWork,

});
export const action = { addNewWorkout, deleteWorkout };

                                                              // reducer
  
export const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ADD_NEW_WORKOUT:
            return [...state, action.payload];
        case ACTION_DELETE_WORKOUT:
            return [...state, action.payload];
default:
    return state;
        }
};






// function reducer(state, action) {
//     switch(action.type) {
//         case ACTION_1: return { value: action.value_1 };
//         case ACTION_2: return { value: action.value_2 };
        
//         default: return state;
//     }
// }