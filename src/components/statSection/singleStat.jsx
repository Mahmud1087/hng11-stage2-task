const SingleStat = ({ number, sign, desc }) => {
  return (
    <div className='flex flex-col gap-1 items-center justify-center text-gray-prim text-center'>
      <aside className='flex'>
        <h1 className='text-5xl font-bold'>{number}</h1>
        <p className='text-lg font-bold'>{sign}</p>
      </aside>
      <p className='text-lg'>{desc}</p>
    </div>
  );
};
export default SingleStat;
