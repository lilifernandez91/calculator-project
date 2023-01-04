const ComponentBox = (props) => {
    return (
        <div className={`${props.cssClass} box`}>
            <span >{props.span}</span>
        </div>
    );
}

export default ComponentBox;