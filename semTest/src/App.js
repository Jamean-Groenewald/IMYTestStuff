import React from "react";

import PointInput from "./PointInput";
import Line from "./Line";

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            point1Display: [],
            point2Display: [],
            point1Num: [],
            point2Num: []
        };
    }

    getProps = (point1Input, point2Input) =>
    {
        this.setState({
            point1Display: point1Input,
            point2Display: point2Input
        });
    }
    
   setNumbers = (convertedPoint1, convertedPoint2) =>
   {
        this.setState({
            point1Num: convertedPoint1,
            point2Num: convertedPoint2
        });
   }

    render()
    {
        return(
            <div>
                <h1>IMY 220 Semester Test 1</h1>
                <PointInput getProps={this.getProps} setNumbers={this.setNumbers}/>
                <Line point1={this.state.point1Display} point2={this.state.point2Display} point1Num={this.state.point1Num} point2Num={this.state.point2Num}/>
            </div>
        );
    }
}

export default App;