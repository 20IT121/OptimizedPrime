import React from 'react';
import '../Ds.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

export default function Libraries() {
  return (
    <div>
      <div className="container-class">
        <div className="header">
          <Header />
        </div>

        <div className="main">

          <div className="sidebar-comp">
            <Sidebar link="libraries" />
          </div>


          <div className="content">

          </div>

        </div>

      </div>
    </div>
  )
}
