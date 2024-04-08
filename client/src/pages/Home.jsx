// import { useTranslation } from 'react-i18next';
import Card from '@/components/Card';
import Section from '@/components/Section';
import ActionButton from '@/components/ActionButton';


export default function Home() {
  // const [t] = useTranslation();

  return (
    <>
      <img
        className='w-full h-[400px] shadow'
        src='https://images.unsplash.com/photo-1711658364398-b7b697baf4e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
      />
      <Section>
        <p className='flex justify-center'>
          Aquí irá una frase que irá cambiando con datos relevantes que tenemos
        </p>
      </Section>
      <Section>
        <Card header='Educacion for children plans' img='https://images.unsplash.com/photo-1712371963569-84c6f650a558?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' imgName='' />
        <Card header='Card 2' img='https://plus.unsplash.com/premium_photo-1664970900224-6c67df73191a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' imgName='' />
        <Card header='Card 3' img='https://images.unsplash.com/photo-1712004257253-90705c255214?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' imgName='' />
        <Card header='Card 4' img='https://plus.unsplash.com/premium_photo-1674677530889-72b7cf7f1450?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' imgName='' />
      </Section>
      <Section>
        <img src='https://images.unsplash.com/photo-1711658364398-b7b697baf4e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D shadow' alt='home-img' className='w-[550px] h-[240px] shadow' />

        <div
          className='w-[550px] h-[max] flex flex-col
          gap-3 '
        > 
        <ActionButton>BECOME A PARTNER</ActionButton>
      
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque ac vitae
            malesuada integer in commodo magnis maecenas. Proin leo interdum
            amet nisi mauris augue ipsum nunc faucibus. Nullam nunc elit nisi
            tortor gravida sit sit auctor urna. Eget mauris egestas elementum
            ut. Congue fringilla et sit turpis rhoncus neque. Etiam in purus
            nullam risus quam pretium consectetur. Tempor curabitur quis sit
            vel. Turpis urna in tristique ut et duis nisl. Leo ut egestas nec
            tortor pellentesque.
          </p>
        </div>
      </Section>
    </>
  );
}
