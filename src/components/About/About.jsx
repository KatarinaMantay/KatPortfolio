import React from "react";

import styles from "./About.module.css";

// Importing individual images
import katcpImg from "../../assets/about/katcp.png";
import cssLogo from "../../assets/about/css.png";
import uwinLogo from "../../assets/about/uwinlogo.png";

export const About = () => {
  return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          {/* About Main Image */}
          <img
              src={katcpImg}
              alt="Me with a laptop"
              className={styles.aboutImage}
          />
          {/* About Items */}
          <ul className={styles.aboutItems}>
            {/* Frontend Developer */}
            <li className={styles.aboutItem}>
              <img src={cssLogo} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>School of CS Undergrad Rep</h3>
                <p>
                  Liaise between students and faculty to address concerns, enhance curriculum, and support student success.
                </p>
              </div>
            </li>
            {/* Backend Developer */}
            <li className={styles.aboutItem}>
              <img src={uwinLogo} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>CSS Event Organizer and Rep</h3>
                <p>
                  Organize events to boost student engagement, networking, and skill development.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
  );
};
