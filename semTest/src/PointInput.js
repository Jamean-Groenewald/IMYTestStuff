import React from "react";

class PointInput extends React.Component
{
    constructor(props)
    {
        super(props);

        this.point1Ref = React.createRef();
        this.point2Ref = React.createRef();
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();

        const point1 = this.point1Ref.current.value;
        const point2 = this.point2Ref.current.value;

        this.props.getProps(point1, point2);

        this.convertToNumbers();

    }

    convertToNumbers = () =>
    {
        const point1 = this.point1Ref.current.value;
        const point2 = this.point2Ref.current.value;

        const convertedPoint1 = point1.split(";").map(Number);
        const convertedPoint2 = point2.split(";").map(Number);

        this.props.setNumbers(convertedPoint1, convertedPoint2);
    }
    
    render()
    {
        return(
            <div>
                <h1>Point Input</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Point 1: <input type="text" ref={this.point1Ref}></input></label>
                    <br/>
                    <label>Point 2: <input type="text" ref={this.point2Ref}></input></label>
                    <br/>
                    <button type="submit">Calculate</button>
                </form>
            </div>
        );
    }
}

//chat-----------

//this.props.onPointsSubmit(pointA, pointB); (in handleSubmit)

//then

// PointInput.propTypes = {
//     onPointsSubmit: PropTypes.func.isRequired,
//   };

export default PointInput;