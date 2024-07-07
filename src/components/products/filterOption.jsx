import { Circle } from 'lucide-react';

const FilterOption = ({ text, color, icon }) => {
  return (
    <div className='px-4 py-1 flex items-center gap-2 rounded-full bg-[#EAEEEF] w-fit'>
      {icon}
      <p className={`font-semibold ${color}`}>{text}</p>
    </div>
  );
};
export default FilterOption;
