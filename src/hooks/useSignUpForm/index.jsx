import React, { useContext, useEffect, useState } from 'react';
import { DispatchContext, StateContext } from '../../state/context';
import { FORM_SUBMISSIONS } from '../../state/reducer';
import { validationSignUp } from '../../services/validationSignUp';
import { dateFormat } from '../../utils/dateFormat';
import { theFizzBuzz } from '../../utils/theFizzBuzz';

function useSignUpForm(initialState) {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [formStep, setFormStep] = useState(1)

  React.useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    if (!noErrors) {
      if(errors.name) {
        setFormStep(1);
      }
      if(errors.gender) {
        setFormStep(2);
      }
      if(errors.marital) {
        setFormStep(3);
      }
      if(errors.dateOfBirth) {
        setFormStep(4);
      }
      if(errors.arbitraryInteger) {
        setFormStep(5);
      }
    }
  }, [formStep, errors]);

  useEffect(() => {
    const noFieldErrors = Object.keys(errors).length === 0;
    if(noFieldErrors && isSubmitting){
      const formSubmissions = JSON.parse(localStorage.getItem('formSubmissions'));
      let formattedDate = dateFormat(values.dateOfBirth);
      let fizzBuzzTalk = theFizzBuzz(values.arbitraryInteger);
      if(formSubmissions) {
        localStorage.setItem('formSubmissions', JSON.stringify([{ ...values, dateOfBirth: formattedDate, arbitraryInteger: fizzBuzzTalk }, ...formSubmissions]));
      } else {
        localStorage.setItem('formSubmissions', JSON.stringify([{ ...values, dateOfBirth: formattedDate, arbitraryInteger: fizzBuzzTalk }]));
      }
      dispatch({type: FORM_SUBMISSIONS, payload: [{ ...values, dateOfBirth: formattedDate, arbitraryInteger: fizzBuzzTalk }, ...state.formSubmissions]})
      setSubmitting(false);
      setSubmissionSuccess(true);
      setValues(initialState);
      setFormStep(1);
    } else {
      setSubmitting(false);
      setSubmissionSuccess(false);
    }
  },[errors])

  const handleChange = (event) => {
    if(formStep === 2) {
      setValues({
        ...values,
        gender: event.name
      })
    } else if (formStep === 4) {
      setValues({
        ...values,
        dateOfBirth: event.name
      })
    }
    else {
      setValues({
        ...values,
        [event.target?.name]: event.target.value
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    const validationErrors = validationSignUp(values, formStep);
    setErrors(validationErrors);
  }

  function handleNextStep(event) {
    event.preventDefault();
    const validationErrors = validationSignUp(values, formStep);
    setErrors(validationErrors);
    setFormStep(formStep + 1)
  }

  return {
    handleSubmit,
    handleChange,
    handleNextStep,
    values,
    errors,
    isSubmitting,
    submissionSuccess,
    formStep
  };
};

export { useSignUpForm };