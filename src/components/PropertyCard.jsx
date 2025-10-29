import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PropertyCard({ property, addToFav, fav = [] }) {
    const uid = property._id ?? property.id;
    const [isFav, setIsFav] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const exists = fav.some((item) => (item._id ?? item.id) === uid);
        setIsFav(Boolean(exists));
    }, [fav, uid]);

    const handleFav = () => {
        addToFav(property);
        setIsFav((v) => !v);
    };

    return (
        <div className="relative bg-white rounded-2xl shadow-lg w-[350px] flex-shrink-0 hover:shadow-2xl transition-all duration-300" >
            <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                <img
                    src={`https://cdn.raveum.com/${property.thumbnail}`}
                    alt={property.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    onClick={() => navigate(`/property/${property._id}`)}
                />

                {/* Heart Icon */}
                <button
                    onClick={handleFav}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition-all"
                    aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <Heart
                        size={22}
                        className={isFav ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                    />
                </button>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 truncate">{property.name}</h2>
                <p className="text-sm text-gray-500">{property.address}</p>

                <div className="mt-2 flex flex-col gap-1 text-gray-700 text-sm">
                    <p><strong>Type:</strong> {property.propertyType.trim()}</p>
                    <p>
                        <strong>Price:</strong>{' '}
                        {property.propertyPrice
                            ? new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                maximumFractionDigits: 0, // removes .00 — you can change this
                            }).format(Number(property.propertyPrice))
                            : 'N/A'}
                    </p>
                    <p><strong>Available:</strong> {property.availabilityStatus.trim()}</p>
                    <p><strong>Built Year:</strong> {property.builtYear}</p>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
