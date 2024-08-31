<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">{{ $t("navbar.links.doc") }}</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/SAFP/Surdite" @click="selectItemAndCloseBurger('Surdite')">{{ this.$t('navbar.dropdown.doc.deafness') }}</router-link></li>
        <!--<li><router-link to="/">{{ this.$t('navbar.dropdown.doc.post') }}</router-link></li>
        <li><router-link to="/">{{ this.$t('navbar.dropdown.doc.link') }}</router-link></li>-->
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