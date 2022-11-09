import Playlist from "./comp_Header/Playlist";
import SearchBar from "./comp_Header/SearchBar";
import Avatar from "./comp_Header/Avatar";

const Header = () => {
    return(
        <div className="header-container">
            <Playlist/>
            <SearchBar/>
            <Avatar/>
        </div>
    )
}

export default Header