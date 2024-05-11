import Profile from './Profile';
import FormNewCustomer from './FormNewCustomer';
import Bell from './Bell';
import { useState } from 'react';
import url from '../../url';
import useAxios from '../customHooks/useAxios';
import { useSetRecoilState } from 'recoil';
import { studentAtom } from '../store/atoms/student';

const HomeTopContent = () => {
  const options = [
    'Search by Name, Email or Mobile Number',
    'Search by Name',
    'Search by Mobile',
    'Search by Email',
    'Search by LeadID',
  ];

  const [filter, setFilter] = useState(options[0]);
  const [input, setInput] = useState('');
  const { loading, error, sendRequest } = useAxios();
  const setStudent = useSetRecoilState(studentAtom);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearch = async () => {
    if (!input) {
      alert('Enter Student Details');
      return;
    }
    try {
      switch (filter) {
        case 'Search by Email':
          const emailResponse = await sendRequest(
            'post',
            url + 'student/data',
            {
              email: input,
            }
          );
          setStudent(emailResponse);
          setInput('');
          break;
        case 'Search by Name':
          const nameResponse = await sendRequest('post', url + 'student/data', {
            firstName: input,
          });
          setStudent(nameResponse);
          setInput('');
          break;
        case 'Search by Mobile':
          const mobileResponse = await sendRequest(
            'post',
            url + 'student/data',
            {
              mobile: input,
            }
          );
          setStudent(mobileResponse);
          setInput('');
          break;
        case 'Search by LeadID':
          const idResponse = await sendRequest('post', url + 'student/data', {
            id: Number(input),
          });
          setStudent(idResponse);
          setInput('');
          break;
        default:
          alert('Please select a filter');
          break;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className='container px-4 mx-auto bg-gray-200 sm:px-8'>
        <div className='my-8 '>
          <div className='my-2'>
            <div className='flex justify-between mb-1 sm:mb-0'>
              <div className='flex mt-3 w-28 sm:flex-row sm:w-64 lg:w-fit'>
                <div>
                  <div className='flex'>
                    <select
                      value={filter}
                      onChange={handleChange}
                      className='block h-full px-1 py-4 text-sm leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none w-30 focus:outline-none focus:bg-white focus:border-gray-500'
                    >
                      {options.map((option, index) => {
                        return (
                          <option key={index} value={option}>
                            {option === options[0]
                              ? '---Select Filter---'
                              : option}
                          </option>
                        );
                      })}
                    </select>
                    <input
                      type='text'
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className='px-4 py-2 ml-2 border border-gray-400 rounded-r focus:outline-none focus:border-blue-500'
                      placeholder={filter}
                    />
                    <div className='inset-y-0 right-0 flex items-center px-2 text-gray-700 '>
                      <button
                        onClick={handleSearch}
                        className='px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-600'
                      >
                        Search
                      </button>
                    </div>
                  </div>
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
