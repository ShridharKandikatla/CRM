import { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import axios from 'axios';
import url from '../../url';

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const DeleteToken = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    axios
      .get(url + 'staff/profile', {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setProfile(res.data.profile);
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <div>
      {/*  */}
      <div className='relative inline-block'>
        <button
          onClick={toggleDropdown}
          className='w-12 h-12 bg-gray-300 rounded-full'
        >
          {/* Your profile picture goes here */}
          <BsPersonCircle className='w-12 h-12' />
        </button>
        {isOpen && (
          <div className='absolute right-0 py-1 mt-2 bg-white rounded-md shadow-lg w-50 ring-1 ring-black ring-opacity-5'>
            <div className='flex flex-row'>
              <a
                href='#'
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
              >
                <BsPersonCircle className='w-10 h-10' />
              </a>
              <div>
                {/* <a
                  href='#'
                  className='block px-4 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Name
                </a> */}
                <a
                  href='#'
                  className='block px-4 text-xs text-gray-700 hover:bg-gray-100'
                >
                  {profile.email}
                </a>
                {/* <a
                  href='#'
                  className='block px-4 py-1 text-xs text-gray-700 hover:bg-gray-100'
                >
                  1234567890
                </a> */}
              </div>
            </div>
            <button
              onClick={() => DeleteToken()}
              className='block float-right px-4 py-1 text-gray-700 text-ms hover:bg-gray-100'
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
