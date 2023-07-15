//import data from '../mock/data.json';

import {useDispatch, useSelector} from 'react-redux'
import { JobPosition } from './JobPosition';
import {selectAllPositions, selectVisiblePositions} from "../store/positions/positionSelectors";
import {addFilter} from "../store/filters/filterActions";
import {selectAllFilters} from "../store/filters/filterSelector";

const JobList = () => {

  //const data = useSelector(selectAllPositions);
  const currentFilters = useSelector(selectAllFilters);
  const data = useSelector( (state) => {
    return selectVisiblePositions(state, currentFilters)
  });
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id}
                     handleAddFilter={handleAddFilter}
                     {...item}
        />
      ))}
    </div>
  )
}

export {JobList};