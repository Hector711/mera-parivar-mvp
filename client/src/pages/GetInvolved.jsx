// import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import HorizontalScroll from '../components/HorizontalScroll';

const horizontalScrollImages = [
  {
    src: 'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '1',
  },
  {
    src: 'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '2',
  },
  {
    src: 'https://images.unsplash.com/photo-1712312938983-676e2cdbb9d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '3',
  },
  {
    src: 'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '4',
  },
  {
    src: 'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '5',
  },
  {
    src: 'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '6',
  },
];

export default function GetInvolved() {
  // const [t] = useTranslation();
  return (
    <>
      <HorizontalScroll images={horizontalScrollImages} />
      <Section>
        <div>
          <h3>BECOME A PARTNER</h3>
          <p>
            ¿Eres una empresa comprometida con erradicar la desigualdad social?
            ¿Estás buscando un proyecto que contribuya a que los niños y niñas
            de la India tengan una vida digna?
          </p>
          <p>
            Meraparivar desarrolla sus proyectos en la comunidad rural de
            Gurgaon, al Sur de Nueva Dheli, sus iniciativas tienen como objetivo
            mejorar la calidad de vida de esta comunidad, a través de proyectos
            educativos para jóvenes, niños y niñas. Además, ofrece programas
            para acabar con el hambre en las comunidades más humildes y fomentar
            la igualdad de género.
          </p>
          <p>
            Tu organización puede colaborar con los proyectos de Meraparivar, de
            diferentes formas:
          </p>

          <ul>
            <li>
              Aportaciones económicas: a través de una donación puntual para
              impulsar alguno de los proyectos existentes o mediante donativos
              periódicos.
            </li>
            <li>
              Donaciones de material: Meraparivar apuesta por la educación de
              los niños y niñas más desfavorecidos, por lo que puedes contribuir
              a que las instalaciones se adecuen a las necesidades de formación.
            </li>
            <li>
              Banco de alimentos: uno de los principales objetivos de
              Meraparivar, es paliar el hambre en las zonas rurales de la India,
              si quieres establecer un acuerdo para suministrar comida, para las
              zonas más humildes, es una buena manera de colaborar.
            </li>
          </ul>
        </div>
      </Section>
      <Section>
        <form action='submit'>
          <input type='text' id='name' name='name' placeholder='Name' />
          <input
            type='text'
            id='company'
            name='company'
            placeholder='Company'
          />
          <input
            type='text'
            id='companyrole'
            name='companyrole'
            placeholder='Company Role'
          />
          <select id='type-donation'>
            <option value=''  selected>
              Type of donation
            </option>
            <option value='opcion1'>Opción 1</option>
            <option value='opcion2'>Opción 2</option>
            <option value='opcion3'>Opción 3</option>
          </select>

          <input
            type='text'
            id='form-message'
            name='message'
            placeholder='Message'
          />
          <button type='submit'>Submit</button>
        </form>
      </Section>
    </>
  );
}
