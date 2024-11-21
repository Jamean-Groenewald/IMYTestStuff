import React from "react";

export default class RecipePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() 
  {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>Ingredients:</p>
        <ul>
          {this.props.ingredients.map((ingredient, index) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
        <p>Instructions:</p>
        <ol>
          {this.props.instructions.map((instruction, index) => {
            return <li key={index}>{instruction}</li>;
          })}
        </ol>
      </div>
    );
  }

  
}
