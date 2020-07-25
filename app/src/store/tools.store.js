import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    tools: (state, action) => {
        console.log(state);
        if(action.type === 'REFRESH_TOOLS') {
            return action.payload;
        }
        if(action.type === 'ADD_TOOLS') {
            return [...state, action.payload];
        }
        if(action.type === 'REMOVE_TOOLS') {
            return state.filter(item => item.id !== action.payload);
        }
        return state || [];
    }
});

const storeConfig = () => createStore(reducers);
export default storeConfig;