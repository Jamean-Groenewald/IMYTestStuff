import React from "react";
import PropTypes from "prop-types";

class Line extends React.Component
{   
    constructor(props)
    {
        super(props);
    }

    calculateEuclideanDistance = (point1, point2) =>
    {
        if(point1.length===0 || point2.length===0)
        {
            return 0;
        }

        return (point1.map((value, index) => Math.abs( value - point2[index] ) ** 2).reduce((total, current) => total + current) ** 0.5).toFixed(2); 
    }

    getDimension = (length) =>
    {
        if(length === 0)
        {
            return 0;
        }

        return length;
    }

    //static propTypes = {
    //  updatePoints: propTypes.func.isRequired
    //}
    
    render()
    {
        return(
            <div>
                <h1>Line</h1>
                <p>Point 1: {this.props.point1}</p>
                <p>Point 2: {this.props.point2}</p>

                <p>Dimension: {this.getDimension(this.props.point1Num.length)}</p> 
                <p>Euclidian Distance: {this.calculateEuclideanDistance(this.props.point1Num, this.props.point2Num)}</p>
            </div>
        );
    }
}

// Line.propTypes = {
//     point1: PropTypes.array.isRequired, //check if not null and array.
//     point2: PropTypes.array.isRequired
// }

//chat-----------------

// Line.propTypes = { 
//     pointA: PropTypes.arrayOf(PropTypes.number).isRequired,
//     pointB: PropTypes.arrayOf(PropTypes.number).isRequired,
//   };

export default Line;
