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

        data(){
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
                        {label: 'Audiologie', url: '/Competences/Audiologie'},
                        {label: 'Dépistage', url: '/Competences/Depistage'},
                        {label: 'Formations, évaluation et recherche', url: 'Instagram.com'},
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
    },

    methods: {
        toggle(index){
            this.activeDropdown = this.activeDropdown === index ? -1 : index;
        }
    }
}

    
</script>