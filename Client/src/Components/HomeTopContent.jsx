import Profile from './Profile';
import FormNewCustomer from './FormNewCustomer';
import Bell from './Bell';
import { useState } from 'react';

const HomeTopContent = () => {
  const [filter, setFilter] = useState(
    'Search by Name, Email or Mobile Number'
  );
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className='container px-4 mx-auto bg-gray-200 sm:px-8'>
        <div className='my-8 '>
          <div className='my-2'>
            <div className='flex justify-between mb-1 sm:mb-0'>
              <div className='flex mt-3 w-28 sm:flex-row sm:w-64 lg:w-fit'>
                <div>
                  <div className='relative'>
                    <select
                      value={filter}
                      className='block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
                      onChange={handleChange}
                    >
                      <option value='Search by Name, Email or Mobile Number'>
                        Basic Search
                      </option>
                      <option value='Search by Name'>Name</option>
                      <option value='Search by Mobile'>Mobile</option>
                      <option value='Search by Email'>Email Address</option>
                      <option value='Search by LeadID'>Lead ID</option>
                    </select>
                    <div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'></div>
                  </div>
                </div>

                <div className='relative block'>
                  <span className='absolute inset-y-0 left-0 flex items-center h-full pl-2'>
                    <svg
                      viewBox='0 0 24 24'
                      className='text-gray-500 fill-current'
                    >
                      <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
                    </svg>
                  </span>
                  <input
                    placeholder={filter}
                    className='block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
                    onChange={(event) => setInput(event.target.value)}
                  />
                </div>

                <div className='pl-3 m-2'>
                  <Bell />
                </div>

                <div className='m-2 '>
                  <FormNewCustomer />
                </div>
              </div>
              <div>
                <div className='pl-2 m-2 '>
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeTopContent;
