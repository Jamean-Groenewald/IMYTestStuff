//u23524121 Jamean Groenewald

import React from "react";
// import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

class App extends React.Component
{
    render()
    {
        return(
            <BrowserRouter>
                <div>
                    {/* <h1>Hello Home Page!</h1> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/posts" element={<Posts />} />
                    </Routes>
                    {/* <Navbar /> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;