import React from "react";
import styles from "./Experience.module.css";

// Importing individual images
import cssImg from "../../assets/skills/css.png";
import htmlImg from "../../assets/skills/html.png";
import reactImg from "../../assets/skills/react.png";
import nodeImg from "../../assets/skills/node.png";
import pythonImg from "../../assets/skills/python.png";
import cImg from "../../assets/skills/c.png";
import javaImg from "../../assets/skills/java.png";
import javascriptImg from "../../assets/skills/javascript.png";
import gitImg from "../../assets/skills/git.png";

import lumaImg from "../../assets/history/LumaMC.png";
import uowImg from "../../assets/history/UofW.png";
import bldjImg from "../../assets/history/empty.jpg";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div> ‎ </div>
            <div className={styles.content}>

                {/* Skills Section */}
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={htmlImg} alt="HTML"/>
                        </div>
                        <p>HTML</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={cssImg} alt="CSS"/>
                        </div>
                        <p>CSS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={reactImg} alt="React"/>
                        </div>
                        <p>React</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={nodeImg} alt="Node"/>
                        </div>
                        <p>Node.js</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={javaImg} alt="Java"/>
                        </div>
                        <p>Java</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={cImg} alt="C"/>
                        </div>
                        <p>C</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={pythonImg} alt="Python"/>
                        </div>
                        <p>Python</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={javascriptImg} alt="Javascript"/>
                        </div>
                        <p>Javascript</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={gitImg} alt="Git"/>
                        </div>
                        <p>Git</p>
                    </div>
                </div>

                {/* History Section */}
                <ul className={styles.history}>
                    <li className={styles.historyItem}>
                        <img src={bldjImg} alt="Empty Logo"/>
                        <div className={styles.historyItemDetails}>
                            <h3>Accounts Payable Clerk</h3>
                            <p>BLDJ Inc</p>
                            <p>Sep 2019 – Present</p>
                            <ul>
                                <li>Manage accounts payable processes</li>
                                <li>Verifying invoices</li>
                                <li>Reconciling expenses.</li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <img src={lumaImg} alt="Luma Logo" />
                        <div className={styles.historyItemDetails}>
                            <h3>Co-Owner / Co-Founder</h3>
                            <p>LumaMC</p>
                            <p>Aug, 2021 - Aug, 2022</p>
                            <ul>
                                <li>Handled marketing/digital design</li>
                                <li>Built wiki for server documentation</li>
                                <li>Managing server infrastructure</li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.historyItem}>
                        <img src={uowImg} alt="UoW Logo" />
                        <div className={styles.historyItemDetails}>
                            <h3>UoW Co-op</h3>
                            <p>University of Windsor</p>
                            <p>Dec 2023 – June 2024</p>
                            <ul>
                                <li>Developed digital signage solutions</li>
                                <li>Contributed to development/design</li>
                                <li>Work within a team environment</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
