import { useState, useEffect } from 'react';

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const[error,setError]=useState(null);

  const fetchProperty = async () => {
    try {
      const response = await fetch('https://apis.raveum.com/v1/propies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(!response.ok){
        setError('Failed to fetch data');
        setLoading(false);
        return;
      }

      const result = await response.json();
      setData(result?.properties || []);

    } catch (error) {
      console.error('Error fetching property data:', error);
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return { data, loading,error };
}

export default useFetch;
