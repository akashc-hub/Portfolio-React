import React from 'react'

import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'



const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hi, I am Akash Chauhan
        </h1>
        <p className={styles.description}>
            I'm a Full-Stack Developer and a passionate and detail-oriented Coder with keen Interests in Coding. I thrive in collaborative environments and enjoy tackling complex problems to create innovative and efficient solutions.
        </p>
        <a href="mailto:07.akashchauhan@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of Me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
  </section>
  );
};

export default Hero
