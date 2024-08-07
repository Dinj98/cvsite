"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { redirect } from "next/navigation";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
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
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const handleSubmit = (values) => {
    const confirmationCode = generateRandomCode(8);
    console.log("Form data", values);
    console.log("Confirmation Code:", confirmationCode);

    // Here you would typically send the confirmation code to the user's email
    // For now, we will just redirect to a confirmation page
    redirect(`/confirm-email?code=${confirmationCode}`);
  };

  const generateRandomCode = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
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

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
            <ErrorMessage
              name="phoneNumber"
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
