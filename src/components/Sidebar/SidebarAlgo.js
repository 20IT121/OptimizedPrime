import "./sidebar.css";
import { Link } from "react-router-dom";
import { AlgoData } from '../Data/AlgoData';


function SidebarAlgo() {

  return (
    <div className="static">
      <div className="nav">   {/* top */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Optimized Prime</span>
        </Link>
      </div>
      <div className="sidebar">
        {/* <p className="title text-center">LINEAR DATA STRUCTURE</p> */}
        <div className="data">  {/* center */}
          {AlgoData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </div>
      </div>
    </div>
  );

}

export default SidebarAlgo;