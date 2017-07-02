import{
  TEST
} from '../actions/types';

export default function (state =
  {
    testWorking: false
  }
, action)
{
  switch(action.type){
    case TEST:
    return {...state, testWorking: action.payload}
  }
  return state;
};
