import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting in a Laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="corsor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Development</h3>
                        <p>
                        I'm a Frontend Developer, skilled in building and optimizing websites for a seamless and user-friendly experience.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Development</h3>
                        <p>
                        I'm a Backend Developer, specializing in server-side design, development, and database management for websites and web applications.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                        I'm a UI Designer, crafting visually appealing and intuitive user interfaces for websites and applications.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
