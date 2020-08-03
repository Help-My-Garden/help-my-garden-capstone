import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

const frontend = () => ( <h1 className="text-info">hello world</h1> );
ReactDOM.render(<frontend/>, document.querySelector('#root'));