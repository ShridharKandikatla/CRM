import axios from 'axios';
import { useState } from 'react';

// Custom hook for making Axios requests
const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (method, url, data) => {
    setLoading(true);
    try {
      const response = await axios({
        method,
        url,
        data,
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, error, sendRequest };
};

export default useAxios;
