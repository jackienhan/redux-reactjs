import * as Types from '../constants/ActionTypes';

var initialState = {};

const authentication = (state = initialState, action) => {
    switch(action.type){
        case Types.LOGIN_REQUEST:
            return action.authen;
        default:
            return state;
    }
}

export default authentication;
