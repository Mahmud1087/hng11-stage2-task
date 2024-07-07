// import { products } from '@/components/productsData';

const SingleProductPage = ({ params, id }) => {
  const prodName = params.productId.split('%20').join(' ');

  // const productDetail = products.find(prod=> prod.id === id)

  return <div>SingleProductPage: {prodName}</div>;
};
export default SingleProductPage;
