import React from "react";
import { Formik } from "formik";
import { createRegister } from "../services/registers";

function Register() {
  const handleSubmit = async values => {
    await createRegister(values.userId, values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          type: "users",
          attributes: {
            entry: "",
            userId: "",
            exit: ""
          }
        }}
        onSubmit={handleSubmit}
        render={({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="attributes.entry">
                entry:{" "}
                <input
                  type="text"
                  id="attributes.entry"
                  name="attributes.entry"
                  onChange={handleChange}
                  value={values.attributes.entry}
                />
              </label>
            </div>
            <div>
              <label htmlFor="attributes.userId">
                userId:{" "}
                <input
                  type="text"
                  id="attributes.userId"
                  name="attributes.userId"
                  onChange={handleChange}
                  value={values.attributes.userId}
                />
              </label>
            </div>
            <div>
              <label htmlFor="attributes.exit">
                exit:{" "}
                <input
                  type="text"
                  id="attributes.exit"
                  name="attributes.exit"
                  onChange={handleChange}
                  value={values.attributes.exit}
                />
              </label>
            </div>
            
            <button type="submit">submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default Register;