//u23524121 Jamean Groenewald

import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from './pages/MainPage';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<MainPage />);
