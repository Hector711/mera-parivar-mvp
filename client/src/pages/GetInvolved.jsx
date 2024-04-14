//import { useTranslation } from 'react-i18next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import ButtonPartner from '@/components/ButtonPartner';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { postBenefactors } from '@/service/partner';
import card_1 from '../assets/card_1.jpeg';
import card_2 from '../assets/card_2.jpeg';
import CarouselImages from '../components/CarouselImages';
// import FormContact from '../components/FormContact';
import img_become from '../assets/img_become.jpg';
import carousel_1 from '../assets/carousel_1.jpg';
import carousel_2 from '../assets/carousel_2.jpg';
import carousel_3 from '../assets/carousel_3.jpg';
import carousel_4 from '../assets/carousel_4.jpg';
import carousel_5 from '../assets/carousel_5.jpg';

const caroursel_imgs = [
  {
    src: carousel_1,
    alt: '1',
  },
  {
    src: carousel_2,
    alt: '2',
  },
  {
    src: carousel_3,
    alt: '3',
  },
  {
    src: carousel_4,
    alt: '4',
  },
  {
    src: carousel_5,
    alt: '5',
  },
];

export default function GetInvolved() {
  //const [t] = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationKey: 'partner',
    mutationFn: postBenefactors,
  });

  const onSubmit = async data => {
    await mutate(data);
  };

  const donationTypes = [
    { IDdonation_type: 1, donation_name: 'Dinero' },
    { IDdonation_type: 2, donation_name: 'Comida' },
    { IDdonation_type: 3, donation_name: 'Material' },
    { IDdonation_type: 4, donation_name: 'Otros' },
  ];

  return (
    <>
      <CarouselImages images={caroursel_imgs} />
      {/* BECOME A PARTNER */}
      <Section
        tail='flex flex-col justify-center items-center gap-7'
        id='partner-section'
      >
        <div className='flex flex-col gap-6 justify-center items-center'>
          <h1 className='small'>BECOME A PARTNER</h1>
          {/* ORIGINAL */}
          {/* <p>Are you a company committed to eradicating social inequality?</p>
        <p>
        Are you looking for a project that helps Indian boys and girls have a
        decent life?
      </p> */}
          {/* PROPUESTA 1 */}
          {/* <p className='bold flex justify-center m-1'>
          Are you a company committed to eradicating social inequality?
          </p>
          <p className='bold flex justify-center mb-5'>
          Are you looking for a project that helps Indian boys and girls have a
          decent life?
        </p> */}
          {/* PROPUESTA 2 */}
          <h3 className='flex justify-center '>
            Are you a company committed to eradicating social inequality?
          </h3>
          <h3 className='flex justify-center text-center'>
            Are you looking for a project that helps Indian boys and girls have
            a decent life?
          </h3>
          <p>
            <span className='bold'>Meraparivar</span> develops its projects in
            the rural community of <span className='bold'> Gurgaon</span>, south
            of New Delhi. Our initiatives aim to improve the quality of life of
            this community, through educational projects for young people and
            boys and girls. In addition, we offer programs to end hunger in the
            most humble communities and promote gender equality.
          </p>

          <ul>
            <p>
              <span className='bold'>Your organization </span> can collaborate
              with Meraparivar projects in different ways:
            </p>
            <li>
              &#8226; <span className='bold'>Financial contributions: </span>
              through a one-time donation to promote one of the existing
              projects or through periodic donations.
            </li>
            <li>
              &#8226; <span className='bold'>Material donations:</span>{' '}
              Meraparivar is committed to the education of the most
              disadvantaged boys and girls, so you can help ensure that the
              facilities adapt to the training needs.
            </li>
            <li>
              &#8226; <span className='bold'>Food bank:</span> one of
              Meraparivar's main objectives is to alleviate hunger in rural
              areas of India. If you want to establish an agreement to supply
              food for the most humble areas, it is a good way to collaborate.
            </li>
          </ul>
        </div>
        <ButtonPartner />
      </Section>

      {/*  CARDS AND IMAGE */}
      <Section tail='flex justify-between gap-20'>
        <img
          src={img_become}
          alt='image logos'
          className='w-[588px] h-[434px]'
        />
        <div className='flex justify-between w-[50%] '>
          <Card
            header='Education for children'
            img={card_1}
            imgName=''
            label='Program'
            hoverCardText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime in molestiae qui?'
            link='/'
            cardText='To build a better future for the children of Gurgaon.'
          />
          <Card
            header='Women Empowerment'
            img={card_2}
            imgName=''
            label='Program'
            hoverCardText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime in molestiae qui?'
            link='/'
            cardText='To help the community girls and young ladies became entrepreneurs.'
          />
        </div>
      </Section>

      {/* FORMULARIO BECOME A PARTNER */}
      <Section tail='flex justify-center w-full'>
          <form
            action='submit'
            id='form-get-involved'
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type='text'
              id='name'
              {...register('name')}
              placeholder='Name'
            />
            <input
              type='email'
              id='email'
              {...register('email')}
              placeholder='Email'
            />
            <input
              type='text'
              id='company_name'
              {...register('company_name')}
              placeholder='Company'
            />
            <input
              type='text'
              id='company_role'
              {...register('company_role')}
              placeholder='Company Role'
            />

            <select
              type='number'
              id='IDdonation_type'
              {...register('IDdonation_type')}
            >
              {donationTypes.map(type => (
                <option key={type.IDdonation_type} value={type.IDdonation_type}>
                  {type.donation_name}{' '}
                  {/* Assuming `name` is the field you want to display */}
                </option>
              ))}
            </select>

            <textarea
              id='message'
              {...register('message')}
              placeholder='Message'
            />

            <button type='submit' className='button-send' id='send'>
              Send
            </button>
          </form>
      </Section>
    </>
  );
}
