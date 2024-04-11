<template>
    <a href="" class="carousel__item">
        <div class="container-news">
                <article class="news-card" v-for="(item, index) in news" :key="index" 
                data-aos="fade-up"
                data-aos-anchor="#aosanchor"
                data-aos-duration="1000"
                >
                    
                    <img :src="item.image">
                    <p class="news-date" :style="{ backgroundColor: item.color }">{{ item.date }}</p>
                    <h3>{{ item.title }}</h3>
                    <p id="aosanchor" class="news-content">
                        {{ item.content }}
                    </p>
                    <a>→ Lire plus</a>
                </article>
            </div>
    </a>
</template>
<script>
    export default{
        components: {
            CarouselBox: 'CarouselBox'
        },

        data(){
            return{
                news: [
                    {
                        date:
                            '01 MAR 2024',

                        title: 
                            'Covid 19', 

                        content: 
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

                        image: require('../../../../images/news/covid.avif'),

                        color: '#EA3788'
                    },

                    {

                        date:
                            '29 FEV 2024',

                        title: 
                            '50 ans du centre', 

                        content: 
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

                        image: require('../../../../images/news/covid.avif'),

                        color: '#004FFF'
                    },

                    {

                        date:
                            '28 FEV 2024',

                        title: 
                            'Nous recrutons', 

                        content: 
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

                        image: require('../../../../images/news/covid.avif'),

                        color: '#29bf12'
                    }
            ]
            }
        }
    }
</script>