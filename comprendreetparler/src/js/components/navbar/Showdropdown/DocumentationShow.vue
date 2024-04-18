<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">{{ $t("navbar.links.doc") }}</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/Documentations/Surdite" @click="selectItemAndCloseBurger('Surdite')">Surdité</router-link></li>
        <li><router-link to="/">Publication</router-link></li>
        <li><router-link to="/">Autres liens utiles</router-link></li>
    </ul>
</template>
<script>
    export default{
        name: 'DocumentationsShow',

        props: ['CloseBurger'],

        data(){
            return{
                displayMenu: false,
                showDropdown: false,
            }
        },

        methods: {
        toggleMenu() {
            this.displayMenu = !this.displayMenu;
        },
        selectItemAndCloseBurger(){
            this.CloseBurger();
        }
    }
    }
</script>