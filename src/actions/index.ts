import {
  TEST
} from './types';

export function changeTestState(){
  return {
    type: TEST,
    payload: true
  }
}
