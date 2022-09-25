import "./sidebar.css";
import { Link } from "react-router-dom";
import { LinearData } from '../Data/LinearData';
import { NonLinearData } from '../Data/NonLinearData';


function Sidebar() {

  return (
    <div className="static">
      <div className="nav">   {/* top */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Optimized Prime</span>
        </Link>
      </div>
      <div className="sidebar">
        <p className="title text-center">LINEAR DATA STRUCTURE</p>
        <div className="data">  {/* center */}
          {LinearData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}

          <p className="non title text-center">NON-LINEAR DATA STRUCTURE</p>
          {NonLinearData.map((item, index) => {
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

export default Sidebar;