//u23524121 Jamean Groenewald

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component 
{
  handleDelete = () => 
  {
    this.props.onDelete(this.props.post.id);
  };

  render() 
  {
    const { post } = this.props;

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to={`/edit/${post.id}`}>Edit</Link>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Post;
