<template>
  <div class="home-banner">
    <HomeBanner></HomeBanner>
    <!--

      <div class="button-banner-container">
        <NavButton class="fade-appear">Je suis un parent</NavButton>
        <ButtonOrange class="buttonorange fade-appear">je suis un professionnel</ButtonOrange>
    </div>

    -->
  </div>
  <main>
    <AboutUs></AboutUs>
    <FlexRow></FlexRow>
    <PatientGrid></PatientGrid>
    <BlocFlex></BlocFlex>
    <!--<SwiperApp></SwiperApp>-->
    <NewsSection></NewsSection>
    <DonationSection></DonationSection>
    <CarouselApp></CarouselApp>
    
  </main>
</template>
<script>

import HomeBanner from '../../header/home-banner.vue'
//import ButtonOrange from '../../header/button-orange.vue'
import AboutUs from './aboutus.vue'
import FlexRow from "./flex-row.vue"
import PatientGrid from "./Patient.vue"
import BlocFlex from "./bloc-flex.vue"
import NewsSection from "./news/news.vue"
import DonationSection from "./Donation.vue"
import CarouselApp from "../../carousel/carousel.vue"
//import NavButton from "../../navbar/button.vue"
    
export default {
  name: 'HomePage',
  components: {
    HomeBanner,
    //ButtonOrange,
    AboutUs,
    FlexRow,
    PatientGrid,
    BlocFlex,
    NewsSection,
    DonationSection,
    CarouselApp,
   // NavButton

    
    //SwiperApp
  }
}

</script>