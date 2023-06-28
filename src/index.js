import React from 'react';
import ReactDOM from 'react-dom/client';
import Hd from './Hd'
import Ft from './Ft'
import Con from './Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/kgr.min.css'
import  g from './img/google_logo.svg'
import n from './img/naver.png'
import d from './img/daum.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Hd herf="https://www.naver.com/" src={d}></Hd>
   <Hd herf="https://www.daum.com/" src={n}></Hd>
   <Hd herf="https://www.google.com/" src={g}></Hd>
   <Con></Con> 
   <Ft></Ft>
  </>
);


