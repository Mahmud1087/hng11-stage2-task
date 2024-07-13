'use client';

import { Circle, Disc2 } from 'lucide-react';
import FilterOption from './filterOption';
import { useState } from 'react';
import arrowDown from '../../../public/arrow-down.png';
import Image from 'next/image';

const category = [
  {
    text: 'Bedroom',
    color: 'text-gray-prim',
  },
  {
    text: 'Living room',
    color: 'text-gray-prim',
  },
  {
    text: 'Dining room',
    color: 'text-gray-prim',
  },
  {
    text: 'Outdoor',
    color: 'text-gray-prim',
  },
  {
    text: 'Office',
    color: 'text-gray-prim',
  },
  {
    text: 'Decor',
    color: 'text-[#BF5428]',
  },
];

const color = [
  {
    text: 'Red',
    color: 'text-gray-prim',
    icon: <Circle size={12} color='#4d4d4d' />,
  },
  {
    text: 'Orange',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'Greed',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'Blue',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'Brown',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'White',
    color: '#BF5428',
    icon: <Disc2 strokeWidth={2} size={12} color='#BF5428' />,
  },
];

const availability = [
  {
    text: 'In Stock',
    color: 'text-gray-prim',
    icon: <Circle size={12} color='#4d4d4d' />,
  },

  {
    text: 'Out of Stock',
    color: '#BF5428',
    icon: <Disc2 strokeWidth={2} size={12} color='#BF5428' />,
  },
];

const material = ['Cloth', 'Wood', 'Upholstered', 'Glass', 'Rattan', 'Plastic'];

const FilterBox = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);

  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isAvailability, setIsAvailability] = useState(false);

  return (
    <div className='mt-5 w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-1'>
      <section className='h-fit pt-3 px-5 border-2 border-green-sec rounded-2xl bg-[#f9f9f9]'>
        <div
          className='flex justify-between items-center mb-3 group cursor-pointer'
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <h1 className='font-bold text-gray-prim text-lg'>Category</h1>
          <div
            className={`${
              isCategoryOpen && 'rotate-180'
            } group-hover:rotate-180 transition-all`}
          >
            <Image src={arrowDown} alt='dropdown button' />
          </div>
        </div>
        {isCategoryOpen && (
          <section className='flex flex-col gap-3 justify-center pb-6'>
            {category.map((cat) => {
              return (
                <FilterOption
                  key={cat.text}
                  text={cat.text}
                  color={cat.color}
                  icon={cat.icon}
                />
              );
            })}
          </section>
        )}
      </section>

      <section className='h-fit pt-3 px-5 border-2 border-green-sec rounded-2xl bg-[#f9f9f9]'>
        <div
          className='flex justify-between items-center mb-3 group cursor-pointer'
          onClick={() => setIsMaterialOpen(!isMaterialOpen)}
        >
          <h1 className='font-bold text-gray-prim text-lg'>Material</h1>
          <div
            className={`${
              isMaterialOpen && 'rotate-180'
            } group-hover:rotate-180 transition-all`}
          >
            <Image src={arrowDown} alt='dropdown button' />
          </div>
        </div>
        {isMaterialOpen && (
          <article className='flex gap-2 flex-wrap pb-6'>
            {material.map((item) => {
              return <MaterialOption key={item} item={item} />;
            })}
          </article>
        )}
      </section>

      <section className='h-fit pt-3 px-5 border-2 border-green-sec rounded-2xl bg-[#f9f9f9]'>
        <div
          className='flex justify-between items-center mb-3 group cursor-pointer'
          onClick={() => setIsColorOpen(!isColorOpen)}
        >
          <h1 className='font-bold text-gray-prim text-lg'>Color</h1>
          <div
            className={`${
              isColorOpen && 'rotate-180'
            } group-hover:rotate-180 transition-all`}
          >
            <Image src={arrowDown} alt='dropdown button' />
          </div>
        </div>
        {isColorOpen && (
          <article className='flex flex-col gap-3 justify-center pb-6'>
            {color.map((cat) => {
              return (
                <FilterOption
                  key={cat.text}
                  text={cat.text}
                  color={cat.color}
                  icon={cat.icon}
                />
              );
            })}
          </article>
        )}
      </section>

      <section className='h-fit pt-3 px-5 border-2 border-green-sec rounded-2xl bg-[#f9f9f9]'>
        <div
          className='flex justify-between items-center mb-3 group cursor-pointer'
          onClick={() => setIsAvailability(!isAvailability)}
        >
          <h1 className='font-bold text-gray-prim text-lg'>Availability</h1>
          <div
            className={`${
              isAvailability && 'rotate-180'
            } group-hover:rotate-180 transition-all`}
          >
            <Image src={arrowDown} alt='dropdown button' />
          </div>
        </div>
        {isAvailability && (
          <article className='flex flex-col gap-3 justify-center pb-6'>
            {availability.map((cat) => {
              return (
                <FilterOption
                  key={cat.text}
                  text={cat.text}
                  color={cat.color}
                  icon={cat.icon}
                />
              );
            })}
          </article>
        )}
      </section>
    </div>
  );
};

const MaterialOption = ({ item }) => {
  const [isMaterialOptionOpen, setIsMaterialOptionOpen] = useState(false);
  return (
    <div
      className='px-4 py-1 flex items-center gap-2 rounded-full bg-[#EAEEEF] w-fit cursor-pointer'
      onClick={() => setIsMaterialOptionOpen(!isMaterialOptionOpen)}
    >
      <p
        className={`text-sm ${
          isMaterialOptionOpen ? 'text-[#BF5428]' : 'text-gray-prim'
        } font-semibold`}
      >
        {item}
      </p>
    </div>
  );
};

export default FilterBox;
