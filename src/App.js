
import './App.css';

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const  App = ()=> {

  const [progress, setProgress] = useState(0);
 return (
      <div>
        <Router>
      <NavBar/>
      <LoadingBar
        color='white'
        progress={progress}
      
      />
      <Routes>
      <Route exact path="/" element ={<News setProgress = {setProgress}  key="general" pageSize = {9} country = "us" category = "general"/>}/>
      <Route exact path="/business" element ={<News setProgress = {setProgress}  key="business" pageSize = {9} country = "us" category = "business"/>}/>
      <Route exact path="/entertainment" element ={<News setProgress = {setProgress}  key="entertainment" pageSize = {9} country = "us" category = "entertainment"/>}/>
      <Route exact path="/general" element ={<News setProgress = {setProgress}  key="general" pageSize = {9} country = "us" category = "general"/>}/>
      <Route exact path="/health" element = {<News setProgress = {setProgress}  key="health" pageSize = {9} country = "us" category = "health"/>}/>
      <Route exact path="/science" element ={<News setProgress = {setProgress}  key="science" pageSize = {9} country = "us" category = "science"/>}/>
      <Route exact path="/sports" element = {<News setProgress = {setProgress}  key="sports" pageSize = {9} country = "us" category = "sports"/>}/>
      <Route exact path="/technology" element ={<News setProgress = {setProgress}  key="technology"  pageSize = {9} country = "us" category = "technology"/>}/>
        </Routes>
      </Router>
   <Footer/>
      </div>
  );
  
}
export default App;
