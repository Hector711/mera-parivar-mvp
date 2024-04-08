// import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';

export default function Donate() {
  // const [t] = useTranslation();

  return (
    <>
      <div className='w-[100%] h-[264px] bg-slate-400 flex p-[5rem]'>
        {/* <img src='' alt=''  /> */}
        <div className='flex flex-col justify-start align-top'>
          <h3>DONATE NOW</h3>
          <p>
            Thanks to your contribution, thousands of people will have a better
            life.
          </p>
          <p>
            Let's continue building together a more just and supportive world!
          </p>
        </div>
      </div>
      <Section>
        <div className='flex gap-14'>
          <div className='w-[400px]'>
            <h5>DATOS</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pellentesque ac vitae
              malesuada integer in commodo magnis maecenas. Proin leo interdum
              amet nisi mauris augue ipsum nunc faucibus. Nullam nunc elit nisi
              tortor gravida sit sit auctor urna. Eget mauris egestas elementum
              ut. Congue fringilla et sit turpis rhoncus neque.
            </p>
            <p>
              Etiam in purus nullam risus quam pretium consectetur. Tempor
              curabitur quis sit vel. Turpis urna in tristique ut et duis nisl.
              Leo ut egestas nec tortor pellentesque.
            </p>
          </div>
          <div className='w-[600px] h-[300px] bg-slate-400'> DONATE </div>
        </div>
      </Section>
    </>
  );
}
