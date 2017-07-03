import {
  TEST
} from './types';

export function changeTestState(){
  console.log('hello is triggering an action')
  return {
    type: TEST,
    payload: true
  }
}
