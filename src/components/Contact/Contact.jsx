import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>Feel Free to reach out!</p>
        </div>
        <ul>
            <li>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                <a href="mailto:07.akashchauhan@gmail.com">07.akashchauhan@gmail.com</a>
            </li>
            <li>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
                <a href="https://www.linkedin.com/in/akashchauhan07/">linkedin.com/akashchauhan07</a>
            </li>
            <li>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Linkedin Icon"/>
                <a href="https://github.com/akashc-hub">github.com/akashc-hub</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
