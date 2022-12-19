import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";


const Schema = Yup.object().shape({
  password: Yup.string().required("pelase enter this"),
  changepassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  }).matches(/[a-z]/, "Error" )
});

const Register =()=> {
  return (
    <Formik
      initialValues={{
        password: "",
        changepassword: ""
      }}
      validationSchema={Schema}
      onSubmit={() => {}}
    >
      {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
        return (
          <form onSubmit={handleSubmit}>
            <label for="passowrd">Password</label>
            <input
              type="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            <span class="error" style={{ color: "red" }}>
              {errors.password}
            </span>

            <label for="passowrd">Confirm Password</label>
            <input
              type="password"
              name="changepassword"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.changepassword}
            />
            <span class="error" style={{ color: "red" }}>
              {errors.changepassword}
            </span>
          </form>
        );
      }}
    </Formik>
  );
}

export default Register