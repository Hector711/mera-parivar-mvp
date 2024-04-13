// import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';
import CallToAction from '@/components/CallToAction';
import ButtonDonate from '@/components/ButtonDonate'
import ButtonPartner from '@/components/ButtonPartner';
import CarouselImages from '@/components/CarouselImages';




export default function WhatWeDo() {
  // const [t] = useTranslation();

  return (
    <>
      <CarouselImages />
      {/* EDUCATION FOR CHILDREN PLANS */}
      <Section tail='flex flex-col gap-4' id='education-section'>
        <h1 className='small'>EDUCATION FOR CHILDREN PLANS</h1>
        <p>
          Meraparivar apuesta por la educación como forma para construir un
          futuro mejor para los niños y niñas de la comunidad rural de Gurgaon.
        </p>
        <ul>
          <p className='bold'>¿Qué tipo de proyectos impulsa?</p>
          <li>
            &#8226; Programas educativos para menores no escolarizados de entre
            3 y 17 años.
          </li>
          <li>
            &#8226; Programas de clases de refuerzo para menores de escuelas
            públicas, por la desigualdad que supone,con respecto a la educación
            privada.
          </li>
        </ul>
        <ul>
          <p className='bold'>
            ¿Cuántos menores se benefician de estos programas actualmente?
          </p>
          <li>
            &#8226; Actualmente, dirigimos 3 escuelas con 1.250 niños y niñas a
            los que puedes ayudar a cambiar su suerte, esta cifra esperamos
            seguir incrementándola.
          </li>
        </ul>
        <ul>
          <p className='bold'>¿Cómo puedes hacerlo?</p>
          <li>
            &#8226; Es muy sencillo, si eres un particular aportando una pequeña
            cantidad de dinero y si eres una organización, ponte en contacto con
            nosotros y te diremos las formas que tienes de colaborar.
          </li>
        </ul>
        <p>Un pequeño gesto puede suponer un gran cambio.</p>
        <div className='flex justify-center gap-10'>
          <ButtonDonate />
          <ButtonPartner />
        </div>
      </Section>
    </>
  );
}
