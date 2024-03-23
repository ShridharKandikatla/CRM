import * as Yup from 'yup';

export const newStudentSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required('Please enter your first name'),
  lastName: Yup.string().min(2).max(25),
  email: Yup.string().email(),
  mobile: Yup.string().min(10).max(15).required('Please enter MobileNo'),
  primary_source: Yup.string().required('Please select primary source'),
  secondary_source: Yup.string().required('Please select secondary source'),
  disposition: Yup.string().required('Please select disposition'),
  sub_disposition: Yup.string().required('Please select sub disposition'),
  courseName: Yup.string().required('Please select course'),
  specilization: Yup.string(),
  erp_comment: Yup.string(),
});
