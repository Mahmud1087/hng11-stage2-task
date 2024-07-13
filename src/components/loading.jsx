import { LoaderCircle } from 'lucide-react';

const Loading = () => {
  return (
    <div className='w-full h-56 flex items-center justify-center'>
      <LoaderCircle width={40} className='animate-spin' />
    </div>
  );
};
export default Loading;
