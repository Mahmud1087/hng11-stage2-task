const Newsletter = () => {
  return (
    <div>
      <h1 className='text-xl font-bold py-2'>Newsletter</h1>
      <form className='bg-[#EAEEEF] h-12 flex justify-between items-center'>
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
