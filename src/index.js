import React from 'react';
import ReactDOM from 'react-dom';
import AppRounter from './routers/AppRouter';
import './styles/styles.scss';


ReactDOM.render(<AppRounter />, document.getElementById('app'));


// login page -> Student/School 
// Student -> empty classroom lists
// Student -> personal info
// School -> dashboard(arrange buildings/classrooms)
// School -> school info