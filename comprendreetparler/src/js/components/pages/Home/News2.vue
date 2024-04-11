<template>
  <div id="news" data-aos="fade-up" data-aos-duration="1000">
    <img src="../../../../../icons/news.svg" class="icon-bloc-flex">
    <h2 data-aos="fade-up" data-aos-duration="1000">Actualités</h2>
    <div class="container-news swiper">
      
      <div class="swiper-wrapper">
        <article class="news-card swiper-slide" v-for="(item, index) in news" :key="index" data-aos="fade-up" data-aos-anchor="#aosanchor" data-aos-duration="1000">
          <img :src="item.image">
          <p class="news-date">{{ item.date }}</p>
          <h3>{{ item.title }}</h3>
          <p id="aosanchor" class="news-content">{{ item.content }}</p>
          <a>→ Lire plus</a>
        </article>
      </div>

      <!-- Pagination -->
      <div class="swiper-pagination"></div>

      <!-- Navigation buttons -->
      

      <!-- Scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';


export default {
  name: 'SwiperApp',

  mounted() {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        clickable: true,
      },
    });
  },

  data() {
    return {
      news: [
        {
          date: '01 MAR 2024',
          title: 'Covid 19',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../../images/news/covid.avif')
        },
        {
          date: '29 FEV 2024',
          title: '50 ans du centre',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../../images/news/birthday.avif')
        },
        {
          date: '28 FEV 2024',
          title: 'Nous recrutons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../../images/news/job.avif')
        },

        {
          date: '13 FEV 2024',
          title: 'Nous recrutons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../../images/news/birthday.avif')
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant swiper */
</style>
