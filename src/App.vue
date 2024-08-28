<template>
   <NavInfo></NavInfo>
    <NavBar></NavBar>
  <RouterView></RouterView>
  <footer>
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
