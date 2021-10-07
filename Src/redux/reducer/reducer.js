import { WorkList } from "./InfoList/worklist";

                                                            // initialState

const initialState = {
    Work: WorkList,
};

                                                             //action

const ACTION_ADD_NEW_WORKOUT = "ACTION_ADD_NEW_WORKOUT";
const ACTION_DELETE_WORKOUT = "ACTION_DELETE_WORKOUT";


const addNewWorkout = () => ({
    type: ACTION_ADD_NEW_WORKOUT,
    payload: {},
});
const deleteWorkout = () => ({
    type: ACTION_DELETE_WORKOUT,
    payload: {}

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