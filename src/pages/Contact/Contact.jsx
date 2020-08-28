import React from "react";
import styles from "./Contact.module.css";

import instagramIcon from "../../assets/icons/icon-ig.svg";
import pinterestIcon from "../../assets/icons/icon-pin.svg";
import linkedInIcon from "../../assets/icons/icons-linkedin.svg";

const Contact = () => {
  return (
    <div className={styles.container}>
      <ol className={styles.list}>
        <li>
          <h2>EMAIL</h2>
          <p style={{ fontSize: 20 }}>
            <a href="mailto: taya.aleksa@gmail.com">taya.aleksa@gmail.com</a>
          </p>
        </li>
        <li>
          <h2>SOCIALS</h2>
          <div className={styles.socialsList}>
            <a
              href="https://www.instagram.com/taya.aleksa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="instagram" />
            </a>
            <a
              href="https://in.pinterest.com/beasleyla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pinterestIcon} alt="pinterest" />
            </a>
            <a
              href="https://www.linkedin.com/in/taya-lyskanycz-b23b5a29/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="linkedin" />
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Contact;
