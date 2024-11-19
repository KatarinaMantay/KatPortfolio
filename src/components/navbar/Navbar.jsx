import React, { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png"; // Import the menu icon
import closeIcon from "../../assets/nav/closeIcon.png"; // Import the close icon

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                {/* Dynamically switch the image based on menuOpen */}
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? closeIcon : menuIcon} // Toggle between icons
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)} // Toggle menu state
                />
                {/* Show/hide the menu based on menuOpen */}
                {menuOpen && (
                    <ul className={styles.menuItems}>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};
