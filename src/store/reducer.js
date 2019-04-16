
import { SET_SEARCH_DATA , GET_SEARCH_DATA } from '../constants'
const initialState =
{
  totalTemp:undefined
};

var reducerFunc = (state = initialState , action) => 
{ 
      const { type, data } = action
      switch(type)
      {
            
      case SET_SEARCH_DATA:
            return {...state, totalTemp: data.totalTemp };
      
      case GET_SEARCH_DATA:
            return {...state};
      
      default:
            return {...state};
      }
}

export default reducerFunc;