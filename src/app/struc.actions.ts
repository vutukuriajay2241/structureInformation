import { createAction } from '@ngrx/store';

export const getNames = createAction('[Counter Component] GetNames');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');