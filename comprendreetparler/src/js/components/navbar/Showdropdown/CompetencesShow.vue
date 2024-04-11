<template>
    <li class="burger-links" @click="this.showDropdown = !this.showDropdown">Compétences</li>
    <ul v-if="this.showDropdown" class="burger-dropdown-links">
        <li><router-link to="/Competences/Accompagnements" @click="selectItemAndCloseBurger('Accompagnements')">Accompagnements</router-link></li>
        <li><router-link to="/Competences/AssistancesSociales" @click="selectItemAndCloseBurger('Assistancesociale')">Assistance sociale</router-link></li>
        <li><router-link to="/Competences/Audiologie" @click="selectItemAndCloseBurger('Audiologie')">Audiologie</router-link></li>
        <li><router-link to="/Competences/Depistage" @click="selectItemAndCloseBurger('Dépistage')">Dépistage</router-link></li>
        <li><router-link to="/">Formations, évaluation et recherche</router-link></li>
        <li><router-link to="/">Aides visuelles à la communication</router-link></li>
        <li><router-link to="/Competences/Logopedie" @click="selectItemAndCloseBurger('Logopédie')">Logopédie</router-link></li>
        <li><router-link to="/Competences/Medecins" @click="selectItemAndCloseBurger('Médecins')">Médecins - ORL</router-link></li>
        <li><router-link to="/">Psychologie et neuropsychologie</router-link></li>
        <li><router-link to="/Competences/Psychomotricite" @click="selectItemAndCloseBurger('Psychomotricite')">Psychomotricité</router-link></li>
        <li><router-link to="/">Services administratifs et financiers</router-link></li>
    </ul>
</template>
<script>
    export default{
        name: 'CompetencesShow',

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