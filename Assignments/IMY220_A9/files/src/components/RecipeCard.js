import React from "react";

export class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.setCurrentRecipe(this.props.id);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <button onClick={this.onClick}>View Recipe</button>
      </div>
    );
  }
}