import { createReducer, on } from '@ngrx/store';
import { getNames, decrement, reset } from './struc.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(getNames, (state) => state + 1),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}