import React, { useEffect, useState } from 'react';
import PropertyComp from './PropertyComp';
import useFetch from '../hooks/UseFetch';

function Property({ addToFav, fav }) {
  const [properties, setProperties] = useState(
    localStorage.getItem('properties')
      ? JSON.parse(localStorage.getItem('properties'))
      : []
  );

  const { data, loading,error } = useFetch();
  if(error){
    alert(error);
  }

  useEffect(() => {
    if (data && data.length > 0) {
      setProperties(data);
      localStorage.setItem('properties', JSON.stringify(data));
    }
    return
  }, [data]);

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading properties...</p>;
  }

  return (
    <div>
      {properties && properties.length > 0 ? (
        <PropertyComp properties={properties} addToFav={addToFav} fav={fav} />
      ) : (
        <p className="text-center py-10 text-gray-500">No properties available</p>
      )}
    </div>
  );
}

export default Property;
