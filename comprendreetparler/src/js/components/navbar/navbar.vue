<template>
    <nav class="main-nav">
    
    
    <NavLinks></NavLinks>
    <NavButton></NavButton>
    <BurgerNav></BurgerNav>
  </nav>
</template>
<script>

    import NavLinks from './nav-links.vue'
    import NavButton from './button.vue'
    import BurgerNav from './burger.vue'

    export default{
        name: 'NavBar',

        components: {
            NavLinks,
            NavButton,
            BurgerNav
        },

        data () {
        return {
            imagepath: require('../../../../images/logonew.svg')
        }
}
    }
</script>
<style scoped>

    @media all and (max-width: 1366px){
        .navbuttoncomp{
            display: none;
        }

        .nav-links-ul{
            display: none;
        }
    }

</style>