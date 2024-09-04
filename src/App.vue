<template>
   <NavInfo></NavInfo>
    <NavBar></NavBar>
  <RouterView></RouterView>
  <footer>
    <svg version="1.1" viewBox="0 0 1440 134">
  <path fill="#fff" d="M0,64l80,5.3C160,75,320,85,480,80s320-27,480-32s320,5,400,10.7l80,5.3V0h-80c-80,0-240,0-400,0 S640,0,480,0S160,0,80,0H0V64z"/>
</svg>



      <FooterApp></FooterApp>
    </footer>
   
</template>

<script>
import FooterApp from "./js/components/footer/footer.vue"
import NavInfo from './js/components/header/nav-info.vue'
import NavBar from './js/components/navbar/navbar.vue'
export default {
 name: 'App',

 components: {
  FooterApp,
  NavInfo,
  NavBar
 },

  
}

 
</script>

<style>

</style>./js/components/pages/Home/HelloWorld.vue
