import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import { Backpack, ChevronLeft } from 'lucide-react';

function SingleProperty() {
    console.log("SingleProperty component rendered");
  const [singleProperty, setSingleProperty] = useState(null);
  const { _id } = useParams();

  const { data, loading } = useFetch();

  const navigate=useNavigate()

  useEffect(() => {
    if (data && data.length > 0 && _id) {
      const found = data.find((item) => item._id === _id);
      setSingleProperty(found || null);
    }
  }, [data, _id]);

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading property...</p>;
  }

  if (!singleProperty) {
    return <p className="text-center py-10 text-gray-500">Property not found</p>;
  }

  const handleBack=()=>{
    navigate(-1);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <button onClick={handleBack} className='flex cursor-pointer'> <ChevronLeft /> Back</button>
      <img
        src={`https://cdn.raveum.com/${singleProperty.thumbnail}`}
        alt={singleProperty.name}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{singleProperty.name}</h2>
      <p className="text-gray-600 mb-4">{singleProperty.address}</p>
      <p><strong>Type:</strong> {singleProperty.propertyType}</p>
      <p><strong>Price:</strong> ₹{parseInt(singleProperty.propertyPrice).toLocaleString()}</p>
      <p><strong>Availability:</strong> {singleProperty.availabilityStatus}</p>
      <p><strong>Built Year:</strong> {singleProperty.builtYear}</p>
    </div>
  );
}

export default SingleProperty;
