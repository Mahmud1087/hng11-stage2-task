const FilterOption = ({ text, color, name, checked }) => {
  return (
    <label
      htmlFor={name}
      className='px-4 py-1 flex items-center gap-2 rounded-full bg-[#EAEEEF] w-fit'
    >
      <input
        type='radio'
        name='category'
        id={name}
        checked={checked}
        className='accent-[#BF5428] w-4 h-4 cursor-pointer'
      />
      <p className={`font-semibold `}>{text}</p>
    </label>
  );
};
export default FilterOption;
