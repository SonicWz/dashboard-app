import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import {selectAllFilters} from "../store/filters/filterSelector";
import {useDispatch, useSelector} from "react-redux";
import {clearFilters, removeFilter} from "../store/filters/filterActions";


const FilterPanel = () => {
  const dispatch = useDispatch();
  const allFilters = useSelector(selectAllFilters);

  if (allFilters.length === 0){
      return null
  }
  const handleClearAllFilters = () => {
      dispatch(clearFilters())
  }
  const handleRemoveFilter = (filter) => {
      dispatch(removeFilter(filter))
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {allFilters.map(filter => {
            return <Badge variant="clearable" onClear={() => handleRemoveFilter(filter)}>{filter}</Badge>
          })}
        </Stack>
        <button className='link'
                onClick={handleClearAllFilters}
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};