<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">{{ $t("navbar.links.collab") }}</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/Collaborations/Partenaires" @click="selectItemAndCloseBurger('Partenairesprivilégiés')">Partenaires privilégiés</router-link></li>
        <li><router-link to="/Collaborations/Autrescollaborations" @click="selectItemAndCloseBurger('Autrescollaborations')">Autres collaborations</router-link></li>
        <li><router-link to="/Collaborations/Rayonnement" @click="selectItemAndCloseBurger('Rayonnement')">Rayonnement du centre</router-link></li>
    </ul>
</template>
<script>
    export default{
        name: 'CollaborationsShow',

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