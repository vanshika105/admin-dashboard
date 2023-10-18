import { FiSearch } from "react-icons/fi";

const SearchBar = ({bgColor, width}) => {
    return(
        <div className={`flex rounded-md ${bgColor}`}>
          <span className="p-2 text-gray-500 text-md">
            <FiSearch />
          </span>
          <input
            className={`focus:outline-none ${bgColor} ${width} text-11 w-32 rounded-md`}
            placeholder="Search"
          />
        </div>
    )
}

export default SearchBar;