//u23524121 Jamean Groenewald

import React from "react";

class Person extends React.Component
{
    render()
    {
        return (
            // <div>
            //     <h2>Person</h2>
            //     <h3>{this.props.name}</h3>
            //     <p>Birth year: {this.props.birth_year} </p>
            //     <p>Eye Color: {this.props.eye_color} </p>
            //     <p>Gender: {this.props.gender} </p>
            //     <p>Homeworld: {this.props.homeworld} </p>
            // </div>

            <div className="person-container">
                <h2 className="person-heading">Person</h2>
                <h3 className="text-xl font-semibold mb-2">{this.props.name}</h3>
                <p className="person-details"><span className="person-label">Birth year:</span> {this.props.birth_year}</p>
                <p className="person-details"><span className="person-label">Eye Color:</span> {this.props.eye_color}</p>
                <p className="person-details"><span className="person-label">Gender:</span> {this.props.gender}</p>
                <p className="person-details"><span className="person-label">Homeworld:</span> {this.props.homeworld}</p>
            </div>
        );
    }
}

export default Person;