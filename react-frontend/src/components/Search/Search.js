import {AiOutlineSearch} from "react-icons/ai";
import './Search.css'

const Search = ({handleSearchNote}) => {
    return (
        <div className="search-box">
            <AiOutlineSearch className="icon"/>
            <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="Search here..."/>
        </div>
    )
}

export default Search;
