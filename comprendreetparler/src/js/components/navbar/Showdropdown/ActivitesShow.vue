<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">{{ $t("navbar.links.activity") }}</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/">Langue des signes</router-link></li>
        <li><router-link to="/">LPC</router-link></li>
        <li><router-link to="/">Langue en mouvements</router-link></li>
        <li><router-link to="/">Activités vacances</router-link></li>
        <li><router-link to="/">Autres activités du Centre</router-link></li>
        <li><router-link to="/">Emploi - stage et bénévolat</router-link></li>
    </ul>
</template>
<script>
    export default{
        name: 'ActivitesShow',

        data(){
            return{
                displayMenu: false,
                showDropdown: false,
            }
        },

        methods: {
        toggleMenu() {
            this.displayMenu = !this.displayMenu;
        }
    }
    }
</script>