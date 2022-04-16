import React, { useEffect, useState } from 'react'
import RightSideHeader from './RightSideHeader'
import Form from './Form'
import { Formik } from 'formik'
import { SignUpSchema } from '../constants/yupSignUpSchema'

function RightSide() {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    passwordConfirm: "",
    confirmCheck: false
  }

  const [formValues, setFormValues] = useState(defaultValues)
  const [formValid, setFormValid] = useState(false)


  const handleFormSubmit = (values, resetForm) => {
    console.log(values);
    setFormValues(values)
    setFormValid(true);
    setTimeout(() => {
      resetForm();
    }, 1000);
  }

  useEffect(() => {
    if (formValid) {
      // API isteği burada veya handleFormSubmit içinde yapılabilir.
      setFormValid(false)
    }
  }, [formValid])
  

  return (
    <div className='rightside'>
      <RightSideHeader />
      <Formik
        initialValues={formValues}
        validationSchema={SignUpSchema}
        onSubmit={(values, { resetForm }) => handleFormSubmit(values, resetForm)}
      >
        {
          ({ values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit }) =>
            <Form
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
            />
        }
      </Formik>
    </div>
  )
}

export default RightSide