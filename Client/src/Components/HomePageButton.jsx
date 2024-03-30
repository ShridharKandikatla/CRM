import React, { useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';
import url from '../../url';

const HomePageButton = () => {
  const { loading, error, sendRequest } = useAxios();
  const [countData, setCountData] = useState([]);

  const getCount = (diposition) => {
    const buttonCount = countData.find(
      (item) => item.diposition === diposition
    );
    return buttonCount ? buttonCount._count : 0;
  };

  const BtnName = [
    {
      id: 0,
      name: 'All',
      action: () => handleButtonClick('All'),
    },
    { id: 1, name: 'New', action: () => handleButtonClick('New') },
    {
      id: 2,
      name: 'New (Overdue)',
      action: () => handleButtonClick('New (Overdue)'),
      count: getCount('01 - New'),
    },
    {
      id: 3,
      name: 'Call back Followup',
      action: () => handleButtonClick('Call back Followup'),
    },
    {
      id: 4,
      name: 'Call Back (Overdue)',
      action: () => handleButtonClick('Call Back (Overdue)'),
    },
    {
      id: 5,
      name: 'Interested Followup',
      action: () => handleButtonClick('Interested Followup'),
    },
    {
      id: 6,
      name: 'Interested (Overdue)',
      action: () => handleButtonClick('Interested (Overdue)'),
    },
    { id: 7, name: 'Prospect', action: () => handleButtonClick('Prospect') },
    {
      id: 8,
      name: 'Prospect (Overdue)',
      action: () => handleButtonClick('Prospect (Overdue)'),
    },
    {
      id: 9,
      name: 'To Be Enrolled',
      action: () => handleButtonClick('To Be Enrolled'),
    },
    {
      id: 10,
      name: 'To Be Enrolled - Old',
      action: () => handleButtonClick('To Be Enrolled - Old'),
    },
    { id: 11, name: 'Recycled', action: () => handleButtonClick('Recycled') },
    {
      id: 12,
      name: 'Not Interested',
      action: () => handleButtonClick('Not Interested'),
    },
    {
      id: 13,
      name: 'Wrong Mobile Number',
      action: () => handleButtonClick('Wrong Mobile Number'),
    },
    {
      id: 14,
      name: 'Referred From Me',
      action: () => handleButtonClick('Referred From Me'),
    },
    {
      id: 15,
      name: 'Re-Equired',
      action: () => handleButtonClick('Re-Equired'),
    },
  ];

  const handleButtonClick = (buttonName) => {
    // Perform specific action based on the button clicked
    console.log('Button clicked:', buttonName);
    // Add your functionality here
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest('get', url + 'student/count');
        console.log(response);
        setCountData(response);
      } catch (error) {
        console.error('Error fetching count data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='pb-3 mx-4'>
      {BtnName.map((Menu) => (
        <button
          key={Menu.id}
          type='button'
          className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
          onClick={Menu.action}
        >
          {Menu.name} {Menu.count ? `(${Menu.count})` : '(0)'}
        </button>
      ))}
    </div>
  );
};

export default HomePageButton;
