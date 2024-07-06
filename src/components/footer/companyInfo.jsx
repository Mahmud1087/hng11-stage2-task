import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Logo from '../logo';

const CompanyInfo = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Logo />
      <p className='text-[0.94rem] font-medium text-gray-prim my-2'>
        davisonmiracle98@gmailcom
      </p>
      <article className='flex gap-2'>
        <div className='h-10 w-10 rounded-full bg-[#EAEEEF] flex justify-center items-center cursor-pointer'>
          <Linkedin strokeWidth={1} size={20} />
        </div>
        <div className='h-10 w-10 rounded-full bg-[#EAEEEF] flex justify-center items-center cursor-pointer'>
          <Facebook strokeWidth={1} size={20} />
        </div>
        <div className='h-10 w-10 rounded-full bg-[#EAEEEF] flex justify-center items-center cursor-pointer'>
          <Twitter strokeWidth={1} size={20} />
        </div>
      </article>
    </div>
  );
};
export default CompanyInfo;
