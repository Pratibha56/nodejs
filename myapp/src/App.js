
import './App.css';
import React from 'react';
 import NavBar from './components/NavBar';
import HomeCarousel from './components/HomeCarousel';
import ImageCard from './components/ImageCard';
import data from './components/data';


function App() {
  return (
    
  <div>
  <NavBar/>
  <HomeCarousel/>

  <div className='img1'>
  {data.map((item)=>{
    
      return<ImageCard title={item.title} imgurl={item.imgurl} desc={item.desc}/>
  }
  )}
 </div>
 </div>
 
  );
}

export default App;
