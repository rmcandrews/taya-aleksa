import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.profilePicture}
        alt="taya"
        src={process.env.PUBLIC_URL + "/assets/images/about/profile.jpg"}
      />
      <ol className={styles.infoList}>
        <li>
          <h2>Philosophy of Design</h2>
          <p>
            I don’t believe in pristine, static, bland, and anonymous interiors.
            Instead, I strive to make each project innovative, unique, dynamic,
            and individually distinctive according to a client’s personality and
            needs.
          </p>
        </li>
        <li>
          <h2>What Inspires Me</h2>
          <p>
            Projects with a strong and undiluted point of view. Being able to
            take something conventional and interpret it in a new way. Designers
            who inspire me are: Ryan Korban, Greg Natale, and Jean-Louis Deniot,
            to name a few.
          </p>
        </li>
        <li>
          <h2>Constantly Learning</h2>
          <p>
            I am a visual junky who is eternally collecting information
            concerning design. I pour through books, magazines, auction
            catalogs, Pinterest—anywhere to keep a fresh perspective and spark
            new ideas. Good design is constantly evolving.
          </p>
        </li>
        <li>
          <h2>Goals</h2>
          <p>
            To treat each project like a blank canvas; to help my clients be
            open to new ideas; to create unique and amazing interiors they will
            be able to love and live in for a long time.
          </p>
        </li>
        <li>
          <h2>Experience</h2>
          <p>
            Lucky enough to work in both residential design and event design.
            Graduated from Syracuse University with an Interior Design Degree.
            Have worked for Thom Filicia in New York to Katie Jayne of Jayne
            Weddings and Events to Alexis Bednyak Design.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default About;
