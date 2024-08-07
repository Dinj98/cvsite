"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 4 characters")
      .required("Name is required"),
    username: Yup.string()
      .min(8, "Username must be at least 8 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form data", values);
    // You can handle the form submission here (e.g., API call)
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{ marginLeft: "10px" }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Field
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                style={{ marginLeft: "10px" }}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
