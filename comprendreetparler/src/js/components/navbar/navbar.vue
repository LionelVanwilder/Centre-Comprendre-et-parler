<template>
    <nav class="main-nav">
    <div class="navlogo-don">
        <RouterLink to="/"><img :src="imagepath" class="logoimgnav"></RouterLink>
        <NavButton></NavButton>
        <BurgerNav></BurgerNav>
    </div>
    <div class="nav-links-container">
        <NavLinks></NavLinks>
        
    </div>
    
    
  </nav>
</template>hhh
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
            imagepath: require('../../../../images/logonew.png')
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