//  фильтры будем брать из store - useSelector
//  и чтоб удалять фильтры    - useDispatch
import {useSelector, useDispatch} from "react-redux";

import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';
//понадобиться селектор
import {selectFitlers} from "../store/filters/filter-selectors";
// чтоб удалить и очистить
import {removeFilter, clearFilter} from "../store/filters/filter-actions";

const FilterPanel = () => {

 const  dispatch = useDispatch()

//с помощью селектора получаем фильтры находящиеся в state
const currentFilters = useSelector(selectFitlers)
// проверка если пусто , то панель не отображаем
if (currentFilters.length === 0 )  {
  return null
}


  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
     <Badge
         key={filter}
         variant="clearable"
         onClear={() => dispatch(removeFilter(filter))}
                 >
             {filter}
      </Badge>
          ))}
        </Stack>

        <button className='link'
        onClick={() => dispatch(clearFilter)}
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};