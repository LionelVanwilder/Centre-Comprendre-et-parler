<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">{{ $t("navbar.links.collab") }}</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/Collaborations/Partenaires" @click="selectItemAndCloseBurger('Partenairesprivilégiés')">{{ this.$t('navbar.dropdown.collab.partner') }}</router-link></li>
        <li><router-link to="/Collaborations/Autrescollaborations" @click="selectItemAndCloseBurger('Autrescollaborations')">{{ this.$t('navbar.dropdown.collab.other') }}</router-link></li>
        <li><router-link to="/Collaborations/Rayonnement" @click="selectItemAndCloseBurger('Rayonnement')">{{ this.$t('navbar.dropdown.collab.influence') }}</router-link></li>
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