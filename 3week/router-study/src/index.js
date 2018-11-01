import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const displayResult = <BrowserRouter><App /></BrowserRouter>

ReactDOM.render(displayResult, document.getElementById('root'));

