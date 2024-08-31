import { createRouter, createWebHashHistory } from 'vue-router'


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


const router = createRouter({

    
    history: createWebHashHistory(),
    scrollBehavior() {
        return { top: 0 }
      },
    routes: [
      {
        path: '/Vision',
        name: 'VisionPage',
        component: VisionPage
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
              content: 'Centre Comprendre et Parler, ASBL, CCPL, enfans, Centre, sourds, patients'
            }

          ]
        }
      },

      {
        path: '/Mission',
        name: 'MissionPage',
        component: MissionPage
      },

      {
        path: '/Quisommesnous',
        name: 'AboutusExpend',
        component: AboutusExpend
      },

      {
        path: '/OrganesdeGestion',
        name: 'GestionPage',
        component: GestionPage
      },

      {
        path: '/Organigrammes',
        name: 'OrgaPage',
        component: OrgaPage
      },

      {
        path: '/RapportdActivités',
        name: 'RapportPage',
        component: RapportPage
      },

      {
        path: '/Histoire',
        name: 'HistoirePage',
        component: HistoirePage
      },

      {
        path: '/Programmes',
        name: 'ProgrammesPage',
        component: ProgrammesPage
      },

      {
        path: '/Programmes/EducationPrecoce',
        name: 'EducationPrecoce',
        component: EducationPrecoce
      },

      {
        path: '/Programmes/Specialisation',
        name: 'SpecialisationPage',
        component: SpecialisationPage
      },

      {
        path: '/Programmes/Integration',
        name: 'IntegrationPage',
        component: IntegrationPage
      },

      {
        path: '/Programmes/ImplantsCochleaires',
        name: 'ImplantsPage',
        component: ImplantsPage
      },

      {
        path: '/Programmes/Services',
        name: 'ServicesPage',
        component: ServicesPage
      },

      {
        path: '/Programmes/FormationsExterieures',
        name: 'FormationsPage',
        component: FormationsPage
      },

      {
        path: '/Programmes/Depistage',
        name: 'DepistagePage',
        component: DepistagePage
      },

      {
        path: '/Programmes/ServicesExterieurs',
        name: 'ServicesextPage',
        component: ServicesextPage
      },

      {
        path: '/Competences',
        name: 'CompetencesPage',
        component: CompetencesPage
      },

      {
        path: '/Competences/Accompagnements',
        name: 'AccompagnementPage',
        component: AccompagnementPage
      },

      {
        path: '/Competences/AssistancesSociales',
        name: 'AssistancePage',
        component: AssistancePage
      },

      {
        path: '/Competences/Audiologie',
        name: 'AudiologiePage',
        component: AudiologiePage
      },

      {
        path: '/Competences/Depistage',
        name: 'DepistageCompetence',
        component: DepistageCompetence
      },

      {
        path: '/Competences/Logopedie',
        name: 'LogopediePage',
        component: LogopediePage
      },

      {
        path: '/Competences/Recherches',
        name: 'ResearchPage',
        component: ResearchPage
      },

      {
        path: '/Competences/Medecins',
        name: 'MedecinsPage',
        component: MedecinsPage
      },

      {
        path: '/Competences/Psychomotricite',
        name: 'PsychomotricitePage',
        component: PsychomotricitePage
     
      },

      {
        path: '/Collaborations/Partenaires',
        name: 'PartenairesPage',
        component: PartenairesPage
      },

      {
        path: '/Collaborations/Autrescollaborations',
        name: 'OtherCollabPage',
        component: OtherCollabPage
      },

      {
        path: '/Collaborations/Rayonnement',
        name: 'RayonnementPage',
        component: RayonnementPage
      },

      {
        path: '/SAFP/Surdite',
        name: 'SurditePage',
        component: SurditePage
      },



      {
        path: '/Don',
        name: 'DonPage',
        component: DonPage
      },

      {
        path: '/Actualites',
        name: 'NewsSection',
        component: NewsSection
      },


      {
        path: '/Contact',
        name: 'ContactPage',
        component: ContactPage
      },

     /* {
        path: '/Actualités',
        name: 'NewsSection',
        component: NewsSection,
        props: true
      },*/


      {
        path: '/:id',
        name: 'NewsDetail',
        component: NewsDetail,
        props: true
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
