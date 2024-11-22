import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { useState } from "react";
import Sidebar from '../../src/components/Sidebar';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            <NavLink to="/">James Jeager</NavLink>
            </div>
            <ul className={`${styles.navLinks} ${styles.navLinksDesktop}`}>
              <li>
                <NavLink to="/" exact activeClassName={styles.active}>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeClassName={styles.active}>
                    About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName={styles.active}>
                Contact
                </NavLink>
              </li>  
              <li>
                <NavLink to="/cv" exact activeClassName={styles.active}>
                CV
                </NavLink>
              </li>
            </ul>
            <button className={styles.menuToggle} onClick={toggleSidebar}>
            ☰
          </button>
        </nav>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
         </> 
    );
};

export default Navbar;