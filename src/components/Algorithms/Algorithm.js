import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import Header from '../Header/Header';

export default function Algorithm() {
  return (
    <div className="main">

      <div className="header">
        <Header />
      </div>

      <div className="sidebar-comp">
        <Sidebar link="algorithm" />
      </div>

      <div className="">

      </div>

    </div>
  )
}
