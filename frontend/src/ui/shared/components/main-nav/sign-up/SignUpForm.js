import React, {useState} from 'react';

import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContent} from "./SignUpFormContent";
import { httpConfig } from '../../../../../shared/utils/http-config'

export const SignUpForm = () => {
  const signUp = {
    profileEmail: "",
    profileName: "",
    profilePassword: "",
    profilePasswordConfirm: ""

  };

  const [status, setStatus] = useState(null);
  const validator = Yup.object().shape({
    profileEmail: Yup.string()
      .email("email must be a valid email")
      .required('email is required'),
    profileName: Yup.string()
      .required("profile handle is required"),
    profilePassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least eight characters"),
    profilePasswordConfirm: Yup.string()
      .required("Password Confirm is required")
      .min(8, "Password must be at least eight characters")
  });

  const submitSignUp = (values, {resetForm, setStatus}) => {
    httpConfig.post("/apis/sign-up/", values)
      .then(reply => {
          let {message, type} = reply;

          if(reply.status === 200) {
            resetForm();
          }
          setStatus({message, type});
        }
      );
  };


  return (

    <Formik
      initialValues={signUp}
      onSubmit={submitSignUp}
      validationSchema={validator}
    >
      {SignUpFormContent}
    </Formik>

  )
};