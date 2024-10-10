//u23524121 Jamean Groenewald

import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component
{
    render()
    {
        return(
            <nav>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        );
    }
}