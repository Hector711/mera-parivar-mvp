import { useTranslation } from 'react-i18next';

export default function Donate() {
  const [t] = useTranslation();

  return (
    <>
      <h1>{t('donate')}</h1>

      <h3 className=' flex w-[600px] text-center m-[3rem]'>Become a Partner</h3>

      <p>
        ¿Eres una empresa comprometida con erradicar la desigualdad social?
        ¿Estás buscando un proyecto que contribuya a que los niños y niñas de la
        India tengan una vida digna? Meraparivar desarrolla sus proyectos en la
        comunidad rural de Gurgaon, al Sur de Nueva Dheli, sus iniciativas
        tienen como objetivo mejorar la calidad de vida de esta comunidad, a
        través de proyectos educativos para jóvenes, niños y niñas. Además,
        ofrece programas para acabar con el hambre en las comunidades más
        humildes y fomentar la igualdad de género. Tu organización puede
        colaborar con los proyectos de Meraparivar, de diferentes formas:
        Aportaciones económicas: a través de una donación puntual para impulsar
        alguno de los proyectos existentes o mediante donativos periódicos.
        Donaciones de material: Meraparivar apuesta por la educación de los
        niños y niñas más desfavorecidos, por lo que puedes contribuir a que las
        instalaciones se adecuen a las necesidades de formación. Banco de
        alimentos: uno de los principales objetivos de Meraparivar, es paliar el
        hambre en las zonas rurales de la India, si quieres establecer un
        acuerdo para suministrar comida, para las zonas más humildes, es una
        buena manera de colaborar.
      </p>

      <form action='submit'>
        <input type='text' id='name' name='name' />
        <input type='text' id='company' name='company' />
        <input type='text' id='companyrole' name='companyrole' />
        <input type='text' id='username' name='username' />
        <input type='text' id='username' name='username' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
      </form>
    </>
  );
}
