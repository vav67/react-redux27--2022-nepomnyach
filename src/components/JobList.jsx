// import data from  '../mock/data.json'

import {useSelector, useDispatch} from 'react-redux'
import { JobPosition } from './JobPosition'
import {selectAllPositions, selectVisiblePositions} from '../store/positions/position-selectors'
import {selectFitlers} from "../store/filters/filter-selectors";

import {addFilter} from "../store/filters/filter-actions"

//точка входа данных
//{data.map(item => (
const JobList = () => {
   const dispatch =useDispatch()
//получим актуальные фильтры
    const currentFilters = useSelector(selectFitlers)

  // получаем все данные, пока что нечего фильтровать
///заменим    const positions = useSelector(selectAllPositions);
// и получим данные по фильтру находящиеся в (state) => state.filters;
    const positions = useSelector((state) =>
  selectVisiblePositions(state, currentFilters))

const handleAddFilter = (filter) => {
      dispatch(addFilter(filter))
}

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition             key={item.id}
               handleAddFilter={handleAddFilter}
                                          {...item}  />
            ))}
        </div>
    )
}

export {JobList};