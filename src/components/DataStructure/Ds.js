import React from 'react';
import '../Ds.css';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Content from '../content/Content';
import { useParams } from 'react-router-dom';

export default function Ds() {
  let { id } = useParams();
  let { link } = useParams();


  return (
        
    <div className="container-class">
      <div className="header">
        <Header />
      </div>

      <div className="main">

        <div className="sidebar-comp">
          <Sidebar link="dataStructure" />
        </div>


        <div className="content">
          {/* <p>{id}</p>
          <p>{link}</p> */}

          {/* <h1>{link}</h1> */}

          <Content ds={id} topic={link}/>



          {/* {(function () {
            if (id === "graph" && link === "introduction") {

              return (
                <div>
                  Welcome To Graph Content
                </div>
              )
            } else if (id === "linkedlist") {

              return (
                <div>
                  Welcome To Linked List Content
                </div>
              )

            } else if(id === "tree"){

              return (
                <div>
                  Welcome To Tree Content
                </div>
              )
            }
          }).call(this)} */}

        </div>
      </div>
    </div>
  )

}
