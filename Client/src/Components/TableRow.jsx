import { LuMessageSquare } from 'react-icons/lu';
import { MdOutlineMessage } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { IoMdMail, IoLogoWhatsapp } from 'react-icons/io';
import {
  FaUser,
  FaUserGraduate,
  FaUserClock,
  FaVideo,
  FaChevronDown,
} from 'react-icons/fa';
import { PiPhoneCallFill } from 'react-icons/pi';
import { ImMail } from 'react-icons/im';
import ThreeDots from './ThreeDots';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { studentAtom } from '../store/atoms/student';

const TableRow = () => {
  const student = useRecoilState(studentAtom);
  const [openDropdownId, setOpenDropdownId] = useState(null);


  const toggleDropdown = (itemId) => {
    setOpenDropdownId(itemId === openDropdownId ? null : itemId);
  };
  return student[0].map((item) => {
    return (
      <div >
        <tr >
          <td className='px-5 py-5 text-sm bg-white border-b border-gray-200'>
            <div className='flex items-center w-28'>
              <div className='flex-shrink-0'>
                <input
                  id='inline-checkbox'
                  type='checkbox'
                  defaultValue
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
              </div>
              <div className='ml-3'>
                <div className='text-sm whitespace-no-wrap'>
                  {item.firstName}
                </div>
                <div className='text-xs font-thin text-gray-400'>
                  {item.mobile}
                </div>
              </div>
            </div>
          </td>
          <td className='px-10 pb-2 text-sm bg-white border-b border-gray-200'>
            <table className='text-center border-2 border-gray-200 '>
              <tr className='border-2 '>
                <td className='px-2'>New call</td>
              </tr>
              <tr className='border-2 '>
                <td className='px-2'>0</td>
              </tr>
            </table>
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <IoCallSharp />
            </p>
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <LuMessageSquare />
            </p>
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <IoMdMail />
            </p>
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200 pr-14'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <MdOutlineMessage />
            </p>
          </td>

          <td className='px-5 py-5 text-xl bg-white border-b border-l border-gray-200 pl-14'>

            <FaUser />
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <FaUserGraduate />
            </p>
          </td>
          <td className='px-5 py-5 pr-10 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <FaUserClock />
            </p>
          </td>
          {/* <td className='px-5 py-5 text-xl bg-white border-b border-gray-200'>
          <p className='text-gray-900 whitespace-no-wrap'>View All</p>
        </td> */}
          <td className='px-5 py-5 pl-10 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <FaVideo />
            </p>
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <PiPhoneCallFill />
            </p>
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <ImMail />
            </p>
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200 pr-14'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <IoLogoWhatsapp />
            </p>
          </td>
          <td className='px-5 py-5 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <ThreeDots />
            </p>
          </td>
          <td className='px-5 py-5 pl-10 text-xl bg-white border-b border-gray-200'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <FaChevronDown
                onClick={() => {
                  toggleDropdown(item.id)
                }}
              />
            </p>
          </td>
        </tr>
        {item.id === openDropdownId ? (
          <div >
            <tr className=''>
              <td className='px-20 py-5 text-sm bg-white '>
                Lead Age {'value'}
              </td>
              <td className='px-20 py-5 text-sm bg-white'>Course</td>
              <td className='px-20 py-5 text-sm bg-white'>Specialization</td>
              <td className='px-20 py-5 text-sm bg-white'>
                Payment Type
              </td>
            </tr>
            <tr className=''>
              <td className='px-20 py-5 text-sm bg-white '>
                REGIStdATION&nbsp;&nbsp;NO
              </td>
              <td className='px-20 py-5 text-sm bg-white'>
                SUB&nbsp;-&nbsp;OISPOSITION
              </td>
              <td className='px-20 py-5 text-sm bg-white'>State</td>
              <td className='px-20 py-5 text-sm bg-white'>City</td>
            </tr>
            <tr className=''>
              <td className='px-20 py-5 text-sm bg-white '>
                Lead&nbsp;&nbsp;Id
              </td>
              <td className='px-20 py-5 text-sm bg-white'>QUALIFICATION</td>
              <td className='px-20 py-5 text-sm bg-white'>
                Lead&nbsp;&nbsp;Creation&nbsp;&nbsp;Date
              </td>
              <td className='px-20 py-5 text-sm bg-white'>
                LEAD&nbsp;&nbsp;CREATION&nbsp;&nbsp;DATE
              </td>
            </tr>
            <tr className=''>
              <td className='px-20 py-5 text-sm bg-white '>
                Lead&nbsp;&nbsp;Modification&nbsp;&nbsp;Date
              </td>
              <td className='px-20 py-5 text-sm bg-white'>
                REFERRED&nbsp;&nbsp;TO&nbsp;&nbsp;UPDATE&nbsp;&nbsp;OATE
              </td>
              <td className='px-20 py-5 text-sm bg-white'>
                Lead&nbsp;&nbsp;Owner
              </td>
              <td className='px-20 py-5 text-sm bg-white'>
                FOLLOWUP&nbsp;&nbsp;COMMENT
              </td>
            </tr>
            <tr className=''>
              <td className='px-20 py-5 text-sm bg-white '>INSTITUTE</td>
              <td className='px-20 py-5 text-sm bg-white'>
                ERP&nbsp;&nbsp;COMMENTS
              </td>
            </tr>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  });
};
export default TableRow;
