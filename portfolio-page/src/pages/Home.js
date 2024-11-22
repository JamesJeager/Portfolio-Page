import React from 'react';
import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className={styles.pageHome}>
            <section className={styles.homeContent}>
            <div className={styles.homeIcon}>
                <img src="../../IMG_20231018_161029.jpg" alt="Floyd-James" />
            </div>
            <div className={styles.info}>
            <h1>
              Hey, I'm <span>Floyd-James</span>
            </h1>
                <p>
                    Welcome to my portfolio! I'm a passionate Coder with a focus on building creative and efficient solutions.
                </p>
                <Link to="/about">
                <button className={styles.aboutBtn}>About Me</button>
                </Link>
                <div className={styles.socialIcons}>
                  <a 
                    href="https://www.linkedin.com/in/floyd-james-feson-46827a2ba/"  
                    className="linkedin"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <img 
                    src="../../5296501_linkedin_network_linkedin logo_icon (1).png"  
                    alt="Linkedin" />
                  </a>
                  <a 
                    href="https://github.com/JamesJeager" 
                    className={styles.github} 
                    target="_blank" 
                    rel="noopener noreferrer">
                     <img 
                     src="../../211904_social_github_icon.png" 
                     alt="Github" />
                 </a>
                 <a 
                    href="https://x.com/FloydNether" 
                    className="twitterX" 
                    target="_blank" 
                    rel="noopener noreferrer">
                     <img 
                     src="../../11244080_x_twitter_elon musk_twitter new logo_icon.png" 
                     alt="Twitter/X" />
                 </a>
            </div>
           </div>
          </section>
        </div>
    );
};


export default Home;