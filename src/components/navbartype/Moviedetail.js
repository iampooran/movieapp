import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./moviedetail.css"


const Moviedetail = (props) => {
  const [userData, setUserData] = useState([]);
  const { movieId } = useParams();
  const [genres, setGenres] = useState([]);
  
  const updateMovies = async () => {
    props.setProgress(10);
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=81fb312173e26e602c5a839103d35a78`;
    props.setProgress(20);
    let data = await fetch(url);  
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setUserData(parsedData);
    setGenres(parsedData.genres);
    props.setProgress(100);
    
    
  };

let index=0;

  useEffect(() => {
    updateMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    {/* <div className="container">
    <h2 className="heading addBorder">Movies Details</h2>
    </div> */}
      <div className="container moviedetail">
        
        <div className="divide">
        <img className="BackgroundImg" src={`https://image.tmdb.org/t/p/w500/${userData.backdrop_path}`} alt="" />
        
        <div className="leftDetail">
        <img className="movieDetailImg" src={`https://image.tmdb.org/t/p/w500/${userData.poster_path}`} alt="" />
        
        </div>


        <div className="rightDetail">
        <h2 className="detailTitle">{userData.title}</h2>
        {
          genres.map((element) => {
            return (
              <div key={element.id}>
                
                <span className="geners">
                      {genres[index].name}
                      </span>
                      



                    <span className="hideIt">{index++}</span>
              </div>
              
            );
          })}
          <h3>{userData.tagline}</h3>
          
          <span className="overview">Overview</span>
         
          <span className="overviewDetails">{userData.overview} </span>
         <span className="runtime">Runtime: </span>{userData.runtime} Minutes
         
         
         
         <span className="addGap">Release Date: </span>{userData.release_date}
         
        </div>
        </div>
        
         
          </div>

    



      
    </>
  );
};

export default Moviedetail;