const Newsletter = () => {
  return (
    <div>
      <h1 className='hidden text-xl font-bold py-2'>Newsletter</h1>
      <div className='text-gray-prim mb-5 sm:block'>
        <h1 className='text-xl font-bold'>Join our newsletter</h1>
        <p>Get connected to regular updates</p>
      </div>
      <form className='bg-[#EAEEEF] h-12 flex justify-between items-center rounded-l-lg'>
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
    </div>
  );
};
export default Newsletter;
