//u23524121 Jamean Groenewald

import React from "react";

class EditPost extends React.Component
{
    constructor(props)
    {
        super(props);

        this.titleRef = React.createRef();
        this.descRef = React.createRef();
        
        this.onSave = this.onSave.bind(this);
    }

    onSave = (e) => 
    {
        e.preventDefault();

        const editTitle = this.titleRef.current.value;
        const editDesc = this.descRef.current.value;

        this.props.onSave(editTitle, editDesc); //pass to parent?.
    }

    render()
    {
        return(
            <form onSubmit={this.onSave}>
                <h3>Post Title</h3>
                <input type="text" name="titleInput" ref={this.titleRef} defaultValue={this.props.title}/>
                <h3>Post Description</h3>
                <input type="text" name="DescInput" ref={this.descRef} defaultValue={this.props.description}/>
                {/* ?<button onClick={this.onSave}>Save</button> */}
                <button type="submit">Save</button>
            </form>
        )
    }
}

export default EditPost;