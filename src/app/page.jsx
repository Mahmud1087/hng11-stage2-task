import FeaturedProducts from '@/components/featuredProducts/featuredProducts';
import { Hero } from '@/components/heroSection/main';
import { PromotedProducts } from '@/components/promotedProducts/main';
import { Stats } from '@/components/statSection/main';
import SubFooter from '@/components/subFooter';
import TrendingProducts from '@/components/trendingProducts/trendingProducts';

export default function Home() {
  return (
    <section className=''>
      <Hero />
      <PromotedProducts />
      <Stats />
      <FeaturedProducts />
      <TrendingProducts />
      <SubFooter />
    </section>
  );
}
