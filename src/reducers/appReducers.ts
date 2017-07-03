import{
  TEST
} from '../actions/types';

export default function (state =
  {
    testWorking: false
  }
, action)
{
  console.log('ARE WE HITTING THE REDUCER???', action, state)
  switch(action.type){
    case TEST:
    return {...state, testWorking: action.payload}
  }
  console.log('hello in the reducer, not hitting any action case', state)
  return state;
};
