'use client';
import React, { useRef } from 'react';
import PropertyCard from './PropertyCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function PropertyComp({ properties,addToFav,fav }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full px-10">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronLeft size={28} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth py-4"
      >
        {properties.map((property,i) => (
          <PropertyCard key={i} property={property} addToFav={addToFav} fav={fav} />
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

export default PropertyComp;
