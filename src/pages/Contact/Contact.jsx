import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
      <div
        style={{
          paddingTop: "3rem",
          paddingBottom: "1rem",
          fontSize: "1.5rem"
        }}
      >
        OR
      </div>
      <div>
        email us at{" "}
        <a
          href="mailto: taya.aleksa@gmail.com"
          style={{ textDecoration: "underline" }}
        >
          taya.aleksa@gmail.com
        </a>{" "}
        for anything else
      </div>
    </div>
  );
};

export default Contact;
