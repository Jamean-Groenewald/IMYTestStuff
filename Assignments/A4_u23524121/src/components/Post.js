//u23524121 Jamean Groenewald

import React from "react";
// import {Component} from "react";
import EditPost from "./EditPost";

class Post extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            formHidden: true, 
            title: props.title, 
            author: props.author, 
            description: props.description
        }
    }

    updateStates = (newTitle, newDesc) =>
    {
        this.setState({
            title: newTitle,
            description: newDesc,
            formHidden: true
        });
    }

    showHideForm = () => 
    {
        this.setState((previousState) => ({ //need extra () otherwise formHidden not work.
            formHidden: !previousState.formHidden
        }));
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.author}</p>
                <hr/>
                <p>{this.state.description}</p>
                <button onClick={this.showHideForm}>Edit Post</button>

                {/* {this.state.formHidden && <p>Hello World</p>} */}

                {!this.state.formHidden && 
                    
                    <EditPost
                        title = {this.state.title}
                        description = {this.state.description}
                        onSave = {this.updateStates}
                    />
                }

            </div>
        )
    }
}

export default Post;