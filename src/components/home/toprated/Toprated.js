import React, { useEffect, useState } from "react";
import "./toprated.css";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";

const Nowplaying = (props) => {
  const [results, setResults] = useState([]);

  const updateMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=81fb312173e26e602c5a839103d35a78`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setResults(parsedData.results);
  };
  useEffect(() => {
    updateMovies();
    // eslint-disable-next-line
  }, []);

  // let totalResult;
  let index = 0;
  let movieId = "";

  return (
    <>
      
        <h2 className="heading addBorder">Top Rated</h2>
        <div className="nowplaying">
          {results.slice(0, 1).map((element) => {
            return (
              <div   key={element.id}>

           <Carousel cols={5} rows={1} gap={50} loop showDots>
                  {results.map((element) => (
                    <Carousel.Item key={element.id}>
                      <span className="hideIt">
                        {(movieId = results[index].id)}
                      </span>
                      <Link
                        className="linkItem"
                        to={{ pathname: `${movieId}` }}
                      >
                        <img
                          className="imgGrid"
                          src={`https://image.tmdb.org/t/p/w500/${results[index].poster_path}`}
                          alt=""
                        />
                        <span className="mainTitle">
                          {results[index].title}
                        </span>
                      </Link>
                      <span className="hideIt">{index++}</span>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            );
          })}
        </div>
      
    </>
  );
};

export default Nowplaying;  