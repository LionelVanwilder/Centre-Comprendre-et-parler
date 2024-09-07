import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/route.js'
import { createMetaManager } from 'vue-meta';
import axios from 'axios';
import { createHead } from '@vueuse/head';
import i18n from './js/lang/lang.js';

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
import "./css/pages/Home/organigrammes/organnigrammes.css"

// Création de l'application Vue
const app = createApp(App);

// Définition de données pour la récupération d'actualités
app.mixin({
  data() {
    return {
      actualites: []
    };
  },
  mounted() {
    this.fetchactualites();
    // Déclenche l'événement 'render-event' lorsque l'application est montée
    document.dispatchEvent(new Event('render-event'));
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
});

// Utilisation des plugins
app.use(router);
app.use(createHead());
app.use(createMetaManager());
app.use(i18n);

// Montre l'application sur l'élément avec l'ID 'app'
app.mount('#app');
