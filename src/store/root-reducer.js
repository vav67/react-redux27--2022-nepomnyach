import {combineReducers } from "redux";

//пока один редюсер
// import {todos} from  './todos/todos-reducer'
 import {filterReducer} from './filters/filter-reducer'
import {positionReducer} from  './positions/position-reducer'

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters:filterReducer
  //////  todos
    ///////   filters
})
