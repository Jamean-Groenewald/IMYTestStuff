//u23524121 Jamean Groenewald

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

//import ReactDOM from 'react-dom';

// import Post from './components/Post';


// const App = () => (
//   <div>
//     <Post
//       title="Growing your first vegetable garden"
//       author="Emma Stone"
//       description="A beginner's guide to planting and harvesting your own vegetables."
//     />
//   </div>
// );

//const root = ReactDOM.createRoot(document.getElementById("root"));

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);