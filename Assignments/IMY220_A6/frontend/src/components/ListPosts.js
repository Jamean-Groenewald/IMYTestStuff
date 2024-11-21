//u23524121 Jamean Groenewald

import React, { Component } from 'react';
import Post from './Post';

class ListPosts extends Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      posts: []
    };
  }

  componentDidMount() 
  {
    this.fetchPosts();
  }


  fetchPosts = async () =>
  {
    const response = await fetch('/api/posts');
    const data = await response.json();
    this.setState({ posts: data });
  };

  handleDelete = async (id) => 
  {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });

    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id) 
    }));
  };

  render() 
  {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default ListPosts;
