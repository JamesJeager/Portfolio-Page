import React from 'react';
import styles from '../styles/About.module.css';


function About() {
    return (
        <div className={styles.pageHome}>
            <section className={styles.about}>
            <h1 className={styles.title}>I am Floyd-James Feson Fada</h1>
                <p className={styles.intro}>
                Hi, I'm Floyd-James, but I go by the name James Jeager. I'm an aspiring coder with expertise in JavaScript and a passion for creating innovative and impactful solutions. My journey into technology and art began with a deep curiosity and love for exploring creative possibilities.
                </p>
                <p>

                I was born and raised in Nigeria, where I spent the first 9 years of my life. Later, I moved to South Africa where i my fascination for technology and art was sparked. Amazed by the wonders of software and the creative potential it holds, I embarked on a journey of learning, taking online courses to satisfy my curiosity and build the foundation of my skills.
                </p>
                <p>

        Today, I combine my love for coding with my creative instincts to solve challenging problems and design user-centric solutions. Beyond tech, I also
take an interest in art, gaming, reading, fixing things, cooking, and exploring the mysteries and intricacies of the universe through astronomy. Each of these interests fuels my imagination and shapes the way I approach my projects.

                </p>
            </section>

            <section className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>Personal Information</h2>
                <div className={styles.card}>
                    <p><strong>Full Name:</strong> Floyd-James Feson Fada</p>
                    <p><strong>Nationality:</strong> Nigerian</p>
                    <p><strong>Email:</strong> floydfq2@gmail.com</p>
                    <p><strong>Date of Birth:</strong> 12-02-2005</p>
                </div>
            </section>

            <section className={styles.interestsSection}>
                <h2 className={styles.sectionTitle}>Interests & Avocations</h2>
                <div className={styles.interestsGrid}>
                    <div className={styles.interestCard}>
                        <img src="../IMG_20231017_232519.jpg" alt="Art" className={styles.interestImage} />
                        <p>Art</p>
                    </div>
                    <div className={styles.interestCard}>
                        <img src="../IMG_gaming_012728.jpg" alt="Gaming" className={styles.interestImage} />
                        <p>Gaming</p>
                    </div>
                    <div className={styles.interestCard}>
                        <img src="../IMG_reading_111715.jpg" alt="Reading" className={styles.interestImage} />
                        <p>Reading</p>
                    </div>
                    <div className={styles.interestCard}>
                        <img src="../IMG_fixing_145754.jpg" alt="Fixing Things" className={styles.interestImage} />
                        <p>Fixing Things</p>
                    </div>
                    <div className={styles.interestCard}>
                        <img src="../IMG_cooking_125020.jpg" alt="Cooking" className={styles.interestImage} />
                        <p>Cooking</p>
                    </div>
                    <div className={styles.interestCard}>
                        <img src="../Carina_Nebula1.jpeg" alt="Astronomy" className={styles.interestImage} />
                        <p>Astronomy</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;