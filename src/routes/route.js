import { createRouter, createWebHistory } from 'vue-router'


import VisionPage from '../js/components/pages/Home/vision/visionpage.vue'
import HomePage from '../js/components/pages/Home/Page_home.vue'
import MissionPage from '../js/components/pages/Home/mission/missionpage.vue'
import AboutusExpend from '../js/components/pages/Home/Aboutus/aboutus-expend.vue'
import GestionPage from '../js/components/pages/Home/gestion/gestion.vue'
import OrgaPage from '../js/components/pages/Home/organigrammes/organigrammes.vue'
import RapportPage from '../js/components/pages/Home/Rapport/Rapport.vue'
import HistoirePage from '../js/components/pages/Home/histoire/histoire.vue'
import ProgrammesPage from '../js/components/pages/programmes/programmes.vue'
import EducationPrecoce from '../js/components/pages/programmes/education_precoce/education_precoce.vue'
import SpecialisationPage from '../js/components/pages/programmes/spécialisation/spécialisation.vue'
import IntegrationPage from '../js/components/pages/programmes/integration/integration.vue'
import ImplantsPage from '../js/components/pages/programmes/implants cochléaire/implants.vue'
import ServicesPage from '../js/components/pages/programmes/services/services.vue'
import FormationsPage from '../js/components/pages/programmes/formations/formations.vue'
import DepistagePage from '../js/components/pages/programmes/depistage/depistage.vue'
import ServicesextPage from '../js/components/pages/programmes/services exterieurs/servicesext.vue'
import AccompagnementPage from '../js/components/pages/competences/accompagnement/accompagnement.vue'
import CompetencesPage from '../js/components/pages/competences/competences.vue'
import DonPage from '../js/components/pages/Don/Don.vue'
import AssistancePage from '../js/components/pages/competences/assistance/assistance.vue'
import NewsDetail from '../js/components/pages/Home/news/NewsDetail.vue'
import NewsSection from "../js/components/pages/Home/news/news.vue"
import AudiologiePage from '../js/components/pages/competences/audiologie/audiologie.vue'
import DepistageCompetence from '../js/components/pages/competences/depistage/depistage.vue'
import LogopediePage from '../js/components/pages/competences/logopedie/logopedie.vue'
import MedecinsPage from '../js/components/pages/competences/medecins/medecins.vue'
import PsychomotricitePage from '../js/components/pages/competences/psychomotricite/psychomotricite.vue'
import PartenairesPage from '../js/components/pages/collaborations/Partenaires/partenaires.vue'
import OtherCollabPage from '../js/components/pages/collaborations/OtherCollab/OtherCollab.vue'
import RayonnementPage from '../js/components/pages/collaborations/Rayonnement/Rayonnement.vue'
import SurditePage from '../js/components/pages/documentation/surdite/surdite.vue'
import ResearchPage from '../js/components/pages/competences/recherche/recherche.vue'
import ContactPage from '../js/components/pages/contact/contact.vue'
import PrivacyPage from '../js/components/footer/privacy.vue'
import LegalPage from '../js/components/footer/legal.vue'


