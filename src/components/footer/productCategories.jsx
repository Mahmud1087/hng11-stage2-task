import { productCategories } from './data';
import FooterContent from './footerContent';

const ProductCategories = () => {
  return (
    <FooterContent title={'Product Categories'} data={productCategories} />
  );
};
export default ProductCategories;
