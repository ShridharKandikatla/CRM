/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import url from '../../url';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token != undefined) {
      axios
        .get(url + 'staff/profile', {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            navigate('/');
          }
        });
    }
  }, []);

  const login = async () => {
    axios
      .post(url + 'staff/login', {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const navigate = useNavigate();
  return (
    <section className='h-screen px-10 mx-20 '>
      <div className='h-full'>
        {/* Left column container with background*/}
        <div className='flex flex-wrap items-center justify-center h-full g-6 lg:justify-between'>
          <div className='mb-12 shrink-1 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
            <img
              src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
              className='w-full'
              alt='Sample image'
            />
          </div>
          {/* Right column container */}
          <div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12'>
            <form>
              <div>
                <div className='relative z-0 w-full mt-12 mb-5 group'>
                  <input
                    type='email'
                    name='floating_email'
                    id='floating_email'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label
                    htmlFor='floating_email'
                    className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Email address
                  </label>
                </div>
                <div className='relative z-0 w-full mt-12 mb-5 group'>
                  <input
                    type='password'
                    name='floating_password'
                    id='floating_password'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label
                    htmlFor='floating_password'
                    className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Password
                  </label>
                </div>
              </div>

              <div className='flex items-center justify-between mb-6'>
                {/*Forgot password link*/}
                {/* <a href='#!'>Forgot password?</a> */}
              </div>
              {/* Login button */}
              <div className='text-center lg:text-left'>
                <button
                  type='button'
                  className='inline-block rounded bg-blue-700 hover:bg-blue-800 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                  onClick={() => login()}
                >
                  Login
                </button>
                {/* Register link */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
