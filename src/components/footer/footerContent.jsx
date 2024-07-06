const FooterContent = ({ data, title }) => {
  return (
    <div className='text-gray-prim'>
      <h1 className='text-xl font-bold py-2'>{title}</h1>
      <div>
        {data.map((category) => {
          return (
            <p
              key={category.id}
              className='mt-2 text-gray-prim text-[0.94rem] font-medium cursor-pointer hover:text-green-prim hover:translate-x-4 transition-all'
            >
              {category.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default FooterContent;
