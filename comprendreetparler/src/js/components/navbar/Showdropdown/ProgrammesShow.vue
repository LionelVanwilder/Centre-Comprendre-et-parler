<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">Programmes</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/Programmes/EducationPrecoce" @click="selectItemAndCloseBurger('Educationprécoce')">Education précoce</router-link></li>
        <li><router-link to="/Programmes/Specialisation" @click="selectItemAndCloseBurger('Spécialisation')">Spécialisation</router-link></li>
        <li><router-link to="/Programmes/Integration" @click="selectItemAndCloseBurger('Intégration')">Intégration</router-link></li>
        <li><router-link to="/Programmes/ImplantsCochleaires" @click="selectItemAndCloseBurger('Implantscochléaire')">Implants cochléaire</router-link></li>
        <li><router-link to="/Programmes/Services" @click="selectItemAndCloseBurger('Services')">Services</router-link></li>
        <li><router-link to="/Programmes/FormationsExterieures" @click="selectItemAndCloseBurger('Formationsextérieures')">Formations extérieures</router-link></li>
        <li><router-link to="/Programmes/Depistage" @click="selectItemAndCloseBurger('Dépistagedelasurdité')">Dépistage de la surdité</router-link></li>
        <li><router-link to="/Programmes/ServicesExterieurs" @click="selectItemAndCloseBurger('Servicesextérieurs')">Services extérieurs</router-link></li>
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