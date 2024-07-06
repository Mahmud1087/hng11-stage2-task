import { Search } from 'lucide-react';

const NavButtons = () => {
  return (
    <div className='flex items-center gap-3'>
      <button className='flex items-center justify-center h-11 w-11 border-2 border-green-sec rounded-md shadow-md transition-all hover:shadow'>
        <Search strokeWidth={1.5} size={22} className='text-green-sec' />
      </button>

      <button className='w-28 h-11 rounded-md bg-green-sec text-white shadow-md transition-all hover:shadow'>
        Shop now
      </button>
    </div>
  );
};
export default NavButtons;
