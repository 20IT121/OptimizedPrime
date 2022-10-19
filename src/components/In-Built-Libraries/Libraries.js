import React from 'react'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

export default function Libraries() {
  return (
    <div>
      <div className="main">

        <div className="header">
          <Header />
        </div>

        <div className="sidebar-comp">
          <Sidebar link="libraries" />
        </div>

        <div className="">

        </div>

      </div>
    </div>
  )
}
