import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../services/user";
import loginImage from "../../assets/images/login.svg";
function Login() {
  const [error, setError] = useState(null);
  return (
    <div className="w-full h-screen bg-gradient-to-b from-green-300 flex flex-col justify-center items-center border border-black">
      <div className="flex flex-row w-2/3 h-3/4 justify-center items-center rounded-xl shadow-2xl bg-green-300 border border-green-400">
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src={loginImage} alt="" className="w-full h-1/2" />
        </div>
        <div className="w-1/2 h-full">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              let errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={async (values, actions) => {
              try {
                await login(values);
                window.location.reload();
              } catch (errors) {
                setError(errors.message);
                actions.setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full h-full  justify-center items-center ">
                <div className="h-1/6 flex items-center justify-center">
                  <h1 className="text-center text-xl">Sign In</h1>
                </div>
                <div className="w-full h-5/6 p-5 flex flex-col  justify-center">
                  <div className="w-full h-1/6 flex flex-col justify-center my-4">
                    <label htmlFor="email">Email</label>
                    <Field
                      className="h-1/2 bg-green-100 rounded-lg shadow-2xl focus:bg-white"
                      type="email"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="w-full h-1/6 flex flex-col justify-center my-4">
                    <label htmlFor="password">Contraseña</label>
                    <Field
                      className="h-1/2 bg-green-100 rounded-lg shadow-2xl focus:bg-white"
                      type="password"
                      name="password"
                    />
                    <ErrorMessage name="password" component="div" />
                    <div>{error}</div>
                  </div>
                  <button className="mx-28 my-5 h-10 bg-green-400 shadow-xl border-green-700 w-1/2 rounded-xl" type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
