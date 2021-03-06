import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

export default (state = [], action = {}) => {
    switch(action.type){
      case 'ADD_FLASH_MESSAGE':
          return [
              ...state,
              {
                  id: shortid.generate(),
                  type: action.payload.type,
                  text: action.payload.text
              }
        ];
      case 'DELETE_FLASH_MESSAGE':
            return [
             ...state.filter(message => message.id !== action.payload)
            ];
        //    const index = findIndex(state, {id:action.payload});
        //    if(index >= 0){
        //        return [
        //            ...state.slice(0,index),
        //            ...state.slice(index+1)
        //        ];               
        //    }
        //    return state;

      default:
          return state;
    }
};