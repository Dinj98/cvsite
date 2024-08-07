// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { redirect } from "next/navigation";

// export default function Login() {
//   const { data: session, status } = useSession();
//   if (session != null) {
//     redirect("/");
//   } else {
//     if (status === "loading") {
//       return <p>plz wait a seconds...</p>;
//     }

//     return (
//       <div className="bg-my-green text-white text-xl m-4 flex flex-col text-center items-center justify-center">
//         {session ? (
//           <>
//             <p>Welcome, {session.user.name}!</p>
//             <button onClick={() => signOut()}>Sign out</button>
//           </>
//         ) : (
//           <div className=" m-2">
//             <p>You are not signed in.</p>
//             <button
//               className="bg-green-800 p-2 text-2xl rounded-xl "
//               onClick={() => signIn("github")}
//             >
//               Sign in with GitHub
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    usernameOrEmail: Yup.string()
      .required("Username or Email is required")
      .min(8, "username or email must be at least 8 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "password must be at least 8 characters"),
  });

  const handleSubmit = (values) => {
    console.log("Form data", values);
    // You can handle the form submission here (e.g., API call)
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <label className="mx-4" htmlFor="usernameOrEmail">
              Username/Email
            </label>
            <Field
              type="text"
              id="usernameOrEmail"
              name="usernameOrEmail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.usernameOrEmail}
            />
            <ErrorMessage
              name="usernameOrEmail"
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
            <Field type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
