import { useState } from 'react';
import Modal from './Modal';
import { FaPlus } from 'react-icons/fa';
import url from '../../url';
import axios from 'axios';
import { useFormik } from 'formik';
import { newStudentSchema } from '../schema';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  primary_source: '',
  secondary_source: '',
  disposition: '',
  sub_disposition: '',
  courseName: '',
  specilization: '',
  erp_comment: '',
};

export default function FormNewCustomer() {
  const [open, setOpen] = useState(false);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: newStudentSchema,
      onSubmit: (values, actions) => {
        handleStudent(values);
        // setOpen(false);
        // actions.resetForm();
      },
    });

  const handleStudent = async (student) => {
    console.log(student);
    const token = localStorage.getItem('token');
    const course = {
      courseName: student.courseName,
    };
    if (token != undefined) {
      const res = await fetch(url + 'student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ student, course }),
      });
      console.log(res);
    }
  };

  return (
    <main className='App'>
      <button className='btn btn-danger' onClick={() => setOpen(true)}>
        <FaPlus />
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit}>
          <div className='text-center w-90'>
            <div className='flex flex-col p-8 space-y-4 bg-white rounded shadow-lg'>
              <h2 className='text-xl font-bold text-gray-900'>Quick Add</h2>
              <div className='flex space-x-8'>
                <input
                  className='flex-grow p-2 border'
                  type='text'
                  placeholder='First Name *'
                  name='firstName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  required
                />
                {touched.firstName && errors.firstName ? (
                  <p>{errors.firstName}</p>
                ) : null}
                <input
                  className='flex-grow p-2 border'
                  type='text'
                  placeholder='Last Name'
                  name='lastName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName ? (
                  <p>{errors.lastName}</p>
                ) : null}
              </div>
              <div className='flex space-x-8'>
                <input
                  className='p-2 border '
                  style={{ width: 251 }}
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email ? <p>{errors.email}</p> : null}
                <input
                  style={{ width: 246 }}
                  className='p-2 border'
                  type='tel'
                  placeholder='MobileNo Number*'
                  name='mobile'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  required
                />
                {touched.mobile && errors.mobile ? (
                  <p>{errors.mobile}</p>
                ) : null}
              </div>
              <div className='flex space-x-10'>
                <select
                  className='p-2 border'
                  name='primary_source'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.primary_source}
                  required
                >
                  <option>
                    {' '}
                    Primary Source
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                  </option>
                  <option>2 Source </option>
                  <option>Primary Source </option>
                  <option>Primary Source </option>
                  {/* Add your options here */}
                </select>
                {touched.primary_source && errors.primary_source ? (
                  <p>{errors.primary_source}</p>
                ) : null}
                <select
                  className='p-2 border'
                  name='secondary_source'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.secondary_source}
                  required
                >
                  <option>
                    secondary
                    Source&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </option>
                  <option>secondary Source</option>
                  <option>secondary Source</option>
                  <option>secondary Source</option>
                  {/* Add your options here */}
                </select>
                {touched.secondary_source && errors.secondary_source ? (
                  <p>{errors.secondary_source}</p>
                ) : null}
              </div>
              <div className='flex space-x-10'>
                <select
                  className='p-2 border'
                  name='disposition'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.disposition}
                  required
                >
                  <option>
                    disposition
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </option>
                  <option>disposition</option>
                  <option>disposition</option>
                  <option>disposition</option>
                  {/* Add your options here */}
                </select>
                {touched.disposition && errors.disposition ? (
                  <p>{errors.disposition}</p>
                ) : null}
                <select
                  className='p-2 border'
                  name='sub_disposition'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sub_disposition}
                  required
                >
                  <option>
                    sub disposition
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </option>
                  <option>sub disposition</option>
                  <option>sub disposition</option>
                  <option>sub disposition</option>
                  {/* Add your options here */}
                </select>
                {touched.sub_disposition && errors.sub_disposition ? (
                  <p>{errors.sub_disposition}</p>
                ) : null}
              </div>
              <div className='flex space-x-10'>
                <select
                  className='p-2 border'
                  name='courseName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.courseName}
                  required
                >
                  <option>
                    Course
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </option>
                  <option>Course</option>
                  <option>Course</option>
                  <option>Course</option>
                  {/* Add your options here */}
                </select>
                {touched.courseName && errors.courseName ? (
                  <p>{errors.courseName}</p>
                ) : null}
                <select
                  className='p-2 border'
                  name='specilization'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.specilization}
                  required
                >
                  <option>
                    Specilization
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </option>
                  <option>Specilization</option>
                  <option>Specilization</option>
                  <option>Specilization</option>
                  {/* Add your options here */}
                </select>
                {touched.specilization && errors.specilization ? (
                  <p>{errors.specilization}</p>
                ) : null}
              </div>
              <input
                className='flex-grow p-2 border'
                type='text'
                placeholder='ERP Comment'
                name='erp_comment'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.erp_comment}
              />
              {touched.erp_comment && errors.erp_comment ? (
                <p>{errors.erp_comment}</p>
              ) : null}
              <div className='flex space-x-4'>
                <button
                  type='submit'
                  className='px-4 py-2 text-white bg-blue-500 rounded'
                >
                  SAVE & CLOSE
                </button>
                {/* <button className='px-4 py-2 text-white bg-blue-500 rounded'>
                  SAVE & ADD MORE
                </button> */}
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </main>
  );
}
