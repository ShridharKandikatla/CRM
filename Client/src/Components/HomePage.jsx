import Sidebar from './sidebar';
import HomeTopContent from './HomeTopContent';
import HomeContent from './HomeContent';
import HomePageButton from './HomePageButton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token == undefined) {
      navigate('/login');
    }
  }, []);

  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <HomeTopContent />
        <HomePageButton />
        <HomeContent />
      </div>
    </div>
  );
};
export default Homepage;
