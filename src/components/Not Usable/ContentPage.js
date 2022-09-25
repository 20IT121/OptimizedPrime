// import '../css/ContentPage.css';

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// // import * as AiIcons from 'react-icons/ai'; 
// // import { SidebarData } from '../DataStructure/LinearData';
// import { IconContext } from 'react-icons';

// export default function ContentPage() {

//   const [sidebar, setSidebar] = useState(true);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div className='navbar'>
//           <Link to="#" className='menu-bars'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>

//         <div className="content-page">
//           <div className="side-bar">
//             <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//               <ul className='nav-menu-items' onClick={showSidebar}>
//                 {/* <li className="navbar-toggle"> */}
//                 {/* <Link to="#" className='menu-bars'>
//                 <AiIcons.AiOutlineClose />
//               </Link> */}
//                 {/* </li> */}
//                 {SidebarData.map((item, index) => {
//                   return (
//                     <li key={index} className={item.cName}>
//                       <Link to={item.path}>
//                         {item.icon}
//                         <span>{item.title}</span>
//                       </Link>
//                     </li>
//                   )
//                 })}
//               </ul>
//             </nav>
//           </div>

//           <div className="content">
//             <h1 className='text-center'>Hello</h1>
//           </div>
//         </div>
//       </IconContext.Provider>
//     </>
//   )
// }