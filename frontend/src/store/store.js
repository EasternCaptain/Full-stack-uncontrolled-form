import { legacy_createStore as createStore } from 'redux'; 

const initialState = {
    formData: []
} 

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": 
            return {
                ...state, 
                formData: [ ...state.formData, action.payload ]
            }
        case "LOAD": 
            return {
                ...state, 
                formData: action.payload 
            
        }
        default: 
            return state; 
    } 
} 
const store = createStore(formReducer); 

export default store; 