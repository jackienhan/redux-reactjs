import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import authentication from './authentication';
const appReducers = combineReducers({
    products,
    itemEditing,
    authentication
});

export default appReducers;