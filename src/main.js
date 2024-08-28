import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/route.js'
import axios from 'axios';
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




  
  

  

createApp(App).use(router).use(i18n).mount('#app');

