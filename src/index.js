import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavComponent } from './components/NavComponent';
import { LoginComponent } from './components/LoginComponent';
import { RegisterComponent } from './components/RegisterComponent';

ReactDOM.render(
  <BrowserRouter>
  <NavComponent/>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<NavComponent />} />
      <Route path="/sign-in" element={<LoginComponent/>} />
      <Route path="/sign-up" element={<RegisterComponent/>} />
    </Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
