//u23524121 Jamean Groenewald

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPosts from '../components/ListPosts';
import UpdatePost from '../components/UpdatePost';

const MainPage = () => 
{
  return (
   <BrowserRouter> 
    <Routes>
        <Route path="/" exact component={ListPosts} />
        <Route path="/edit/:id" component={UpdatePost} />
    </Routes>
    </BrowserRouter>
  );
};

export default MainPage;
