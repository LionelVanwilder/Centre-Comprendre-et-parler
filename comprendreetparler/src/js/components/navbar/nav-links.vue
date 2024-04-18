<template>
    <ul class="nav-links-ul">
        <li v-for="(item, index) in dropdowns" :key="index" class="nav-links-ul-li">
            <router-link :to="item.path" @mouseover="toggle(index)" class="nav-hover">{{ item.title }}</router-link>
            <ul class="dropdown fadein" v-if="activeDropdown === index"  @mouseleave="toggle(index)">
                <li v-for="(link, linkIndex) in item.links" :key="linkIndex"><router-link :to="link.url">{{ link.label }} </router-link></li>
            </ul>
        </li><br>
    </ul>
</template>
<script>
    export default{

        name: "NavLinks",

        computed: {
            dropdowns(){

                return[
                { 
                    title: this.$t('navbar.links.program'), 
                    path: '/Programmes',
                    
                    links: [
                        {label: this.$t('navbar.dropdown.program.education'), url: '/Programmes/EducationPrecoce'},
                        {label: this.$t('navbar.dropdown.program.spec'), url: '/Programmes/Specialisation'},
                        {label: this.$t('navbar.dropdown.program.integration'), url: '/Programmes/Integration'},
                        {label: this.$t('navbar.dropdown.program.implants'), url: '/Programmes/ImplantsCochleaires'},
                        {label: this.$t('navbar.dropdown.program.services'), url: '/Programmes/Services'},
                        {label: this.$t('navbar.dropdown.program.formations'), url: '/Programmes/FormationsExterieures'},
                        {label: this.$t('navbar.dropdown.program.screening'), url: '/Programmes/Depistage'},
                        {label: this.$t('navbar.dropdown.program.external'), url: '/Programmes/ServicesExterieurs'}
                    ] 
                },

                { 
                    title: this.$t('navbar.links.skills'),
                    path: '/Competences', 
                    
                    links: [
                        {label: this.$t('navbar.dropdown.skills.acc'), url: '/Competences/Accompagnements'},
                        {label: this.$t('navbar.dropdown.skills.assistance'), url: '/Competences/AssistancesSociales'},
                        {label: this.$t('navbar.dropdown.skills.audio'), url: '/Competences/Audiologie'},
                        {label: this.$t('navbar.dropdown.skills.research'), url: 'Instagram.com'},
                        {label: this.$t('navbar.dropdown.skills.help'), url: 'Instagram.com'},
                        {label: this.$t('navbar.dropdown.skills.logo'), url: '/Competences/Logopedie'},
                        {label: this.$t('navbar.dropdown.skills.doctor'), url: '/Competences/Medecins'},
                        {label: this.$t('navbar.dropdown.skills.psychology'), url: 'Instagram.com'},
                        {label: this.$t('navbar.dropdown.skills.psychomotor'), url: '/Competences/Psychomotricite'},
                        {label: this.$t('navbar.dropdown.skills.financial'), url: 'Instagram.com'}
                    ] 
                },

                { 
                    title: this.$t('navbar.links.collab'), 
                    path: '',
                    
                    links: [
                        {label: this.$t('navbar.dropdown.collab.partner'), url: '/Collaborations/Partenaires'},
                        {label: this.$t('navbar.dropdown.collab.other'), url: '/Collaborations/Autrescollaborations'},
                        {label: this.$t('navbar.dropdown.collab.influence'), url: '/Collaborations/Rayonnement'}
                    ] 
                },

                { 
                    title: this.$t('navbar.links.doc'), 
                    path: '/Programmes',
                    
                    links: [
                        {label:  this.$t('navbar.dropdown.doc.deafness'), url: '/Documentations/Surdite'},
                        {label: this.$t('navbar.dropdown.doc.post'), url: 'Instagram.com'},
                        {label: this.$t('navbar.dropdown.doc.link'), url: '/'}
                    ] 
                },

                { 
                    title: this.$t('navbar.links.activity'),
                    path: '/Programmes', 
                    
                    links: [
                        {label: this.$t('navbar.dropdown.activity.sign'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.speech'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.lang'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.vac'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.other'), url: '/'},
                        {label: this.$t('navbar.dropdown.activity.job'), url: '/'}
                    ] 
                }
                ]
            }


        },

        /*data(){
        return{
            dropdowns: [
                
                { 
                    title: 'Programmes', 
                    path: '/Programmes',
                    
                    links: [
                        {label: 'Education précoce', url: '/Programmes/EducationPrecoce'},
                        {label: 'Spécialisation', url: '/Programmes/Specialisation'},
                        {label: 'Intégration', url: '/Programmes/Integration'},
                        {label: 'Implants cochléaire', url: '/Programmes/ImplantsCochleaires'},
                        {label: 'Services', url: '/Programmes/Services'},
                        {label: 'Formations extérieures', url: '/Programmes/FormationsExterieures'},
                        {label: 'Dépistage de la surdité', url: '/Programmes/Depistage'},
                        {label: 'Services extérieurs', url: '/Programmes/ServicesExterieurs'}
                    ] 
                },

                { 
                    title: 'Compétences',
                    path: '/Competences', 
                    
                    links: [
                        {label: 'Accompagnements', url: '/Competences/Accompagnements'},
                        {label: 'Assistance sociale', url: '/Competences/AssistancesSociales'},
                        {label: 'Audiologie', url: '/Competences/Audiologie'},*/
                        /*{label: 'Dépistage', url: '/Competences/Depistage'},*/
                        /*{label: 'Formations, évaluation et recherche', url: 'Instagram.com'},
                        {label: 'Aides visuelles à la communication', url: 'Instagram.com'},
                        {label: 'Logopédie', url: '/Competences/Logopedie'},
                        {label: 'Médecins - ORL', url: '/Competences/Medecins'},
                        {label: 'Psychologie et neuropsychologie', url: 'Instagram.com'},
                        {label: 'Psychomotricité', url: '/Competences/Psychomotricite'},
                        {label: 'Services administratifs et financiers', url: 'Instagram.com'}
                    ] 
                },

                { 
                    title: 'Collaborations', 
                    path: '',
                    
                    links: [
                        {label: 'Partenaires privilégiés', url: '/Collaborations/Partenaires'},
                        {label: 'Autres collaborations', url: '/Collaborations/Autrescollaborations'},
                        {label: 'Rayonnement du centre', url: '/Collaborations/Rayonnement'}
                    ] 
                },

                { 
                    title: 'Documentation', 
                    path: '/Programmes',
                    
                    links: [
                        {label: 'Surdité', url: '/Documentations/Surdite'},
                        {label: 'Publication', url: 'Instagram.com'},
                        {label: 'Autres liens utiles', url: '/'}
                    ] 
                },

                { 
                    title: 'Activités',
                    path: '/Programmes', 
                    
                    links: [
                        {label: 'Langue des signes', url: '/'},
                        {label: 'LPC', url: '/'},
                        {label: 'Langue en mouvements', url: '/'},
                        {label: 'Activités vacances', url: '/'},
                        {label: 'Autres activités du Centre', url: '/'},
                        {label: 'Emploi - stage et bénévolat', url: '/'}
                    ] 
                }
            ],
            activeDropdown: -1
        }
    },*/

    data(){
        return{
            activeDropdown: -1
        }
    },

    methods: {
        toggle(index){
            this.activeDropdown = this.activeDropdown === index ? -1 : index;
        }
    }
}

    
</script>