<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">{{ $t("navbar.links.activity") }}</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/">{{ this.$t('navbar.dropdown.activity.sign') }}</router-link></li>
        <li><router-link to="/">{{ this.$t('navbar.dropdown.activity.speech') }}</router-link></li>
        <li><router-link to="/">{{ this.$t('navbar.dropdown.activity.lang') }}</router-link></li>
        <li><router-link to="/">{{ this.$t('navbar.dropdown.activity.vac') }}</router-link></li>
        <li><router-link to="/">{{ this.$t('navbar.dropdown.activity.other') }}</router-link></li>
        <li><router-link to="/">{{ this.$t('navbar.dropdown.activity.job') }}</router-link></li>
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