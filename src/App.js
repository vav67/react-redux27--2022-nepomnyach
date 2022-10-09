import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import { FilterPanel } from './components/FilterPanel';
import { JobList } from './components/JobList';
import { TheHeader } from './components/TheHeader';

//import "./styles.css";
//ожидает позиции
import {addPositions} from './store/positions/position-actions';
//сами данные
import data from './mock/data.json';

export default function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addPositions(data))
    })

  return (
      <div className="container">
          <TheHeader />
        <h1>Hello Redux</h1>
          <FilterPanel />
          <JobList />

      </div>
  )
}
