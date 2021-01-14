import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import styles from "./ContactForm.module.css";

const sleep = ms => new Promise(r => setTimeout(r, ms));

const FormInput = ({
  disabled,
  type,
  name,
  label,
  required,
  pattern,
  errors,
  touched,
  minLength,
  maxLength
}) => {
  return (
    <>
      <div className={`${styles.wrapInput} ${styles.validateInput}`}>
        <label className={styles.labelInput} htmlFor={name}>
          {label}
          {required ? " *" : ""}
        </label>
        <Field
          className={styles.input}
          type={type}
          name={name}
          pattern={pattern}
          maxLength={maxLength || "10000000"}
          minLength={minLength || "0"}
          disabled={disabled}
        />
        <span className={styles.focusInput} />
      </div>
      {errors && errors[name] && touched[name] ? (
        <div className={styles.validationError}>{errors[name]}</div>
      ) : null}
    </>
  );
};

const FormTextArea = ({
  type,
  name,
  label,
  required,
  placeholder,
  disabled
}) => {
  return (
    <div className={`${styles.wrapInput} ${styles.validateInput}`}>
      <label className={styles.labelInput} htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <Field
        className={styles.input}
        type={type}
        name={name}
        component="textarea"
        placeholder={placeholder}
        disabled={disabled}
      />
      <span className={styles.focusInput} />
    </div>
  );
};

const SelectField = ({ options, field, form, disabled }) => {
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
      isDisabled={disabled}
    />
  );
};

const FormSelectField = ({
  type,
  name,
  label,
  required,
  options,
  errors,
  touched,
  disabled
}) => {
  return (
    <>
      <div className={`${styles.wrapInput} ${styles.validateInput}`}>
        <label className={styles.labelInput} htmlFor={name}>
          {label}
          {required ? " *" : ""}
        </label>
        <Field
          type={type}
          name={name}
          component={SelectField}
          options={options}
          disabled={disabled}
        />
        <span className={styles.focusInput} />
      </div>
      {errors && errors[name] && touched[name] ? (
        <div className={styles.validationError}>{errors[name]}</div>
      ) : null}
    </>
  );
};

const Contact = () => {
  const [hasSucceeded, setHasSucceeded] = useState(false);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phoneNumber: "",
        budget: "",
        projectType: "",
        zipCode: "",
        message: ""
      }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "Required";
        }
        if (!values.zipCode) {
          errors.zipCode = "Required";
        }
        if (!values.budget) {
          errors.budget = "Required";
        }
        if (!values.projectType) {
          errors.projectType = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await sleep(1000);
        try {
          const response = await fetch(
            "https://soxig0htxb.execute-api.us-east-1.amazonaws.com/contactFormMessage",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
            }
          );
          const body = await response.json();
          if (body.status !== "Success") throw Error("Send Failed");
          setHasSucceeded(true);
        } catch (error) {
          console.error(error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <div className={styles.containerContact}>
          <div className={styles.wrapContact}>
            <div className={styles.contactFormTitle}>
              Fill out the this form to inquire about a new project
            </div>
            <Form className={styles.contactForm} noValidate>
              <FormInput
                type="text"
                name="name"
                label="Name"
                errors={errors}
                touched={touched}
                required
                disabled={hasSucceeded || isSubmitting}
              />
              <FormInput
                type="email"
                name="email"
                label="Email"
                errors={errors}
                touched={touched}
                required
                disabled={hasSucceeded || isSubmitting}
              />
              <FormInput
                type="tel"
                name="phoneNumber"
                label="Phone Number"
                minLength="10"
                maxLength="11"
                errors={errors}
                touched={touched}
                required
                disabled={hasSucceeded || isSubmitting}
              />
              <FormInput
                type="text"
                name="zipCode"
                label="Zip Code"
                pattern="[0-9]*"
                maxLength="5"
                errors={errors}
                touched={touched}
                required
                disabled={hasSucceeded || isSubmitting}
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
                errors={errors}
                touched={touched}
                disabled={hasSucceeded || isSubmitting}
              />
              <FormSelectField
                name="projectType"
                label="Project Type"
                required
                options={[
                  { value: "Single Family", label: "Single Family" },
                  { value: "Condo", label: "Condo" }
                ]}
                errors={errors}
                touched={touched}
                disabled={hasSucceeded || isSubmitting}
              />
              <FormTextArea
                type="text"
                name="message"
                label="Message"
                placeholder="Tell us a bit about the project"
                disabled={hasSucceeded || isSubmitting}
              />
              {!hasSucceeded ? (
                <div className={styles.containerContactFormButton}>
                  <div className={styles.wrapContactFormButton}>
                    <button
                      className={styles.contactFormButton}
                      disabled={isSubmitting}
                      style={{ color: isSubmitting ? "red" : "white" }}
                    >
                      {isSubmitting ? (
                        <div className={styles.loadingIcon}>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    fontSize: "1.25rem",
                    textAlign: "center",
                    lineHeight: 1.2
                  }}
                >
                  Your information has been submitted.<br></br>We will get back
                  to you soon!
                </div>
              )}
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Contact;
