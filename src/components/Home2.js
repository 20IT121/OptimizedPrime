import React from 'react';
import '../css/home.css';
// import sound from "../voices/positive2.wav";

export default function Home() {

  // function play(){
  //   new Audio(sound).play();
  // }

  return (
    <div className='container-fluid'>

      <div className="card container">
        <div className="card-header">
          <h1>Linear Data Structure</h1>
        </div>
        <div className="card-body">
          <p className="card-text">A data structure is a specialized format for organizing, processing, retrieving and storing data. It is a way of storing data in a computer so that it can be used efficiently and it will allow
            the most efficient algorithm to be used. The choice of the data structure begins from the choice of an
            abstract data type (ADT).</p>
          <button className="btn btn-primary button-home d-grid gap-2 col-4 mx-auto" /*onClick={play}*/>CLICK HERE</button>
        </div>
      </div>

      <div className="card container">
        <div className="card-header">
          <h1>Non-Linear Data Structure</h1>
        </div>
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cupiditate beatae nihil, reprehenderit perspiciatis hic suscipit itaque voluptates, qui voluptatem est doloremque veritatis quisquam molestiae quam ex adipisci? Deleniti, beatae! Fugiat, natus. Pariatur perspiciatis unde voluptatibus consequuntur delectus. Commodi vitae earum cupiditate aperiam hic ea fuga corporis veniam, assumenda eius! Inventore quis illo totam soluta assumenda?</p>
          <button className="btn btn-primary button-home d-grid gap-2 col-4 mx-auto" /*onClick={play}*/>CLICK HERE</button>
        </div>
      </div>

      <div className="card container" style={{marginBottom: "20px"}}>
        <div className="card-header">
          <h1>Not-sure</h1>
        </div>
        <div className="card-body">
          <p className="card-text">If you are not sure which data structure learn then  we will provide guided path that will help you to build your carrier. <br/> Lorem ipsum dolor Voluptate doloribus impedit earum harum saepe at et, ipsa eveniet doloremque tempora suscipit non! Asperiores, officiis alias nobis illum est sequi reprehenderit.</p>
          <button className="btn btn-primary button-home d-grid gap-2 col-4 mx-auto" /*onClick={play}*/>CLICK HERE</button>
        </div>
      </div>

    </div>
  )
}
