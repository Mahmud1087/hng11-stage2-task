import FeaturedProducts from '@/components/featuredProducts/featuredProducts';
import { Hero } from '@/components/heroSection/main';
import { PromotedProducts } from '@/components/promotedProducts/main';
import { Stats } from '@/components/statSection/main';
import SubFooter from '@/components/subFooter';

export default function Home() {
  return (
    <section className=''>
      <Hero />
      <PromotedProducts />
      <Stats />
      <FeaturedProducts />
      <SubFooter />
    </section>
  );
}
