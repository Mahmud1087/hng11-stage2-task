import Image from 'next/image';
import img from '../../public/img.png';
import Container from './container';

const SubFooter = () => {
  return (
    <Container className='flex gap-6 my-8 items-center'>
      <section className='w-2/5'>
        <h1 className='text-5xl font-bold text-gray-prim mb-3'>
          Subscribe To Our Newsletter
        </h1>
        <p className='text-lg font-medium text-gray-prim mb-3'>
          Subscribe to our email newsletter today to receive update on the
          latest news
        </p>
        <form className='bg-[#EAEEEF] h-10 flex justify-between items-center w-3/4'>
          <label htmlFor='subscribe'>
            <input
              type='email'
              placeholder='your email'
              className='text-gray-prim text-[0.94rem]  border-none bg-transparent px-4 placeholder:text-gray-prim focus:outline-none focus:text-gray-prim focus:text-[0.94rem]'
            />
          </label>
          <button
            type='submit'
            className='capitalize text-white bg-green-sec h-full font-medium px-5 rounded-md'
          >
            subscribe
          </button>
        </form>
      </section>
      <aside className='w-3/5'>
        <Image src={img} alt='Dining Table' className='w-full' />
      </aside>
    </Container>
  );
};
export default SubFooter;
