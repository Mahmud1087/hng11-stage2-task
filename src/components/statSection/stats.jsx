import Container from '../container';
import { stats } from './data';
import { Heading, SingleStat } from './main';

const Stats = () => {
  return (
    <div className='bg-[#FEFAFB] pt-12 pb-28'>
      <Container>
        <Heading />
        <div className='grid grid-cols-4 gap-12'>
          {stats.map((stat) => {
            return <SingleStat key={stat.desc} {...stat} />;
          })}
        </div>
      </Container>
    </div>
  );
};
export default Stats;
