<template>
    <div id="news" data-aos="fade-up" data-aos-duration="1000">
        <h2 data-aos="fade-up" data-aos-duration="1000">{{ $t("news.title") }}</h2>
        <div class="container-news">
            <img src="../../../../../../icons/news.svg" class="icon-bloc-flex">
            <article class="news-card" v-for="(item, index) in news" :key="index" 
            data-aos="fade-up"
            data-aos-anchor="#aosanchor"
            data-aos-duration="1000">
                
                <img :src="item.image">
                <p class="news-date" :style="{ backgroundColor: item.color }">{{ item.date }}</p>
                <h3>{{ item.title }}</h3>
                <p id="aosanchor" class="news-content">
                    {{ item.content }}
                </p>
                <router-link :to="`/Actualites/${formatTitleForUrl(item.title)}`">→ Lire plus</router-link>

            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsSection',
    data() {
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
    },
    methods: {
        // Method to format the title for URL
        formatTitleForUrl(title) {
            // Replace spaces with dashes and convert to lowercase
            return title.replace(/\s+/g, '-').toLowerCase();
        }
    }
}
</script>
