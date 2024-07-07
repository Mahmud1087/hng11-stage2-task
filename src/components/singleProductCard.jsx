import Image from 'next/image';

const SingleProductCard = ({ img, name, price, prevPrice }) => {
  return (
    <article className=''>
      <aside className=''>
        <Image src={img} alt='product image' />
        <h4>{name}</h4>
        <div>
          <h2>${price}</h2>
          <p>${prevPrice}</p>
        </div>
      </aside>
    </article>
  );
};
export default SingleProductCard;
