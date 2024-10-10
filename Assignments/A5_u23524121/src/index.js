//u23524121 Jamean Groenewald

import React from 'react';
import { createRoot } from 'react-dom/client';
import StarWars from './components/StarWars';
//import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<StarWars />);