import { useRecoilState } from 'recoil';
import TableRow from './TableRow';
import { useEffect, useState } from 'react';
import { studentAtom } from '../store/atoms/student';
import url from '../../url';


const HomeContent = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [student, setStudent] = useRecoilState(studentAtom);

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const totalItems = 100;
  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage + 1;
  const endIndex = Math.min(pageNumber * itemsPerPage, totalItems);

  const handleNextClick = () => {
    const maxPageNumber = Math.ceil(totalItems / itemsPerPage);

    if (pageNumber < maxPageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(url + 'student/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ pageNumber }),
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setStudent(data);
    });
  }, [pageNumber]);

  return (
    <>
      <div className='mx-5'>
        <div className='inline-block overflow-hidden rounded-lg shadow '>
          {/* {student && student[0].map((item) => { */}
          {/* return ( */}
          <table >
            <tbody >
              {/* <TableRow item={item} /> */}
              <TableRow />
            </tbody>
          </table>
          {/* ) */}
          {/* })} */}
          <div className='flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between '>
            <span className='text-xs text-gray-900 xs:text-sm'>
              Showing {startIndex} to {endIndex}
            </span>
            <div className='inline-flex mt-2 xs:mt-0'>
              <button
                className='px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400'
                onClick={handlePrevClick}
                disabled={pageNumber === 1}
              >
                Prev
              </button>
              <button
                className='px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400'
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeContent;
