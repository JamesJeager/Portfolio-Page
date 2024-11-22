import React from 'react';
import styles from '../styles/CV.module.css';


const CV = () => {
    return (
        <div className={`${styles.pageCv} ${styles.pageHome}`} >
            <section className={styles.card}>
                <h1 className={styles.title}>My CV</h1>
                <p className={styles.description}>
          Interested in learning more about me? Feel free to Check out my CV and explore my work experience, education, and achievements.
                </p>
                    {/*<a 
                    href="../../PDF_1712086577288.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.downloadButton} >
                        Download My CV
                    </a>*/}
                    <div>
                        <img src="../../Feson Floyd-James Fada CV Improved.png" alt="My CV" />
                    </div>
            </section>
        </div>
    );
};

export default CV;