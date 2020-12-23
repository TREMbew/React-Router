import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Trailer from './Component/Trailer';
import Initial from './Initial';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Initial/>,
  document.getElementById('root')
);

/* 
<BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/anime/:id' render={ (data,item) => <Trailer data={data}/>} />
    </Switch>
  </BrowserRouter>
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
