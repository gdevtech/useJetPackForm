import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSignUpForm } from '../../hooks/useSignUpForm';
import Input from '../../components/Input';
import SelectDropDown from '../../components/SelectDropDown';
import { Button } from '../../components/Button';
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ErrorInput } from '../../components/Input/input.style';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../pages/Home/home.style';



export default function SignUpForm(){
  const maritalStatusRef = useRef(null);
  const selectedGenderRef = useRef(null);
  let navigate = useNavigate();
  const GENDER_SELECTION = [
    {id: 0, name: 'Select'},
    {id: 2, name: 'Female'},
    {id: 1, name: 'Male'},
    {id: 3, name: 'Other'},
  ];
  const INITIAL_STATE = {
    name: '',
    gender: '',
    marital: '',
    dateOfBirth: '',
    arbitraryInteger: ''
  };
  const [dob, setDob] = useState(new Date());
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {handleSubmit, handleChange, handleNextStep, values, errors, isSubmitting, submissionSuccess, formStep} = useSignUpForm(INITIAL_STATE);

  const [selectedMaritalStatusOption, setSelectedMaritalStatusOption] = useState('');
  useEffect(() => {
    if(formStep === 3) {
      const getAllRadioElements = maritalStatusRef.current.querySelectorAll('input');
      getAllRadioElements.forEach(radioElement => {
        if(radioElement.checked) {
          values.marital = radioElement.value;
        }
      });
    }
  },[selectedMaritalStatusOption, formStep]);

  useEffect(() => {
    if(formStep === 4) {
      values.dateOfBirth = dob;
    }
  }, [values, formStep]);

  useEffect(() => {
    if(submissionSuccess) {
      setSelectedMaritalStatusOption('');
      setDob(new Date());
      setFormSubmitted(true);
      setTimeout(() => {
        navigate("/submissions")
      },2000)
    }
  },[submissionSuccess])

  if(formSubmitted) {
    return(
      <>
        <h1>Your Form Has Been Submitted</h1>
        <img src="https://cdn.sanity.io/images/0p0c88r6/production/698482a35e1d453821ec692ca38829a338c1e468-623x502.png?w=1200&auto=format" />
      </>
    )
  }

  return(
    <Form onSubmit={handleSubmit} id="registrationForm">
      {formStep === 1 ? <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      ><Input type="text" name="name" placeholder="Enter Full Name" error={errors.name} idName="fullName" labelValue="Let's Get Started" exampleText="ex. Jacob Rogers" value={values.name} onChange={handleChange} /></motion.div> : null}

      {formStep === 2 ? <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      ><SelectDropDown items={GENDER_SELECTION} error={errors.gender} labelValue='Gender' ref={selectedGenderRef} onChange={handleChange}/></motion.div> : null}
      {formStep === 3 ? <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      ><div id="maritalStatus" ref={maritalStatusRef}>
        <span>Select Martial Status</span>
        <ul>
          <li>
            <Input type="radio" labelValue="Single" idName="singleStatus" value={"single"} checked={selectedMaritalStatusOption === 'singleStatus'} onChange={() => setSelectedMaritalStatusOption("singleStatus")}/>
          </li>
          <li>
            <Input type="radio" labelValue="Married" idName="marriedStatus" value={"married"} checked={selectedMaritalStatusOption === 'marriedStatus'} onChange={() => setSelectedMaritalStatusOption("marriedStatus")}/>
          </li>
          <li>
            <Input type="radio" labelValue="Widowed" idName="widowedStatus" value={"widowed"} checked={selectedMaritalStatusOption === 'widowedStatus'} onChange={() => setSelectedMaritalStatusOption("widowedStatus")}/>
          </li>
          <li>
            <Input type="radio" labelValue="Separated" idName="separatedStatus" value={"separated"} checked={selectedMaritalStatusOption === 'separatedStatus'} onChange={() => setSelectedMaritalStatusOption("separatedStatus")}/>
          </li>
          <li>
            <Input type="radio" labelValue="Divorced" idName="divorcedStatus" value={"divorced"} checked={selectedMaritalStatusOption === 'divorcedStatus'} onChange={() => setSelectedMaritalStatusOption("divorcedStatus")}/>
          </li>
        </ul>
        {errors.marital && <ErrorInput>{errors.marital}</ErrorInput>}
      </div></motion.div> : null}
      {formStep === 4 ? <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      ><div id='datepicker'>
        <span>Select Date Of Birth</span>
      <DatePicker
        selected={dob}
        onChange={(dob) => {setDob(dob); handleChange(dob)}}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      {errors.dateOfBirth && <ErrorInput>{errors.dateOfBirth}</ErrorInput>}
      </div></motion.div> : null}
      {formStep === 5 ? <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      ><Input type="number" min="0" max="100" value={values.arbitraryInteger} name="arbitraryInteger" placeholder="Enter Any Number" error={errors.arbitraryInteger} idName="random" labelValue="Arbitrary Integer" onChange={handleChange}/></motion.div> : null}
      {formStep === 5 ? <Button
        type="submit"
        size="large"
        disabled={isSubmitting}
        variant="secondary"
        >
      {isSubmitting ? 'Uploading Form...' : 'SUBMIT'}
        </Button> : <Button
        size="large"
        variant="secondary"
        onClick={handleNextStep}
        >
      <span>NEXT <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
</svg></span>
        </Button>}

    </Form>
  )
}