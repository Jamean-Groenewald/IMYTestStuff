//u23524121 Jamean Groenewald

import React, { Component } from 'react';

class UpdatePost extends Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      post: { title: '', content: '' }
    };
  }

  componentDidMount() 
  {
    this.fetchPost();
  }

  fetchPost = async () => 
  {
    const { id } = this.props.match.params;
    const response = await fetch(`/api/posts/${id}`);
    const data = await response.json();
    this.setState({ post: data });
  };

  handleChange = (e) => 
  {
    this.setState({
      post: { ...this.state.post, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = async (e) => 
  {
    e.preventDefault();

    const { id } = this.props.match.params;

    await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.post),
    });

    this.props.history.push('/'); // Redirect to ListPosts
  };

  render() 
  {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          value={this.state.post.title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={this.state.post.content}
          onChange={this.handleChange}
          placeholder="Content"
        />
        <button type="submit">Update Post</button>
      </form>
    );
  }
}

export default UpdatePost;
