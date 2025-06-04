import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.filter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Search"
      />
      <p>{filterValue}</p>
    </div>
  );
};

export default SearchBox;
