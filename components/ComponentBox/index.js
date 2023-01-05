const ComponentBox = (props) => {

    return (
        <div className={`${props.cssClass} box`} onClick={() => props.updateScreen(props.span)}>
            <span >{props.span}</span>
        </div>
    );
}

export default ComponentBox;