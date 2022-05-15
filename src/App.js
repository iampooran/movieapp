import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Navbartype from "./components/navbartype/Navbartype";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Moviedetail from "./components/navbartype/Moviedetail";
import React, { useState } from 'react'


function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
    
      <Router>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#17B7DA'
        progress={progress} 
        shadow = {true}
        
      />
      <Routes>
        <Route path="/"  element={<Home setProgress={setProgress}/>} />
        <Route exact path="/popular" element={<Navbartype setProgress={setProgress} key="popular" type="movie" category="popular"/>} />
        <Route exact path="/now_playing" element={<Navbartype setProgress={setProgress} key="now_playing" type="movie" category="now_playing"/>} />
        <Route exact path="/top_rated" element={<Navbartype setProgress={setProgress} key="top_rated" type="movie" category="top_rated"/>} />
        <Route exact path="/upcoming" element={<Navbartype setProgress={setProgress} key="upcoming" type="movie" category="upcoming"/>} />
        <Route exact path="/popular/:movieId" element={<Moviedetail setProgress={setProgress}/>} />
        <Route exact path="/:movieId" element={<Moviedetail setProgress={setProgress}/>} />
        <Route exact path="/now_playing/:movieId" element={<Moviedetail setProgress={setProgress}/>} />
        <Route exact path="/top_rated/:movieId" element={<Moviedetail setProgress={setProgress}/>} />
        <Route exact path="/tv/:movieId" element={<Moviedetail setProgress={setProgress}/>} />        
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
