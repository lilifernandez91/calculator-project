import ComponentBox from "../ComponentBox";


const ComponentMain = () => {
    return (
        <div className="row">
            <div className="col-3 center">
                <ComponentBox span={"C"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"+/-"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"%"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"/"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"7"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"8"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"9"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"*"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"4"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"5"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"6"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"-"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"1"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"2"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"3"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"+"}/>
            </div>
            <div className="col-6 center center-zero">
                <ComponentBox span={"0"}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={","}/>
            </div>
            <div className="col-3 center">
                <ComponentBox span={"="}/>
            </div>
        </div>
    );
}

export default ComponentMain;