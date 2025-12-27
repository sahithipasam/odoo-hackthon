import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar(){

  return (
    <div className="navbar">

      <div className="nav-tabs">

        {/* ⭐ Dashboard page (CARDS PAGE) */}
        <NavLink 
          to="/dashboard" 
          className={({isActive})=>isActive?"tab active":"tab"}
        >
          Dashboard
        </NavLink>

        <NavLink 
          to="/calendar" 
          className={({isActive})=>isActive?"tab active":"tab"}
        >
          Maintenance Calendar
        </NavLink>

        <NavLink 
          to="/equipment" 
          className={({isActive})=>isActive?"tab active":"tab"}
        >
          Equipment
        </NavLink>

        <NavLink 
          to="/reporting" 
          className={({isActive})=>isActive?"tab active":"tab"}
        >
          Reporting
        </NavLink>

        <NavLink 
          to="/teams" 
          className={({isActive})=>isActive?"tab active":"tab"}
        >
          Teams
        </NavLink>

        {/* ⭐ NEW — Login tab */}
        <NavLink 
          to="/" 
          className={({isActive})=>isActive?"tab active":"tab"}
        >
          Login
        </NavLink>

      </div>


      <div className="actions">
        <input placeholder="Search..." className="search"/>
        <button className="plus-btn">+</button>
      </div>

    </div>
  );
}
