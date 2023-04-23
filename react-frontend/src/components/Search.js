import {AiOutlineSearch} from "react-icons/ai";

const Search = ({handleSearchNote}) => {
    return (
        <div className="search-box">
            <AiOutlineSearch className="icon"></AiOutlineSearch>
            <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="Search here..."/>
        </div>
    )
}

export default Search;
