import React from 'react';
import styles from '../styles/Contact.module.css';



const Contact = () => {
    return (
        <div className={styles.pageHome}>
            <section className={styles.contact}>
                <h1 className={styles.title}>Contact Me</h1>
                <form className={styles.form}>
                    <input type="text" placeholder="Your Name" required  className={styles.input} />
                    <input type="email" placeholder="Your Email" required  className={styles.input} />
                    <textarea palceholder="Your Message" rows="5" required className={styles.textarea}></textarea>
                    <button type="submit" href="mailto:floydfq2@gmail.com" className={styles.button}>Send</button>
                </form>
        <h3>Socials</h3>
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F_bla.blablaa_%2F%3Figshid%3DcDhsNGtwbmg2bm9x%26utm_source%3Dqr%26epik%3Ddj0yJnU9cmNMaVZsaW1ScHYzLVRqUGNXV25kbDRLTGFaelFnUFkmcD0wJm49cmVmRlFmVTVMbWM0eUxuaklNb2JwZyZ0PUFBQUFBR2NndXdr&is_from_rle" target="_blank" rel="noopener noreferrer">
            <img src="../../1_Instagram_colored_svg_1-128.webp" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/floyd.feson/" target="_blank" rel="noopener noreferrer">
            <img src="../../1_Facebook_colored_svg_copy-128.webp" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/floyd-james-feson-46827a2ba/" target="_blank" rel="noopener noreferrer">
            <img src="../../5296501_linkedin_network_linkedin logo_icon (1).png" alt="LinkedIn" />
          </a>
          <a href="mailto:floydfq2@gmail.com">
            <img src="../../7089163_gmail_google_icon.png" alt="Gmail" />
          </a>
          <a href="https://github.com/JamesJeager" target="_blank" rel="noopener noreferrer">
            <img src="../../211904_social_github_icon.png" alt="GitHub" />
          </a>
        </div>
            </section>
        </div>
    );
};

export default Contact;