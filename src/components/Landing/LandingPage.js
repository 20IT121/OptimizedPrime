import React from 'react';
import './LandingPage.css';

import { Link } from 'react-router-dom';

export default function Home(props) {

  return (
    <div className='container'>

      <div className="card container">
        <div className="card-header">
          <h1>{props.heading1}</h1>
        </div>
        <div className="card-body">
          <p className="card-text">A data structure is a specialized format for organizing, processing, retrieving and storing data. It is a way of storing data in a computer so that it can be used efficiently and it will allow
            the most efficient algorithm to be used. </p>
          <Link to={`${props.link1}`} className="btn btn-primary button-home d-grid gap-2 col-4 mx-auto" /*onClick={play}*/>CLICK HERE</Link>
        </div>
      </div>

      <div className="card container">
        <div className="card-header">
          <h1>{props.heading2}</h1>
        </div>
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cupiditate beatae nihil, reprehenderit perspiciatis hic suscipit itaque voluptates, qui voluptatem est doloremque veritatis quisquam molestiae quam ex adipisci? Deleniti, beatae! Fugiat, natus. Pariatur perspiciatis unde voluptatibus consequuntur delectus. Commodi vitae earum cupiditate aperiam hic ea fuga corporis veniam, assumenda eius! Inventore quis illo totam soluta assumenda?</p>
          <Link to={`${props.link2}`} className="btn btn-primary button-home d-grid gap-2 col-4 mx-auto" /*onClick={play}*/>CLICK HERE</Link>
        </div>
      </div>

      <div className="card container" style={{marginBottom: "20px"}}>
        <div className="card-header">
          <h1>{props.heading3}</h1>
        </div>
        <div className="card-body">
          <p className="card-text">A data structure is a specialized format for organizing, processing, retrieving and storing data. It is a way of storing data in a computer so that it can be used efficiently and it will allow
            the most efficient algorithm to be used. The choice of the data structure begins from the choice of an
            abstract data type (ADT).</p>
          <Link to={`${props.link3}`} className="btn btn-primary button-home d-grid gap-2 col-4 mx-auto" /*onClick={play}*/>CLICK HERE</Link>
        </div>
      </div>

    </div>
  )
}