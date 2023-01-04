import ComponentBox from "../ComponentBox";


const ComponentMain = () => {
    return (
        <div className="row">
            <div className="col-3 center">
                <ComponentBox span={"C"} cssClass={`btn-others`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"+/-"} cssClass={`btn-others`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"%"} cssClass={`btn-others`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"/"} cssClass={`btn-operators`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"7"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"8"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"9"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"*"} cssClass={`btn-operators`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"4"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"5"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"6"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"-"} cssClass={`btn-operators`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"1"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"2"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"3"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"+"} cssClass={`btn-operators`}/>
            </div>
            <div className="col-6 center">
                <ComponentBox span={"0"} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={","} cssClass={`btn-numbers`}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"="} cssClass={`btn-operators`}/>
            </div>
        </div>
    );
}

export default ComponentMain;