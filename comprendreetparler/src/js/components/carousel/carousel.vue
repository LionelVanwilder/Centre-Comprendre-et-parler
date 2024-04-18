<template>
  <div class="carousel-container"  
              data-aos="fade-up"
              data-aos-duration="1000"
              >
              <div class="align-title">
                <h2>{{ $t("carousel.title") }}</h2>
              </div>
              
    <carousel 
      :items-to-show="1"
      :transition="500"
      :breakpoints="breakpoints"
      >
      <slide v-for="(item, index) in pages" :key="index">
        <a :href="'#slide-' + index" class="carousel__item" :class="'slide-' + index">
          <div class="container-news">
            <router-link  :to="item.path" class="news-card" :style="{ backgroundColor: item.color }">
              <img :src="item.image">
              <span class="news-date" :style="{ backgroundColor: item.color }">{{ item.title }}</span>
            </router-link>
          </div>
        </a>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'CarouselApp',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  computed: {
      pages(){
        return[
        {
          title: this.$t('navbar.links.program'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/program.avif'),
          color: '#EA3788',
          path: '/Programmes'
        },
        {
          title: this.$t('navbar.links.skills'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/news/covid.avif'),
          color: '#004FFF',
          path: '/Competences'
        },
        {
          title: this.$t('navbar.links.collab'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/collaboration.avif'),
          color: '#29bf12',
          path: '/Programmes'
        },

        {
          title: this.$t('navbar.links.doc'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/documentation.avif'),
          color: '#E71D36',
          path: '/Programmes'
        },

        {
          title: this.$t('navbar.links.activity'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/activity.avif'),
          color: '#FF9F1C',
          path: '/Programmes'
        },

        {
          title: this.$t('navbar.navbutton'),
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/donation2.avif'),
          color: '#2364AA',
          path: '/Don'
        },
        ]
      }
  },

  data() {
    return {
     /* pages: [
        {
          title: 'Programmes',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/program.avif'),
          color: '#EA3788',
          path: '/Programmes'
        },
        {
          title: 'Compétences',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/news/covid.avif'),
          color: '#004FFF',
          path: '/Competences'
        },
        {
          title: 'collaboration',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/collaboration.avif'),
          color: '#29bf12',
          path: '/Programmes'
        },

        {
          title: 'documentation',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/documentation.avif'),
          color: '#E71D36',
          path: '/Programmes'
        },

        {
          title: 'activités',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/activity.avif'),
          color: '#FF9F1C',
          path: '/Programmes'
        },

        {
          title: 'nous soutenir',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: require('../../../../images/donation2.avif'),
          color: '#2364AA',
          path: '/Don'
        },
      ],*/

      breakpoints: {
        475: {
          itemsToShow: 1.5,
        },

        515: {
          itemsToShow: 2,
        },

        768: {
          itemsToShow: 3,
        },

      }
    };
  }
};
</script>
<style></style>
