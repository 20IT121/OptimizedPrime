import React from 'react';
import '../Ds.css';
import Sidebar from '../Sidebar/Sidebar';

import Header from '../Header/Header';

export default function Algorithm() {
  return (
    <div className="container-class">
      <div className="header">
        <Header />
      </div>

      <div className="main">

        <div className="sidebar-comp">
          <Sidebar link="algorithm" />
        </div>

        <div className="content">

        </div>


      </div>
    </div>
  )
}
