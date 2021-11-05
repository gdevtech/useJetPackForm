export function validationSignUp(values, formStep) {
  let errors = {};
  if(formStep === 1) {
    if(!values.name) {
      errors.name = 'Required Name'
    } else {
      const fullName = values.name.split(" ");
      if(fullName.length < 2){
        errors.name = 'Full Name is Required ex. Jesse James'
      }
    }
  }

  if(formStep === 2) {
    if(!values.gender) {
      errors.gender = 'Required Gender'
    } else if (values.gender === 'Select') {
      errors.gender = 'Required Gender'
    }
  }

  if(formStep === 3) {
    if(!values.marital) {
      errors.marital = 'Required Marital Status'
    }
  }

  if(formStep === 4) {
    if(!values.dateOfBirth) {
      errors.dateOfBirth = 'Required Marital Status'
    }
  }

  if(formStep === 5) {
    if(!values.arbitraryInteger) {
      errors.arbitraryInteger = 'Required Arbitrary Integer'
    }
  }

  return errors;
}