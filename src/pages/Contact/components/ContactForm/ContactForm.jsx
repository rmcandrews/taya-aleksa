import React from "react";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import styles from "./ContactForm.module.css";

const FormInput = ({ type, name, label, required, pattern }) => {
  return (
    <div className={`${styles.wrapInput} ${styles.validateInput}`}>
      <label class={styles.labelInput} htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <Field
        className={styles.input}
        type={type}
        name={name}
        pattern={pattern}
      />
      <span className={styles.focusInput} />
    </div>
  );
};

const FormTextArea = ({ type, name, label, required, placeholder }) => {
  return (
    <div className={`${styles.wrapInput} ${styles.validateInput}`}>
      <label class={styles.labelInput} htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <Field
        className={styles.input}
        type={type}
        name={name}
        component="textarea"
        placeholder={placeholder}
      />
      <span className={styles.focusInput} />
    </div>
  );
};

const SelectField = ({ options, field, form }) => {
  const customStyle = {
    control: base => ({
      ...base,
      border: "0 !important",
      boxShadow: "0 !important",
      "&:hover": {
        border: "0 !important"
      },
      outline: "none",
      fontFamily: "inherit",
      fontWeight: 400
    })
  };
  return (
    <Select
      openMenuOnFocus={true}
      className={styles.select}
      isSearchable={false}
      options={options}
      name={field.name}
      value={
        options ? options.find(option => option.value === field.value) : ""
      }
      onChange={option => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
      styles={customStyle}
      components={{
        IndicatorSeparator: () => null
      }}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          text: "black",
          primary25: "#eee",
          primary: "black"
        }
      })}
    />
  );
};

const FormSelectField = ({ type, name, label, required, options }) => {
  return (
    <div className={`${styles.wrapInput} ${styles.validateInput}`}>
      <label class={styles.labelInput} htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <Field
        type={type}
        name={name}
        component={SelectField}
        options={options}
      />
      <span className={styles.focusInput} />
    </div>
  );
};

const Contact = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <div className={styles.containerContact}>
          <div className={styles.wrapContact}>
            {/* <span className={styles.contactFormTitle}>Say Hello!</span> */}
            <Form className={`${styles.contactForm} ${styles.validateForm}`}>
              <FormInput type="text" name="name" label="Name" required />
              <FormInput type="email" name="email" label="Email" required />
              <FormInput
                type="tel"
                name="phoneNumber"
                label="Phone Number"
                required
              />
              <FormInput
                type="text"
                name="zipCode"
                label="Zip Code"
                pattern="[0-9]*"
                required
              />
              <FormSelectField
                name="budget"
                label="Budget"
                required
                options={[
                  { value: "$10,000-$20,000", label: "$10,000-$20,000" },
                  { value: "$20,000-$35,000", label: "$20,000-$35,000" },
                  { value: "$35,000-$50,000", label: "$35,000-$50,000" },
                  { value: "$50,000-$70,000", label: "$50,000-$70,000" },
                  { value: "$70,000-$100,000", label: "$70,000-$100,000" },
                  { value: "$100,000+", label: "$100,000+" }
                ]}
              />
              <FormSelectField
                name="projectType"
                label="Project Type"
                required
                options={[
                  { value: "Single Family", label: "Single Family" },
                  { value: "Condo", label: "Condo" }
                ]}
              />
              <FormTextArea
                type="text"
                name="messageText"
                label="Message"
                placeholder="Tell us a bit about the project"
              />
              <div className={styles.containerContactFormButton}>
                <div className={styles.wrapContactFormButton}>
                  <button className={styles.contactFormButton}>Submit</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Contact;
