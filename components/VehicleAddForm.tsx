'use client';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { VehicleMake } from '../app/api/vehicles/route';

const validationSchema: yup.Schema<VehicleMake> = yup.object({
  Make_ID: yup
    .string()
    .min(1, 'Enter a valid vehicle ID')
    .required('Vehicle ID is required'),
  Make_Name: yup
    .string()
    .min(1, 'Enter a valid vehicle Name')
    .required('Vehicle Name is required'),
  Model_ID: yup
    .number()
    .min(2, 'Enter Model ID, 2 char minimum')
    .required('Model ID is required'),
  Model_Name: yup
    .string()
    .min(1, 'Model Name should be of minimum 1 characters length')
    .required('Model Name is required'),
  Value: yup
    .number()
    .min(1, 'Value should be of minimum 1 characters length')
    .required('Value is required')
});

export default function VehicleAddForm() {
  const formik = useFormik({
    initialValues: {
      Make_ID: '123A',
      Make_Name: 'Honda',
      Model_ID: 200,
      Model_Name: 'CR-V',
      Value: 5000
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //alert(JSON.stringify(values, null, 2));
      fetch('http://localhost:3000/api/vehicles', {
        method: 'POST',
        body: JSON.stringify(values)
      }).then((res) => console.log(res));
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin='normal'
          fullWidth
          id='Make_ID'
          name='Make_ID'
          label='Make_ID'
          value={formik.values.Make_ID}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Make_ID && Boolean(formik.errors.Make_ID)}
          helperText={formik.touched.Make_ID && formik.errors.Make_ID}
        />
        <TextField
          margin='normal'
          fullWidth
          id='Make_Name'
          name='Make_Name'
          label='Make_Name'
          type='Make_Name'
          value={formik.values.Make_Name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Make_Name && Boolean(formik.errors.Make_Name)}
          helperText={formik.touched.Make_Name && formik.errors.Make_Name}
        />
        <TextField
          margin='normal'
          fullWidth
          id='Model_ID'
          name='Model_ID'
          label='Model_ID'
          type='Model_ID'
          value={formik.values.Model_ID}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Model_ID && Boolean(formik.errors.Model_ID)}
          helperText={formik.touched.Model_ID && formik.errors.Model_ID}
        />
        <TextField
          margin='normal'
          fullWidth
          id='Model_Name'
          name='Model_Name'
          label='Model_Name'
          type='Model_Name'
          value={formik.values.Model_Name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Model_Name && Boolean(formik.errors.Model_Name)}
          helperText={formik.touched.Model_Name && formik.errors.Model_Name}
        />
        <TextField
          margin='normal'
          fullWidth
          id='Value'
          name='Value'
          label='Value'
          type='Value'
          value={formik.values.Value}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Value && Boolean(formik.errors.Value)}
          helperText={formik.touched.Value && formik.errors.Value}
        />
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </>
  );
}
