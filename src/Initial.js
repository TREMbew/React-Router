import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Trailer from './Component/Trailer';

const Initial = () => {

    return (
        <div>
            <BrowserRouter>
                    <Route exact path='/' component={App}/>
                    <Route path='/:id' render={ (data) => <Trailer data={data}/>} />
            </BrowserRouter>
        </div>
    )
}

export default Initial
