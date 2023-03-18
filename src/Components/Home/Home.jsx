import React, { useState,useEffect } from 'react';
// import cover from "../../Covers/cover1.jpg"
import "./Home.scss";
import axios from 'axios';
const apikey="7502ce33b1fc4368f04531e0e6ab5b5d";
const url ="https://api.themoviedb.org/3/movie";
const imgurl="https://image.tmdb.org/t/p/original"
const upcoming ="upcoming";

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

    const [upcomingMovies,setUpcomingMovies] = useState([])

    useEffect(() => {
  
  const fetchData = async()=>{
      const {data: {results} } =await axios.get(url+"/"+upcoming+"?api_key="+apikey);
      setUpcomingMovies(results);
      // console.log(upcomingMovies);

  };
   
  fetchData()

  },[]);
  

  return (
<section className="Home">

<div className="banner"></div>


 <Row tittle={"Upcoming Movies"} arr={upcomingMovies} />
 <Row tittle={"Popular On Netflix"} />
 <Row tittle={"Tv Shows"} />
 <Row tittle={"MOvies"} />
 <Row tittle={"Recent viewed"} />
 <Row tittle={"My List"} />

</section>
  )
}

export default Home