import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
// import cover from "../../Covers/cover1.jpg"
import "./Home.scss";
import axios from 'axios';
const apikey="7502ce33b1fc4368f04531e0e6ab5b5d";
const url ="https://api.themoviedb.org/3/movie";
const imgurl="https://image.tmdb.org/t/p/original"
const upcoming ="upcoming";
const nowplaying="nowplaying";
const popular="popular";
const topRated="top_rated";




const Card = ({img}) =>{

  <img className="card" src={img} alt="cover" />
}

const Row = ({tittle, arr=[{
  img:"https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"

}]}) =>{

  <div className="row">

    <h2>{tittle}</h2>

    <div>
      {
        arr.map((item,index)=>(

        <Card key={index} img={imgurl+"/"+item.img}/>
        ))
      }
    </div>

  </div>
}

const Home = () => {

    const [upcomingMovies,setUpcomingMovies] = useState([]);
    const [nowPlayingMovies,setNowPlayingMovies] = useState([]);
    const [popularMovies,setPopularMovies] = useState([]);
    const [topRatedMovies,setTopRatedMovies] = useState([]);
    const [genre,setGenre] = useState([]);

    useEffect(() => {
  
  const fetchData = async()=>{
      const {data: {results} } =await axios.get(url+"/"+upcoming+"?api_key="+apikey);
      setUpcomingMovies(results);
  };
  const fetchNowPlaying = async()=>{
      const {data: {results} } =await axios.get(url+"/"+nowplaying+"?api_key="+apikey);
      setNowPlayingMovies(results);
  };
  const fetchPopular = async()=>{
      const {data: {results} } =await axios.get(url+"/"+popular+"?api_key="+apikey);
      setPopularMovies(results);
  };
  const fetchTopRated = async()=>{
      const {data: {results} } =await axios.get(url+"/"+topRated+"?api_key="+apikey);
      setTopRatedMovies(results);
  };
  const getAllGenre = async()=>{
      const {data: {results} } =await axios.get(url+"/"+genre+"/movie/list"+"?api_key="+apikey);
      setGenre(genre);
  };
   

  getAllGenre();

  fetchData();
  fetchNowPlaying();
  fetchPopular();
  fetchTopRated();

  },[]);


  return (
<section className="Home">

<div className="banner"></div>


 <Row tittle={"Upcoming Movies"} arr={upcomingMovies} />
 <Row tittle={"Now Playing"}     arr={nowPlayingMovies} />
 <Row tittle={"Popular Movies"} arr={popularMovies} />
 <Row tittle={"Top Rated Movies"} arr={topRatedMovies} />
 

<div className="genreBox">
  {genre.map((item)=>{

    <Link key={item.id} to={"/"+genre+"/"+item.id} >${item.name}</Link>

  })}
</div>
{/* 1.5min dekh ii  */}

</section>
  )
}

export default Home