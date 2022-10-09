// экшен  добавляющий все позиции
// константы храним в экшенах
export const ADD_POSITIONS = 'ADD_POSITIONS';
//принимает позиции и возвращаеи  объект
export const addPositions = (positions) => ({
    type: ADD_POSITIONS,
    positions,
});
