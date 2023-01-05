import ComponentBox from "../ComponentBox";


const ComponentMain = (props) => {

    return (
        <div className="row">
            <div className="col-3 center">
                <ComponentBox span={"C"} cssClass={`btn-others`} />
            </div>
            <div className="col-3 center">
                <ComponentBox span={"+/-"} cssClass={`btn-others`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"%"} cssClass={`btn-others`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"/"} cssClass={`btn-operators`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"7"} cssClass={`btn-numbers`} updateScreen={props.updateScreen} />
            </div>
            <div className="col-3 center">
                <ComponentBox span={"8"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"9"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"*"} cssClass={`btn-operators`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"4"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"5"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"6"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"-"} cssClass={`btn-operators`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"1"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"2"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"3"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"+"} cssClass={`btn-operators`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-6 center">
                <ComponentBox span={"0"} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={","} cssClass={`btn-numbers`} updateScreen={props.updateScreen}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"="} cssClass={`btn-operators`} updateScreen={props.updateScreen}/>
            </div>
        </div>
    );
}

export default ComponentMain;