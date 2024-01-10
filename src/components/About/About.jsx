import React from 'react'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section>
        <h2>
            About
        </h2>
        <div>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting in a Laptop" />
            <ul>
                <li>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="corsor icon" />
                    <div>
                        <h3>Frontend Development</h3>
                        <p>
                            I'm a Frontend Developer
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
