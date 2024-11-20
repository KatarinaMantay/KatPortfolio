import React from "react";

import styles from "./ProjectCard.module.css";

// Import images explicitly
import project1Image from "../../assets/projects/bot.png"; // Discord Bot image
import project2Image from "../../assets/projects/flappybird.png"; // Flappy Bird image
import project3Image from "../../assets/projects/gamedev.png"; // GameDev image

const imageMap = {
    "projects/bot.png": project1Image,
    "projects/flappybird.png": project2Image,
    "projects/gamedev.png": project3Image,
    // Add more mappings as necessary
};

export const ProjectCard = ({
                                project: { title, imageSrc, description, skills, demo, source },
                            }) => {
    const resolvedImageSrc = imageMap[imageSrc] || project1Image; // Fallback image if not found

    return (
        <div className={styles.container}>
            <img
                src={resolvedImageSrc}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a href={source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
};
