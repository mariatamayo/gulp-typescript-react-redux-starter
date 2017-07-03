import{
  TEST
} from '../actions/types';

export default function (state =
  {
    testWorking: false,
    compiler: "Typescript",
    framework: "React"
  }
, action)
{
  switch(action.type){
    case TEST:
    return {...state, testWorking: action.payload}
  }
  return state;
};
