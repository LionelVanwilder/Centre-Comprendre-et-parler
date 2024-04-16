import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import i18n from './js/lang/lang.js';

import VisionPage from './js/components/pages/Home/vision/visionpage.vue'
import HomePage from './js/components/pages/Home/Page_home.vue'
import MissionPage from './js/components/pages/Home/mission/missionpage.vue'
import AboutusExpend from './js/components/pages/Home/Aboutus/aboutus-expend.vue'
import GestionPage from './js/components/pages/Home/gestion/gestion.vue'
import OrgaPage from './js/components/pages/Home/organigrammes/organigrammes.vue'
import RapportPage from './js/components/pages/Home/Rapport/Rapport.vue'
import HistoirePage from './js/components/pages/Home/histoire/histoire.vue'
import ProgrammesPage from './js/components/pages/programmes/programmes.vue'
import EducationPrecoce from './js/components/pages/programmes/education_precoce/education_precoce.vue'
import SpecialisationPage from './js/components/pages/programmes/spécialisation/spécialisation.vue'
import IntegrationPage from './js/components/pages/programmes/integration/integration.vue'
import ImplantsPage from './js/components/pages/programmes/implants cochléaire/implants.vue'
import ServicesPage from './js/components/pages/programmes/services/services.vue'
import FormationsPage from './js/components/pages/programmes/formations/formations.vue'
import DepistagePage from './js/components/pages/programmes/depistage/depistage.vue'
import ServicesextPage from './js/components/pages/programmes/services exterieurs/servicesext.vue'
import AccompagnementPage from './js/components/pages/competences/accompagnement/accompagnement.vue'
import CompetencesPage from './js/components/pages/competences/competences.vue'
import DonPage from './js/components/pages/Don/Don.vue'
import AssistancePage from './js/components/pages/competences/assistance/assistance.vue'
import NewsPage1 from './js/components/pages/Home/news/News1.vue'
import NewsPage2 from './js/components/pages/Home/news/news2.vue'
import NewsPage3 from './js/components/pages/Home/news/news3.vue'
//import NewsDetail from './js/components/pages/Home/news/NewsDetail.vue'
import NewsSection from "./js/components/pages/Home/news/news.vue"
import AudiologiePage from './js/components/pages/competences/audiologie/audiologie.vue'
import DepistageCompetence from './js/components/pages/competences/depistage/depistage.vue'
import LogopediePage from './js/components/pages/competences/logopedie/logopedie.vue'
import MedecinsPage from './js/components/pages/competences/medecins/medecins.vue'
import PsychomotricitePage from './js/components/pages/competences/psychomotricite/psychomotricite.vue'
import PartenairesPage from './js/components/pages/collaborations/Partenaires/partenaires.vue'
import OtherCollabPage from './js/components/pages/collaborations/OtherCollab/OtherCollab.vue'
import RayonnementPage from './js/components/pages/collaborations/Rayonnement/Rayonnement.vue'
import SurditePage from './js/components/pages/documentation/surdite/surdite.vue'

import "./css/settings.css"
import "./css/navbar/navbar.css"
import "./css/navbar/navbutton.css"
import "./css/header/navinfo.css"
import "./css/header/home_banner.css"
import "./css/header/buttonorange.css"
import "./css/pages/Home/aboutus.css"
import "./css/pages/Home/flex-row.css"
import "./css/pages/Home/patients.css"
import "./css/pages/Home/bloc_flex.css"
import "./css/pages/Home/News.css"
import "./css/footer/footer.css"
import "./css/pages/Home/Donation.css"
import "./css/carousel/carousel.css"
import "./css/pages/Home/vision/breadcrumb.css"
import "./css/Pages.css"
import "./css/pages/programmes/programmes.css"
import "./css/pages/programmes/content.css"


export default {
  data() {
      return {
          actualites: []
      };
  },
  mounted() {
      this.fetchactualites();
  },
  methods: {
      async fetchactualites() {
          try {
              const response = await axios.get('/actualites');
              this.actualites = response.data;
          } catch (error) {
              console.error('Error fetching actualites:', error);
          }
      }
  }
};



const router = createRouter({
    history: createWebHistory(),
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
        component: HomePage
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
        path: '/Documentations/Surdite',
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
        path: '/Actualites/:title',
        name: 'NewsPage1',
        component: NewsPage1
      },

      {
        path: '/Actualites/:title',
        name: 'NewsPage2',
        component: NewsPage2
      },

      {
        path: '/Actualites/:title',
        name: 'NewsPage3',
        component: NewsPage3
      }

     /* {
        path: '/Actualités',
        name: 'NewsSection',
        component: NewsSection,
        props: true
      },


      {
        path: '/Actualités/:id',
        name: 'NewsDetail',
        component: NewsDetail,
        props: true
      }
*/

      
      // Autres routes...
    ]
  });

  
  

  

createApp(App).use(router).use(i18n).mount('#app');

