import { Hero } from '@/components/heroSection/main';
import { PromotedProducts } from '@/components/promotedProducts/main';
import { Stats } from '@/components/statSection/main';
import Image from 'next/image';

export default function Home() {
  return (
    <section className=''>
      <Hero />
      <PromotedProducts />
      <Stats />
    </section>
  );
}
