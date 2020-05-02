
export default (state, action) => {

    switch(action.type){
        case 'ADD_ERROR':
            return {...state, errorMsg: action.payload};
        default:
            return {...state, errorMsg: ''};
    }
};