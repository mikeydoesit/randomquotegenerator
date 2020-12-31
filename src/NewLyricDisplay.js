const NewLyricDisplay = (props) => {
    return (<div className="textWrapper"><p id="text">{props.bar}</p><span id="author">{props.song}</span></div>)
}

export default NewLyricDisplay;