import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import {
  registerInitialValues,
  registerSchema,
} from '../schemas/register.form';

export const Register = () => {
  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(`Welcome, ${values.firstName}`, 'Your account has been created.');
    },
  });

  return (
    <Box mt={5}>
      <Box mb={1}>
        <TextField
          label="First Name"
          variant="outlined"
          onChange={formik.handleChange('firstName')}
          onBlur={formik.handleBlur('firstName')}
          value={formik.values?.firstName}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </Box>
      <Box mb={1}>
        <TextField
          label="Last Name"
          variant="outlined"
          onChange={formik.handleChange('lastName')}
          onBlur={formik.handleBlur('lastName')}
          value={formik.values?.lastName}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </Box>
      <Box mb={1}>
        <TextField
          label="Email Address"
          variant="outlined"
          type="email"
          onChange={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values?.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <Box mb={1}>
        <TextField
          label="Phone Number"
          variant="outlined"
          onChange={formik.handleChange('phoneNumber')}
          onBlur={formik.handleBlur('phoneNumber')}
          value={formik.values?.phoneNumber}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
      </Box>
      <Box mb={1}>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          onChange={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values?.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>
      <Box mb={1}>
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          onChange={formik.handleChange('confirmPassword')}
          onBlur={formik.handleBlur('confirmPassword')}
          value={formik.values?.confirmPassword}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
      </Box>

      <Button onClick={formik.handleSubmit}>Register</Button>
    </Box>
  );
};
