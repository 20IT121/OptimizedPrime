import React from 'react';
import './Ds.css';
import Sidebar from '../Sidebar/Sidebar';

import Header from '../Header/Header';

export default function Ds() {

  return (
    <div className="main">

      <div className="header">
        <Header />
      </div>

      <div className="sidebar-comp">
        <Sidebar link="dataStructure"/>
      </div>

      <div className="">

      </div>

    </div>
  )

}
