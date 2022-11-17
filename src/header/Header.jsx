import Playlist from "./comp_Header/Playlist";
import SearchBar from "./comp_Header/SearchBar";
import Avatar from "./comp_Header/Avatar";

const Header = ({ handleSearch }) => {
    return(
        <div className="header-container">
            <Playlist/>
            <SearchBar handleSearch={handleSearch}/>
            <Avatar/>
        </div>
    )
}

export default Header