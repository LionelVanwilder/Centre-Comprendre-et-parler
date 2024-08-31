<template>
  <div class="template-page-container">
    <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
      <div v-if="article" class="news-detail">
        <p class="news-date">{{ formatDate(article.date) }}</p>
        <h2 class="titlecontent">{{ getTitle(article) }}</h2>
        <div v-html="getContent(article)" class="articlecontent"></div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '@/lib/supabaseClient';
import { useI18n } from 'vue-i18n';
import BreadCrumbCom from '../../breadcrumb.vue'

export default {
  name: 'NewsDetail',

  components: {
    BreadCrumbCom,
  },

  computed: {
    breadcrumbs() {
      return [
        { to: '/', label: this.$t('breadcrumbs.home') },
        { to: '', label: this.$t('news.title') }
      ];
    }
  },

  setup() {
    const route = useRoute();
    const article = ref(null);
    const { locale } = useI18n();

    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', route.params.id) 
        .single(); 

      if (error) {
        console.error('Error fetching article:', error);
      } else {
        article.value = data;
      }
    };

    onMounted(() => {
      fetchArticle();
    });

    const formatDate = (date) => {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(date).toLocaleDateString('fr-FR', options);
    };

    const formatContent = (content) => {
      return content.replace(/\n/g, '<br>');
    };

    const getTitle = (article) => {
      const currentLang = locale.value;
      switch (currentLang) {
        case 'en':
          return article.title_en || article.title; 
        case 'nl':
          return article.title_nl || article.title; 
        default:
          return article.title; 
      }
    };

    const getContent = (article) => {
      const currentLang = locale.value;
      let content = '';
      switch (currentLang) {
        case 'en':
          content = article.content_en || article.content; 
          break;
        case 'nl':
          content = article.content_nl || article.content; 
          break;
        default:
          content = article.content; 
      }
      return formatContent(content);
    };

    return {
      article,
      formatDate,
      getTitle,
      getContent
    };
  }
};
  </script>
  
  <style scoped>
  .news-date{
        color: #ffffff !important;
        width: 50%;
        background-color: #005387;
        margin: 2rem;
        
    }

    .titlecontent{
      padding: 0 2rem;
    }
    .Newsdetail-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .Edu-container{
        
        padding: 3rem;
        margin: 0 6rem;
        position: relative;
       
    }

    .Edu-container h1{
        color: #444444 !important;
        text-transform: uppercase;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        width: 80%;
        text-align: center;
    }

   
    .detail-paragraph{
        color: #222222;
        width: 70%;


    }

    .articlecontent{
     padding: 2rem;
      line-height: 1.5;
      text-align: justify;
    }

    .detail-paragraph::first-letter{
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3rem;
        float: left;
        line-height: 1em; /* Ajustement de la hauteur de ligne */
        padding-right: 0.1em; /* Ajustement de l'espacement */
        padding-top: 0.1em; /* Ajustement de l'espacement */
        vertical-align: top;
    }

    

    .image-wrapper{
        overflow: hidden;
        width: 70%;
        margin: auto;
    }

    .image-wrapper img{
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        transition: 0.3s;
    }

    @media all and (max-width: 769px){
        .Edu-container{
            margin: 0 2rem;
        }
    }

    @media all and (max-width: 600px){

        .Edu-container{
            margin: 0;
        }
        .Edu-container h1{
            font-size: 2rem;
        }

        .image-wrapper{
            width: 100%;
        }

        .detail-paragraph{
            width: 100%;
        }


    }

    @media all and (max-width: 476px){

        .Edu-container{
            padding: 1rem;
        }
        .Edu-container h1{
            font-size: 1.7rem;
        }

        .image-wrapper{
            width: 100%;
        }

        .detail-paragraph{
            width: 100%;
        }

        .image-wrapper{
            width: 100%;
        }

        .detail-paragraph{
            width: 100%;
        }

        .Edu-container p{
            letter-spacing: 0.5px;
        }

        .titlecontent, .articlecontent{
          padding: 1rem;
        }

        .news-date{
          margin: 2rem 1rem;
        }
    }

    @media all and (max-width: 426px){

    .Edu-container{
        padding: 1rem;
    }
    .Edu-container h1{
        font-size: 1.5rem;
    }

    

    .image-wrapper{
        width: 80%;
    }

    .detail-paragraph{
        width: 80%;
    }

    .image-wrapper{
        width: 90%;
    }

    .detail-paragraph{
        width: 90%;
    }
    }

    .titlecontent, .articlecontent{
          padding: 0.6rem;
        }

        .news-date{
          margin: 1rem 0.6rem;
        }

        h2{
          font-size: 1.5rem !important;
        }

        .titlecontent{
          line-height: 1.3;
        }

  </style>
  