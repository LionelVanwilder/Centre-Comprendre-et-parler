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
                <h3>{{ getTitle(card) }}</h3>
                <!--<p id="aosanchor" class="news-content">
                    {{ item.content }}
                </p>-->
                <router-link :to="`/${card.id}`">→ {{ $t('news.button') }}</router-link>


            </article>
        </div>
    </div>
</template>

<script>
import { supabase } from '../../../../../lib/supabaseClient';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
    name: 'NewsSection',
    setup() {
        const news = ref([]);
        const { locale } = useI18n();

        const getNews = async () => {
            try {
        
                const { data, error } = await supabase
                    .from('news')
                    .select('*') 
                    .order('date', { ascending: false });

                if (error) {
                    console.error('Error fetching news:', error);
                } else {
                    news.value = data;
                }
            } catch (err) {
                console.error('Unexpected error:', err);
            }
        };

        onMounted(() => {
            getNews();
        });

        const formatDate = (date) => {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            return new Date(date).toLocaleDateString('fr-FR', options);
        };

        const formatTitleForUrl = (title) => {
            return title.replace(/\s+/g, '-').toLowerCase();
        };

        const getTitle = (card) => {
            const currentLang = locale.value;
            // Utiliser une logique pour obtenir le titre en fonction de la langue
            switch (currentLang) {
                case 'en':
                    return card.title_en || card.title; // Fallback au français si nécessaire
                case 'nl':
                    return card.title_nl || card.title;
                default:
                    return card.title;
            }
        };

        return {
            news,
            formatTitleForUrl,
            formatDate,
            getTitle
        };
    }
}
</script>
