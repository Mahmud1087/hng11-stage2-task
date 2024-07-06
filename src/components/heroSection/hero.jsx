import { Container } from '../main';
import { HeroButton, HeroText } from '../heroSection/main';
import Image from 'next/image';
import heroImg from '../../../public/hero-img.png';

const Hero = () => {
  return (
    <section className='bg-hero-bg bg-cover bg-no-repeat h-[calc(100vh-4rem)]'>
      <Container className='flex items-center gap-6 h-full'>
        <div className='w-[55%] h-full flex flex-col justify-center'>
          <HeroText />
          <HeroButton />
        </div>
        <aside className='w-[45%] h-full flex items-center justify-center'>
          <Image src={heroImg} alt='Chair Image' className='w-full h-[90%]' />
        </aside>
      </Container>
    </section>
  );
};
export default Hero;