const router = createRouter({

    
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 }
      },
    routes: [
      {
        path: '/Vision',
        name: 'VisionPage',
        component: VisionPage,

        meta: {
          title: 'Statut et Vision | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Le Centre Comprendre et Parler, A.S.B.L., est un Centre de Réadaptation Fonctionnelle dédié aux troubles de l\'audition, du langage et de la parole, reconnu pour son approche multidisciplinaire et ses projets de recherche innovants.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients, staut et vision'
            }

          ]
        }
      },

      {
        path: '/',
        name: 'HomePage',
        component: HomePage,

        meta: {
          title: 'Accueil | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Bienvenue sur le site du Centre Comprendre et Parler ASBL (CCP), une organisation dédiée à l\'accompagnement des enfants sourds et malentendants. Découvrez nos services, nos programmes de soutien et nos initiatives pour améliorer la qualité de vie de nos patients.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Mission',
        name: 'MissionPage',
        component: MissionPage,

        meta: {
          title: 'Mission et valeurs | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Le Centre Comprendre et Parler accompagne les enfants et adultes sourds grâce à un projet individualisé axé sur l\'épanouissement, l\'autonomie et l\'intégration des technologies, tout en valorisant l\'éthique, la langue des signes et la formation continue.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients, missions et valeurs'
            }

          ]
        }
      },

      {
        path: '/Quisommesnous',
        name: 'AboutusExpend',
        component: AboutusExpend,

        meta: {
          title: 'Qui sommes-nous? | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Le Centre Comprendre et Parler, fondé en 1965, est une ASBL spécialisée dans la réadaptation fonctionnelle des enfants sourds. Avec une équipe multidisciplinaire de 110 professionnels, le centre accompagne plus de 600 enfants et leurs familles dans le développement de leur langage et autonomie.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/OrganesdeGestion',
        name: 'GestionPage',
        component: GestionPage,

        meta: {
          title: 'Organes de gestion | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez la structure de gestion du Centre Comprendre et Parler : l\'Assemblée Générale, le Conseil d\'Administration, le Comité Exécutif, et le Conseil de Direction, assurant la bonne gouvernance et le fonctionnement quotidien de l\'ASBL.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Organigrammes',
        name: 'OrgaPage',
        component: OrgaPage,

        meta: {
          title: 'Organigramme | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez la structure organisationnelle du Centre Comprendre et Parler, avec ses équipes professionnelles multidisciplinaires dirigées par des experts en médecine, communication, assistance sociale, psychologie, et rééducation. Page en construction.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/RapportdActivités',
        name: 'RapportPage',
        component: RapportPage,

        meta: {
          title: 'Rapports | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Accédez aux rapports d\'activités annuels du Centre Comprendre et Parler, retraçant les actions et accomplissements des dernières années. Consultez les rapports en format PDF, disponibles de 2010 à 2017.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Histoire',
        name: 'HistoirePage',
        component: HistoirePage,

        meta: {
          title: 'Histoire | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Explorez l\'évolution du Centre Comprendre et Parler depuis sa fondation en 1965 par le Docteur Olivier Périer. Découvrez comment le Centre a intégré des méthodes innovantes de rééducation, comme le LPC et le FCSC, et les récentes avancées technologiques telles que les implants cochléaires. Suivez notre parcours de l\'utilisation exclusive de méthodes audio-orales à l\'adoption des techniques visuelles et de soutien aux troubles concomitants.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Programmes',
        name: 'ProgrammesPage',
        component: ProgrammesPage,

        meta: {
          title: 'Programmes | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez les programmes et services du Centre Comprendre et Parler, offrant une prise en charge individualisée des enfants et personnes malentendantes. Explorez notre approche multidisciplinaire incluant le dépistage auditif, l\'utilisation d\'implants cochléaires, le suivi à domicile, et l\'intégration scolaire. Nous collaborons étroitement avec les familles pour soutenir le développement linguistique et communicationnel à chaque étape de la vie.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Programmes/EducationPrecoce',
        name: 'EducationPrecoce',
        component: EducationPrecoce,

        meta: {
          title: 'Education précoce | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez notre programme d\'éducation précoce pour enfants de 0 à 3 ans avec déficience auditive. Nous offrons un accompagnement personnalisé, incluant le home training pour stimuler la communication et le langage, ainsi qu\'un soutien psychologique aux parents. Pour les enfants entendants dans des foyers utilisant la langue des signes, notre programme aide à développer leurs capacités auditives et langagières. Explorez comment nous aidons les familles à favoriser le développement optimal de leurs enfants.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Programmes/Specialisation',
        name: 'SpecialisationPage',
        component: SpecialisationPage,

        meta: {
          title: 'Spécialisation | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Explorez nos programmes de rééducation spécialisée pour enfants avec déficience auditive, de la maternelle au niveau secondaire et supérieur. Nous offrons une éducation sur mesure en coordination avec l\'« École Intégrée » et les écoles ordinaires. Chaque programme vise à améliorer les compétences en communication orale et, lorsque nécessaire, à utiliser des moyens de communication par signes. Découvrez comment nous soutenons le développement langagier et académique des enfants à différents niveaux d\'enseignement.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Programmes/Integration',
        name: 'IntegrationPage',
        component: IntegrationPage,

        meta: {
          title: 'Intégration | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez notre programme d\'intégration qui soutient les enfants et adolescents avec déficience auditive dans leur évolution linguistique et communicationnelle. Nous favorisons leur intégration dans l\'enseignement ordinaire en assurant un soutien personnalisé, y compris des interprètes en communication visuelle pour les besoins spécifiques des élèves avec déficience auditive profonde. Notre objectif est de faciliter leur transition vers une intégration sociale et académique réussie.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Programmes/ImplantsCochleaires',
        name: 'ImplantsPage',
        component: ImplantsPage
      },

      {
        path: '/Programmes/Services',
        name: 'ServicesPage',
        component: ServicesPage,

        meta: {
          title: 'Services | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Explorez les services offerts par le Centre Comprendre et Parler pour soutenir les enfants et étudiants sourds. Notre Service d’Appui à la Formation Professionnelle aide les enfants avec implants cochléaires à améliorer leurs capacités de communication et leur intégration sociale. Le Service d’Accompagnement Pédagogique assiste les étudiants sourds dans leur parcours académique, offrant une coordination de projet, une aide pédagogique, des prises de notes, et une interprétation des cours, avec un suivi approuvé par les pouvoirs subsidiants.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Programmes/FormationsExterieures',
        name: 'FormationsPage',
        component: FormationsPage,

        meta: {
          title: 'Formations extérieures | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Explorez nos formations sur la surdité et la méthode « Langue en Mouvements » au Centre Comprendre et Parler. Nous offrons des sessions pour enseignants, logopèdes, et professionnels du secteur, ainsi que des formations de base et avancées.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Programmes/Depistage',
        name: 'DepistagePage',
        component: DepistagePage,

        meta: {
          title: 'Dépistage | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Le service Dépistage évalue et diagnostique la surdité en maternité (CHIREC, Edith Cavell) ou au Centre. En cas de risques potentiels ou d\'antécédents familiaux, nous assurons le suivi jusqu\'au diagnostic ou l\'exclusion de la surdité. Environ 3.000 bébés et jeunes enfants sont testés chaque année, avec confirmation et coordination des diagnostics avec les hôpitaux et médecins externes.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }

      },

      {
        path: '/Programmes/ServicesExterieurs',
        name: 'ServicesextPage',
        component: ServicesextPage
      },

      {
        path: '/Competences',
        name: 'CompetencesPage',
        component: CompetencesPage,

        meta: {
          title: 'Compétences | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez les compétences multidisciplinaires des professionnels du Centre Comprendre et Parler. Nous développons les capacités linguistiques et l\'autonomie des enfants sourds grâce à une approche collaborative intégrant logopédie, langue des signes, soutien social, psychologie et soins médicaux spécialisés.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Competences/Accompagnements',
        name: 'AccompagnementPage',
        component: AccompagnementPage,

        meta: {
          title: 'Accompagnements | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Nous assistons les étudiants sourds dans leurs études supérieures, en offrant une aide personnalisée : coordination de projet, accompagnement pédagogique, prises de notes et interprétation des cours. Le suivi est soumis à l\'approbation des pouvoirs subsidiants comme PHARE ou AWIPH.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Competences/AssistancesSociales',
        name: 'AssistancePage',
        component: AssistancePage,

        meta: {
          title: 'Assistances sociales | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Nos assistantes sociales soutiennent les familles et les jeunes adultes sourds, les aidant dans leurs démarches administratives et leur autonomie, tout en collaborant à la rééducation. Les éducateurs créent des environnements stimulants pour le développement harmonieux des enfants sourds, en animant des activités individuelles et en groupe.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Competences/Audiologie',
        name: 'AudiologiePage',
        component: AudiologiePage,

        meta: {
          title: 'Audiologie | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Le service d\'audiologie du Centre Comprendre et Parler évalue et ajuste les déficiences auditives, adapte les appareils auditifs, programme les implants cochléaires et assure le suivi audiologique. Composé de 5 audiologistes pédiatriques spécialisés, le service offre des solutions adaptées aux enfants, enrichies par des collaborations et formations régulières.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Competences/Depistage',
        name: 'DepistageCompetence',
        component: DepistageCompetence
      },

      {
        path: '/Competences/Logopedie',
        name: 'LogopediePage',
        component: LogopediePage,

        meta: {
          title: 'Logopédie | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Le service de logopédie du Centre Comprendre et Parler offre une rééducation individuelle et collective pour améliorer la communication des enfants avec déficience auditive. Les logopèdes utilisent des activités variées et des supports attractifs pour développer les compétences linguistiques. Ils intègrent la langue des signes lorsque nécessaire et impliquent les parents dans le processus d\'accompagnement.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Competences/Recherches',
        name: 'ResearchPage',
        component: ResearchPage,

        meta: {
          title: 'Recherches | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Le Centre Comprendre et Parler mène des recherches de pointe sur la surdité en collaboration avec des institutions académiques comme l\'ULB et l\'Institut Libre Marie Haps. Il organise des formations pour professionnels et supervise des mémoires en logopédie, psychologie, audiologie, et plus. Le service contribue à la publication d\'articles scientifiques et assure une approche cohérente et technologiquement avancée dans le développement des enfants sourds.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Competences/Medecins',
        name: 'MedecinsPage',
        component: MedecinsPage,

        meta: {
          title: 'Médecins - ORL | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Au Centre Comprendre et Parler, le médecin-directeur supervise les méthodes de rééducation, dirige les équipes et assure le suivi des patients. Il intervient directement avec les enfants et leurs familles, établit des contacts avec la communauté des sourds, et collabore avec des médecins externes pour une prise en charge complète. Les médecins ORL réalisent les examens nécessaires pour le diagnostic et le suivi des déficiences auditives.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Competences/Psychomotricite',
        name: 'PsychomotricitePage',
        component: PsychomotricitePage,

        meta: {
          title: 'Psychomotricité | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Au Centre Comprendre et Parler, les psychomotriciens spécialisés soutiennent les enfants sourds dans le développement psychomoteur et la rééducation. Ils travaillent sur l’adaptation corporelle, l’équilibre, et les interactions sociales, en utilisant des thérapies individuelles et collectives pour favoriser une meilleure intégration corporelle et relationnelle, essentiel à l\'épanouissement et à l\'autonomie des enfants.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
     
      },

      {
        path: '/Collaborations/Partenaires',
        name: 'PartenairesPage',
        component: PartenairesPage,

        meta: {
          title: 'Partenaires | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez les partenaires privilégiés du Centre Comprendre et parler',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Collaborations/Autrescollaborations',
        name: 'OtherCollabPage',
        component: OtherCollabPage,

        
        meta: {
          title: 'Autres collaborations | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez les autres collaborations du Centre Comprendre et parler',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }

      },

      {
        path: '/Collaborations/Rayonnement',
        name: 'RayonnementPage',
        component: RayonnementPage,

        meta: {
          title: 'Rayonnement du centre | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez le rayonnement du Centre Comprendre et parler',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/SAFP/Surdite',
        name: 'SurditePage',
        component: SurditePage,

        meta: {
          title: 'Surdité | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez les recommandations du BIAP pour la prise en charge de la surdité, couvrant le développement du langage, les aides techniques et audiologiques. Explorez les ressources pour la Langue des Signes, le LPC (Langue française Parlée Complétée), et des outils comme SignWriting®. Pour plus d\'informations, contactez le CHU Sart Tilman ou visitez les associations spécialisées.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients'
            }

          ]
        }
      },



      {
        path: '/Don',
        name: 'DonPage',
        component: DonPage,

        meta: {
          title: 'Nous soutenir | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Soutenez le Centre Comprendre et Parler en faisant un don ! Votre générosité aide à financer nos projets et améliorer la vie des enfants et familles que nous accompagnons. Recevez une attestation fiscale pour les dons de 40 € et plus. Pour faire un don, choisissez entre domiciliation, virement bancaire ou don en ligne.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients, don'
            }

          ]
        }
      },

      {
        path: '/Actualites',
        name: 'NewsSection',
        component: NewsSection
      },


      {
        path: '/Contact',
        name: 'ContactPage',
        component: ContactPage,

        meta: {
          title: 'Contact | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez les informations pratiques du Centre Comprendre et Parler : horaires du lundi au vendredi de 08:30 à 17:00, accès facile depuis l\'arrêt Alma, avec parking disponible. Contactez-nous par e-mail à info@ccpasbl.be ou par téléphone au +32 2 770 04 40. Suivez-nous sur LinkedIn et Facebook pour plus d\'actualités.',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients, don'
            }

          ]
        }
      },

    


      {
        path: '/:id',
        name: 'NewsDetail',
        component: NewsDetail,
        props: true,

        meta: {
          title: 'Actualités | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Découvrez actualités du Centre Comprendre et Parler',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients, don'
            }

          ]
        }
      },


      {
        path: '/Privacy',
        name: PrivacyPage,
        component: PrivacyPage,

        meta: {
          title: 'Politique de confidentialité | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'politique de confidentialité du Centre Comprendre et Parler',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients, don'
            }

          ]
        }
      },

      {
        path: '/Legal',
        name: LegalPage,
        component: LegalPage,

        meta: {
          title: 'Mentions légales | CCPL',
          metaTags: [
            {
              name: 'description',
              content: 'Mentions légales du Centre Comprendre et Parler',
            },

            {
              name: 'keywords',
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfants, Centre, sourds, patients, don'
            }

          ]
        }
      }

      
      
    ]
  });





  
// script pour ajouter les balises meta dynamiquement 

  router.beforeEach((to, from, next) => {
  
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

 
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

 
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  
  if(!nearestWithMeta) return next();

  
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

   
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  
  .forEach(tag => document.head.appendChild(tag));

  next();
});





  export default router
