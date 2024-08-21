<template>
    <div id="news" data-aos="fade-up" data-aos-duration="1000">
        <h2 data-aos="fade-up" data-aos-duration="1000">{{ $t("news.title") }}</h2>
        <div class="container-news">
            <img src="../../../../../../icons/news.svg" class="icon-bloc-flex">
            <article class="news-card card-radius" v-for="card in news" :key="card.id" 
            data-aos="fade-up"
            data-aos-anchor="#aosanchor"
            data-aos-duration="1000">
                <!--<div class="news-image-container">
                    <img :src="item.image">
                </div>-->
                
                <p class="news-date">{{ formatDate(card.date) }}</p>
                <h3>{{ card.title }}</h3>
                <!--<p id="aosanchor" class="news-content">
                    {{ item.content }}
                </p>-->
                <router-link :to="`/Actualites/${formatTitleForUrl(card.title)}`">→ Lire plus</router-link>

            </article>
            <!--<ul>
                <li v-for="card in news" :key="card.id">{{ card.title }}</li>
            </ul>-->
        </div>
    </div>
</template>

<script>
import { supabase } from '../../../../../lib/supabaseClient';
import { ref, onMounted } from 'vue'; // Importez ref et onMounted depuis 'vue'
const news = ref([])

async function getNews() {
  const { data } = await supabase.from('news').select()
  news.value = data
}

onMounted(() => {
  getNews()
})
export default {
    name: 'NewsSection',
   /* data() {
        return {
            news: [
                {
                    id: 1,
                    date: '01 MAR 2024',
                    title: 'Covid 19',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: require('../../../../../../images/news/covid.avif'),
                    color: '#EA3788',
                    
                },
                {
                    id: 2,
                    date: '29 FEV 2024',
                    title: '50 ans du centre',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: require('../../../../../../images/news/birthday.avif'),
                    color: '#004FFF',
                    
                },
                {
                    id: 3,
                    date: '28 FEV 2024',
                    title: 'Nous recrutons',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    image: require('../../../../../../images/news/job.avif'),
                    color: '#29bf12',
                    
                }
            ]
        }
    },*/
    setup() {
        // Créez une variable réactive pour les actualités
        const news = ref([]);

        // Fonction pour récupérer les actualités depuis Supabase
        async function getNews() {
            const { data, error } = await supabase
                .from('news')
                .select()
                .order('date', { ascending: false });
            
            if (error) {
                console.error('Error fetching news:', error);
            } else {
                news.value = data;
            }
        }

        // Appel de la fonction lorsque le composant est monté
        onMounted(() => {
            getNews();
        });

        const formatDate = (date) => {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            return new Date(date).toLocaleDateString('fr-FR', options);
        };


        // Fonction pour formater le titre pour l'URL (si nécessaire)
        const formatTitleForUrl = (title) => {
            return title.replace(/\s+/g, '-').toLowerCase();
        };

        // Retournez les variables et méthodes utilisées dans le template
        return {
            news,
            formatTitleForUrl,
            formatDate
        };
    }
    
}
</script>
