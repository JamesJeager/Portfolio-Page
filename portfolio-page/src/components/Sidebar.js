import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "../styles/Sidebar.module.css";


function Sidebar({ isOpen, toggleSidebar }) {
    return (
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
      >
        <button className={styles.closeBtn} onClick={toggleSidebar}>
          ×
        </button>
        <ul className={styles.sidebarLinks}>
          <li>
            <NavLink to="/" onClick={toggleSidebar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleSidebar}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleSidebar}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv" onClick={toggleSidebar}>
              CV
            </NavLink>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;