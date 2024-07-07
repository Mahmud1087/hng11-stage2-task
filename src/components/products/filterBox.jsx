import { ChevronUp, Circle, Disc2 } from 'lucide-react';
import FilterOption from './filterOption';

const category = [
  {
    text: 'Bedroom',
    color: 'text-gray-prim',
    icon: <Circle size={12} color='#4d4d4d' />,
  },
  {
    text: 'Bedroom',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'Living room',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'Dining room',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'Outdoor',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'Office',
    color: 'text-gray-prim',
    icon: <Circle strokeWidth={2} size={12} color='#4d4d4d' />,
  },
  {
    text: 'Decor',
    color: 'text-[#BF5428]',
    icon: <Disc2 strokeWidth={2} size={12} color='#BF5428' />,
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

const material = [
  {
    text: 'Cloth',
    color: 'text-gray-prim',
  },
  {
    text: 'Wood',
    color: 'text-[#BF5428]',
  },
  {
    text: 'Upholstered',
    color: 'text-gray-prim',
  },
  {
    text: 'Glass',
    color: 'text-gray-prim',
  },
  {
    text: 'Rattan',
    color: 'text-[#BF5428]',
  },
  {
    text: 'Plastic',
    color: 'text-gray-prim',
  },
];

const FilterBox = () => {
  return (
    <div className='mt-5 w-full flex flex-col gap-6'>
      <section className='h-fit py-4 px-5 border-2 border-green-sec rounded-xl bg-[#f9f9f9]'>
        <div className='flex justify-between items-center mb-3'>
          <h1 className='font-bold text-gray-prim text-lg'>Category</h1>
          <button>
            <ChevronUp strokeWidth={1} />
          </button>
        </div>
        <article className='flex flex-col gap-3 justify-center'>
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
        </article>
      </section>

      <section className='h-fit py-4 px-5 border-2 border-green-sec rounded-xl bg-[#f9f9f9]'>
        <div className='flex justify-between items-center mb-3'>
          <h1 className='font-bold text-gray-prim text-lg'>Price</h1>
          <button>
            <ChevronUp strokeWidth={1} />
          </button>
        </div>
        <div>
          <p className=' font-semibold text-gray-prim text-sm'>
            $50.00 - $500.00
          </p>
          <aside className='w-full h-1 relative rounded-full bg-[#EAEEEF] flex items-center justify-center before:w-4/6 before:h-full before:mx-auto before:bg-[#BF5428] before:rounded-full before:absolute'></aside>
        </div>
      </section>

      <section className='h-fit py-4 px-5 border-2 border-green-sec rounded-xl bg-[#f9f9f9]'>
        <div className='flex justify-between items-center mb-3'>
          <h1 className='font-bold text-gray-prim text-lg'>Material</h1>
          <button>
            <ChevronUp strokeWidth={1} />
          </button>
        </div>
        <article className='flex gap-2 flex-wrap'>
          {material.map((item) => {
            return (
              <div
                className='px-4 py-1 flex items-center gap-2 rounded-full bg-[#EAEEEF] w-fit'
                key={item.text}
              >
                <p className={`text-sm ${item.color} font-semibold`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </article>
      </section>

      <section className='h-fit py-4 px-5 border-2 border-green-sec rounded-xl bg-[#f9f9f9]'>
        <div className='flex justify-between items-center mb-3'>
          <h1 className='font-bold text-gray-prim text-lg'>Color</h1>
          <button>
            <ChevronUp strokeWidth={1} />
          </button>
        </div>
        <article className='flex flex-col gap-3 justify-center'>
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
      </section>

      <section className='h-fit py-4 px-5 border-2 border-green-sec rounded-xl bg-[#f9f9f9]'>
        <div className='flex justify-between items-center mb-3'>
          <h1 className='font-bold text-gray-prim text-lg'>Availability</h1>
          <button>
            <ChevronUp strokeWidth={1} />
          </button>
        </div>
        <article className='flex flex-col gap-3 justify-center'>
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
      </section>
    </div>
  );
};
export default FilterBox;
