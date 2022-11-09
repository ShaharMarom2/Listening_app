const Playlist = (props) => {
    return(
        <div className="playlist">
            <menu>
                {props.userList.map(v => v)}
            </menu>
        </div>
    )
}

export default Playlist;