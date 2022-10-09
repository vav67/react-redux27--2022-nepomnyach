export const selectAllPositions = (state) => state.positions;

//как будем фильтровать
// позиции будут зависеть от стэйта и от набора фильтров
export const selectVisiblePositions = (state, filters = []) => {

    if (filters.length === 0) return state.positions;

 // или фильтры есть
    return state.positions.filter(
              pos => {
 // соберем фильтры относящиеся к этой конкретной позиции
    // в массив сконтектанируем
        const posFilters = [].concat(pos.role,
            pos.level, ...pos.languages, ...pos.tools);
//теперь есть набор фильтров привязанных к конкретной позициии
  // every проверит каждое значение filters в значениях posFilters
  // если соответствует фильтру то будет true и ложим  в state.positions
        return filters.every(filter => posFilters.includes(filter))
                          })


}
