<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">{{ $t("navbar.links.program") }}</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/Programmes/EducationPrecoce" @click="selectItemAndCloseBurger('Educationprécoce')">{{ this.$t('navbar.dropdown.program.education') }}</router-link></li>
        <li><router-link to="/Programmes/Specialisation" @click="selectItemAndCloseBurger('Spécialisation')">{{ this.$t('navbar.dropdown.program.spec') }}</router-link></li>
        <li><router-link to="/Programmes/Integration" @click="selectItemAndCloseBurger('Intégration')">{{ this.$t('navbar.dropdown.program.integration') }}</router-link></li>
        <li><router-link to="/Programmes/ImplantsCochleaires" @click="selectItemAndCloseBurger('Implantscochléaire')">{{ this.$t('navbar.dropdown.program.implants') }}</router-link></li>
        <li><router-link to="/Programmes/Services" @click="selectItemAndCloseBurger('Services')">{{ this.$t('navbar.dropdown.program.services') }}</router-link></li>
        <li><router-link to="/Programmes/FormationsExterieures" @click="selectItemAndCloseBurger('Formationsextérieures')">{{ this.$t('navbar.dropdown.program.formations') }}</router-link></li>
        <li><router-link to="/Programmes/Depistage" @click="selectItemAndCloseBurger('Dépistagedelasurdité')">{{ this.$t('navbar.dropdown.program.screening') }}</router-link></li>
        <li><router-link to="/Programmes/ServicesExterieurs" @click="selectItemAndCloseBurger('Servicesextérieurs')">{{ this.$t('navbar.dropdown.program.external') }}</router-link></li>
    </ul>
</template>
<script>
    export default{
        name: 'ProgrammesShow',

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