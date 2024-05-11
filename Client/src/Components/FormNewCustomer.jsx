import { useState } from 'react';
import Modal from './Modal';
import { FaPlus } from 'react-icons/fa';
import url from '../../url';
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
        handleStudent(values, actions);
      },
    });

  const handleStudent = async (student, actions) => {
    const token = localStorage.getItem('token');
    const course = {
      courseName: student.courseName,
      specialization: student.specilization,
      erpComments: student.erp_comment,
    };
    if (token != undefined) {
      const res = await fetch(url + 'student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ student, course }),
      })
        .then(async (res) => {
          const data = await res.json();
          setOpen(false);
          actions.resetForm();
        })
        .catch(() => {
          alert('Email already exists');
        });
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
                <div className='items-end flex-colume'>
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
                    <p className='pr-2 text-xs text-red-600'>
                      {errors.firstName}
                    </p>
                  ) : null}
                </div>
                <div className=' flex-colume'>
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
                    <p className='pr-2 text-xs text-red-600'>
                      {errors.lastName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className='flex space-x-8'>
                <div className='flex-colume'>
                  <input
                    className='p-2 border '
                    style={{ width: 251 }}
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <p className='pr-2 text-xs text-red-600'>{errors.email}</p>
                  ) : null}
                </div>
                <div className=' flex-colume'>
                  <input
                    style={{ width: 246 }}
                    className='p-2 border'
                    type='tel'
                    placeholder='Mobile Number*'
                    name='mobile'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    required
                  />
                  {touched.mobile && errors.mobile ? (
                    <p className='pr-2 text-xs text-red-600'>{errors.mobile}</p>
                  ) : null}
                </div>
              </div>
              <div className='flex space-x-10'>
                <div className='items-end flex-column'>
                  <select
                    className='p-2 border'
                    onChange={handleChange}
                    name='primary_source'
                    onBlur={handleBlur}
                    value={values.primary_source}
                    required
                  >
                    <option>
                      {' '}
                      Primary Source
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                    </option>
                    <option>EE-Check 02</option>
                    <option>EE-Check 03</option>
                    <option>Online</option>
                    <option>Offline</option>
                    {/* Add your options here */}
                  </select>
                  {touched.primary_source && errors.primary_source ? (
                    <p className='pr-2 text-xs text-red-600'>
                      {errors.primary_source}
                    </p>
                  ) : null}
                </div>
                <div className='items-end flex-column'>
                  <select
                    className='p-2 border'
                    name='secondary_source'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.secondary_source}
                    required
                  >
                    <option>
                      Secondary
                      Source&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </option>
                    <option>EE-Check</option>
                    <option>EE-Check02</option>
                    <option>secondary Source</option>
                    {/* Add your options here */}
                  </select>
                  {touched.secondary_source && errors.secondary_source ? (
                    <p className='pr-2 text-xs text-red-600'>
                      {errors.secondary_source}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className='flex space-x-10'>
                <div className='items-end flex-column'>
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
                    <option>01 - New</option>
                    <option>03-Call Back Followup</option>
                    <option>05-Inetrested Followup</option>
                    <option>07-Prospect</option>
                    <option>09-To be enrolled</option>
                    <option>11-Recycled</option>
                    <option>13-Not Interested</option>
                    <option>15-Wrong Phone Number</option>
                  </select>
                  {touched.disposition && errors.disposition ? (
                    <p className='pr-2 text-xs text-red-600'>
                      {errors.disposition}
                    </p>
                  ) : null}
                </div>
                <div className='items-end flex-column'>
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
                    <p className='pr-2 text-xs text-red-600'>
                      {errors.sub_disposition}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className='flex space-x-10'>
                <div className='items-end flex-column'>
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
                    <p className='pr-2 text-xs text-red-600'>
                      {errors.courseName}
                    </p>
                  ) : null}
                </div>
                <div className='items-end flex-column'>
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
                    <p className='pr-2 text-xs text-red-600'>
                      {errors.specilization}
                    </p>
                  ) : null}
                </div>
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
                <p className='pr-2 text-xs text-red-600'>
                  {errors.erp_comment}
                </p>
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
