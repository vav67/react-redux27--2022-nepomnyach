import {ADD_POSITIONS} from './position-actions';

//создание функции принимает массив и экшен
export const positionReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_POSITIONS: {
  //один массив будет заменен на другой
            return action.positions;
        }




        default: {  return state;   }
    }
}