import React from 'react';
import "./Home.scss";

const Card = ({img}) =>{

  <img className="card" src={img} alt="cover" />
}

const Row = ({tittle}) =>{
  <div className="row">
    <h2>{tittle}</h2>

    <div>
    <Card img={"https://cdn.vox-cdn.com/thumbor/3d5Enbpx7sMOp8cM7J4chyjk8SM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg"}/>
    </div>

  </div>
}



const Home = () => {
  return (
<section className="Home">

<div className="banner"></div>

<Row tittle={"Popular On Netflix"}/>

</section>
  )
}

export default Home