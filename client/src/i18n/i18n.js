import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    default: 'es',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    resources: {
      en: {
        translation: {
          home: {
            section_1: {
              text_1:
                'Are you a company committed to eradicating social inequality?',
              text_2:
                'Are you looking for a project that helps Indian boys and girls have a decent life?',
              text_3:
                'Meraparivar develops its projects in the rural community of Gurgaon, south of New Delhi. Our initiatives aim to improve the quality of life of this community, through educational projects for young people and boys and girls. In addition, we offer programs to end hunger in the most humble communities and promote gender equality.',
            },
          },
          carousel_quotes: {
            q_1: 'Since 2014, our interventions with stakeholders and key allies in local communities have reached 7 states and 18 districts throughout India.',
            q_2: '+2.5 million children´s lives positively impacted through education.',
            q_3: '+ 12.45 million benefited from surplus vegetable and cooked food distribution',
            q_4: '2 million government school children with clean water facilities in rural areas',
            q_5: '+ 12.45 million benefited surplus Vegetable & cook Food distribution',
          },
          cards: {
            c_1: {
              header: 'Education for children',
              label: 'Program',
              hover:
                'Early literacy is key to educational and economic opportunities in the global economy, but 100s of millions of children are being left behind. They just need the opportunity.',
              text: 'To build a better future for the children of Gurgaon.',
            },
            c_2: {
              header: 'Women Empowerment',
              label: 'Program',
              hover:
                'At the Women’s Education Project’s Leadership and Financial Independence program, vibrant, young women from underserved communities are empowered to become self-sufficient, robust, enlightened, and adept leaders, contributors',
              text: 'To help the community girls and young ladies became entrepreneurs.',
            },
            c_3: {
              header: 'IT WILL BE',
              label: 'Partner',
              hover:
                'Faced with the great challenges posed by technology, respect for digital rights is a key element in the path towards a humanistic digitalization.',
              text: 'This Spanish NGO collaborates by helping the digitalization of our educational project.',
            },
            c_4: {
              header: 'Central Government',
              label: 'Partner',
              hover:
                'Our food bank is backed by the Central Government of India, collaborating to fight hunger. Together, we make it possible to feed those in need. Join us in this mission to provide hope and support to vulnerable communities in India.',
              text: 'We have an agreement with The Central Government of India, which helps in the food bank initiative.',
            },
            read_more: 'Read More',
          },
          about_us: {
            header: 'ABOUT US',
            dd_1: 'Our Mission',
            dd_2: 'Our Team',
            dd_3: 'Our Events',
          },
          what_we_do: {
            header: 'WHAT WE DO',
            dd_1: 'Education for children',
            dd_2: 'Youth vocational & skills training',
            dd_3: 'Girl child education',
            dd_4: 'Advocacy & Community Assistance',
            dd_5: 'Anti Human Traffic',
            dd_6: 'Women Empowernment',
            dd_7: 'Swabhiman Project',
            body: {
              title: 'EDUCATION FOR CHILDREN PLANS',
              text_1:
                'Mera Parivar is committed to education as a way to build a better future for the children of the rural community of Gurgaon.',
              text_2: 'What type of projects do we promote?',
              text_3:
                'Educational programs for out-of-school minors between 3 and 17 years old.',
              text_4:
                'Remedial class programs for minors in public schools, due to the inequality it represents with respect to private education.',
              text_5:
                'How many children and teenagers currently benefit from these programs?',
              text_6:
                'Currently, we run 3 schools with 1,250 boys and girls whom you can help change their luck; we hope to continue increasing this number.',
              text_7: 'How can you do it?',
              text_8:
                'It is very simple, if you are an individual contributing a small amount of money and if you are an organization, contact us and we will tell you the ways you can collaborate.',
              text_9: 'A small gesture can make a big difference!',
            },
          },
          get_involved: {
            header: 'GET INVOLVED',
            dd_1: 'Become a volunteer',
            dd_2: 'Become a Partner',
            dd_3: 'Work with us',
            body: {
              title: 'BECOME A PARTNER',
              text_1:
                'Are you a company committed to eradicating social inequality?',
              text_2:
                'Are you looking for a project that helps Indian boys and girls have a decent life?',
              text_3: {
                span: 'Mera Parivar',
                p: ' develops its projects in the rural community of Gurgaon, south of New Delhi. Our initiatives aim to improve the quality of life of this community, through educational projects for young people and boys and girls. In addition, we offer programs to end hunger in the most humble communities and promote gender equality.',
              },
              text_4:
                'Your organization can collaborate with Meraparivar projects in different ways:',
              text_5: {
                span: ' Financial contributions:',
                p: ' through a one-time donation to promote one of the existing projects or through periodic donations.',
              },
              text_6: {
                span: ' Material donations:',
                p: ' Meraparivar is committed to the education of the most disadvantaged boys and girls, so you can help ensure that the facilities adapt to the training needs..',
              },
              text_7: {
                span: ' Food bank:',
                p: 'one of Meraparivars main objectives is to alleviate hunger in rural areas of India. If you want to establish an agreement to supply food for the most humble areas, it is a good way to collaborate.',
              },
            },
            button: 'BECOME A PARTNER',
          },
          donate: {
            header: 'DONATE',
            button: 'NOW',
          },

          contact_us: {
            header: 'Contact Us',
          },
          forms: {
            name: 'Name',
            email: 'Email',
            send: 'SEND',
            personal_information: 'Personal Information:',
            message_sent: 'Message sent',
            message: 'Message',
            // BECOME A PARTNER
            company: 'Company',
            company_role: 'Company Role',
            donation_type: 'Select donation type',
            money: 'Money',
            food: 'Food',
            material: 'Material',
            others: 'Others',
            // DONATE
            select_currency: 'Select Currency:',
            month: 'Would you like to make this donatinon every month?',
            yes: 'Yes',
            no: 'No',
            // CONTACT
            purpose: 'Consultation purpose',
            subject: 'Subject',
            questions: 'Questions and suggestions',
            projects: 'Projects',
            individual: 'Individual donations',
            partner_agreements: 'Partner agreements',
          },
          footer: {
            location: 'Location',
          },
        },
      },

      // ================== ESPAÑOL ===============
      es: {
        translation: {
          home: {
            section_1: {
              text_1:
                '¿Eres una empresa comprometida en erradicar la desigualdad social?',
              text_2:
                '¿Estás buscando un proyecto que ayude a niños y niñas indios a tener una vida digna?',
              text_3:
                'Meraparivar desarrolla sus proyectos en la comunidad rural de Gurgaon, al sur de Nueva Delhi. Nuestras iniciativas tienen como objetivo mejorar la calidad de vida de esta comunidad, a través de proyectos educativos para jóvenes y niños. Además, ofrecemos programas para acabar con el hambre en las comunidades más humildes y promover la igualdad de género.',
            },
          },
          carousel_quotes: {
            q_1: 'Desde 2014, nuestras intervenciones con partes interesadas y aliados clave en las comunidades locales han alcanzado 7 estados y 18 distritos en toda India.',
            q_2: 'Más de 2.5 millones de vidas de niños impactadas positivamente a través de la educación.',
            q_3: 'Más de 12.45 millones se han beneficiado de la distribución de vegetales excedentes y alimentos cocidos.',
            q_4: '2 millones de niños de escuelas gubernamentales con instalaciones de agua limpia en áreas rurales.',
            q_5: 'Más de 12.45 millones se han beneficiado de la distribución de excedentes de verduras y alimentos cocidos.',
          },
          cards: {
            c_1: {
              header: 'Educación infantil',
              label: 'Programa',
              hover:
                'La alfabetización temprana es clave para las oportunidades educativas y económicas en la economía global, pero cientos de millones de niños se están quedando atrás. Solo necesitan la oportunidad.',
              text: 'Trabajamos para construir un futuro mejor para los jovenes de Gurgaon.',
            },
            c_2: {
              header: 'Mujeres empoderadas',
              label: 'Programa',
              hover:
                'En el programa de Liderazgo e Independencia Financiera del Proyecto de Educación de la Mujer, mujeres jóvenes y vibrantes de comunidades desfavorecidas son empoderadas para convertirse en líderes, contribuyentes autónomas, iluminadas y expertas.',
              text: 'Ayudamos a las niñas y jóvenes de la comunidad a ser emprendedoras.',
            },
            c_3: {
              header: 'IT WILL BE',
              label: 'Patrocinadores',
              hover:
                'Ante los grandes desafíos que plantea la tecnología, el respeto de los derechos digitales es un elemento clave en el camino hacia una digitalización humanista.',
              text: 'ONG española que nos ayuda a la digitalización de nuestro proyecto educativo.',
            },
            c_4: {
              header: 'Gobierno Central',
              label: 'Patrocinadores',
              hover:
                'Nuestro banco de alimentos cuenta con el respaldo del Gobierno Central de India, colaborando para combatir el hambre. Juntos, hacemos posible alimentar a los necesitados. Únete a nosotros en esta misión para brindar esperanza y apoyo a las comunidades vulnerables de India.',
              text: 'Tenemos un acuerdo con el Gobierno Central de India, que ayuda en la iniciativa del banco de alimentos.',
            },
            read_more: 'Leer Más',
          },
          about_us: {
            header: 'QUÉNES SOMOS',
            dd_1: 'Nuestra Misión',
            dd_2: 'Nuestro Equipo',
            dd_3: 'Nuestros Eventos',
          },
          what_we_do: {
            header: 'QUÉ HACEMOS',
            dd_1: 'Educación infantil',
            dd_2: 'Formación vocacional y habilidades para jóvenes',
            dd_3: 'Educación de niñas',
            dd_4: 'Defensa y asistencia a la comunidad',
            dd_5: 'Anti-tráfico Humano',
            dd_6: 'Empoderamiento Femenino',
            dd_7: 'Proyecto Swabhiman',
            body: {
              title: 'PLANES DE EDUCACIÓN INFANTIL',
              text_1:
                'Mera Parivar está comprometido con la educación como una forma de construir un futuro mejor para los niños de la comunidad rural de Gurgaon.',
              text_2: '¿Qué tipo de proyectos promovemos?',
              text_3:
                'Programas educativos para menores fuera de la escuela entre 3 y 17 años de edad.',
              text_4:
                'Programas de clases de refuerzo para menores en escuelas públicas, debido a la desigualdad que representa con respecto a la educación privada.',
              text_5:
                '¿Cuántos niños y adolescentes se benefician actualmente de estos programas?',
              text_6:
                'Actualmente, gestionamos 3 escuelas con 1,250 niños y niñas a quienes puedes ayudar a cambiar su suerte; esperamos seguir aumentando este número.',
              text_7: '¿Cómo puedes hacerlo?',
              text_8:
                'Es muy simple, si eres un individuo contribuyendo con una pequeña cantidad de dinero y si eres una organización, contáctanos y te diremos las formas en que puedes colaborar.',
              text_9: '¡Un pequeño gesto puede marcar una gran diferencia!',
            },
          },
          get_involved: {
            header: 'COLABORA',
            dd_1: 'Hazte voluntario',
            dd_2: 'Hazte patrocinador',
            dd_3: 'Trabaja con nosotros',
            button: 'COLABORA AHORA',
            body: {
              title: 'HAZTE COLABORADOR',
              text_1:
                '¿Eres una empresa comprometida en erradicar la desigualdad social?',
              text_2:
                '¿Estás buscando un proyecto que ayude a niños y niñas indios a tener una vida digna?',
              text_3: {
                span: 'Meraparivar',
                p: ' desarrolla sus proyectos en la comunidad rural de Gurgaon, al sur de Nueva Delhi. Nuestras iniciativas tienen como objetivo mejorar la calidad de vida de esta comunidad, a través de proyectos educativos para jóvenes y niños. Además, ofrecemos programas para acabar con el hambre en las comunidades más humildes y promover la igualdad de género.',
              },
              text_4:
                'Tu organización puede colaborar con los proyectos de Meraparivar de diferentes maneras:',
              text_5: {
                span: ' Contribuciones financieras:',
                p: ' a través de una donación única para promover uno de los proyectos existentes o mediante donaciones periódicas.',
              },
              text_6: {
                span: ' Donaciones de material:',
                p: ' Meraparivar está comprometido con la educación de los niños y niñas más desfavorecidos, por lo que puedes ayudar a asegurar que las instalaciones se adapten a las necesidades de formación.',
              },
              text_7: {
                span: ' Banco de alimentos:',
                p: 'uno de los principales objetivos de Meraparivar es aliviar el hambre en las zonas rurales de India. Si deseas establecer un acuerdo para suministrar alimentos a las áreas más humildes, es una buena manera de colaborar.',
              },
            },
          },
          donate: {
            header: 'DONA',
            button: 'AHORA',
          },

          contact_us: {
            header: 'Contacto',
          },
          forms: {
            name: 'Nombre',
            email: 'Correo electrónico',
            send: 'ENVIAR',
            personal_information: 'Información Personal:',
            message_sent: 'Mensaje Enviado',
            message: 'Mensaje',
            required_field: 'Campo requerido',
            // CONVERTIRSE EN UN SOCIO
            company: 'Empresa',
            company_role: 'Cargo en la Empresa',
            donation_type: 'Seleccionar tipo de donación',
            money: 'Dinero',
            food: 'Alimentos',
            material: 'Material',
            others: 'Otros',
            // DONAR
            select_currency: 'Seleccionar Moneda',
            month: '¿Te gustaría hacer esta donación cada mes?',
            yes: 'Sí',
            no: 'No',
            // CONTACTO
            purpose: 'Propósito de la Consulta',
            subject: 'Asunto',
            questions: 'Preguntas y Sugerencias',
            projects: 'Proyectos',
            individual: 'Donaciones Individuales',
            partner_agreements: 'Acuerdos de Colaboración',
          },
          footer: {
            location: 'Localización',
          },
        },
      },
    },
  });
