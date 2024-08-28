<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>Le Centre "Comprendre et Parler"</h2>
        <p>
            Le Centre Comprendre et Parler est une ASBL fondée en 1965 par le Docteur Olivier Périer et des 
            parents d'enfants sourds ou malentendants soucieux d'offrir à leurs enfants une éducation de haut niveau. <br>
            Son statut est celui de “Centre de Réadaptation Fonctionnelle”, "Service d’Accompagnement Pédagogique", 
            "Centre d’Orientation Spécialisé".
        </p>
        <p>
            Le Centre accueille actuellement pas moins de 600 enfants de tous âges et de tous milieux socio-économiques 
            ou culturels. <br>Une équipe motivée de 110 personnes aux compétences multidisciplinaires assure 
            l'accompagnement des enfants et de leurs familles.


        </p>
        <div class="pages-paragraph">
            <h3>Notre équipe</h3>
            <p>
            <span>Notre équipe est constituée de : </span><br>
        </p>
        
        </div>
       
            <ol>
                <li v-for="(item, index) in RouterList" class="list-routerlink" :key="index"><router-link :to="item.path">{{ item.job }}</router-link></li>
            </ol>

            
    
        
   </div>
    </div>
    
</template>

<script>

    import BreadCrumbCom from '../../breadcrumb.vue'
   

    export default{
        name: 'AboutusExpend',

        components: {
            BreadCrumbCom
        },

        data(){
                return{
                    RouterList: [
                        {job: 'Logopèdes', path: '/Competences/Logopedie'},
                        {job: 'Assistants sociaux', path: '/'},
                        {job: 'Psychologues', path: '/'},
                        {job: 'Médecins', path: '/'},
                        {job: 'Audiciens et Audiologues', path: '/'},
                        {job: 'Interprètes', path: '/'},
                        {job: 'Conseillers en Centre d’Orientation Spécialisé et Service d’Aide Pédagogique', path: '/'},
                        {job: 'Psychomotriciens', path: '/'},
                        {job: 'Personnel spécialisé dans le Dépistage', path: '/'},
                        {job: 'Personnel spécialisé dans la Formation, l\'Evaluation et la Recherche', path: '/'},
                        {job: 'Personnel de l’Administration, l’Informatique et la Logistique', path: '/'}
                    ],

                    breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/Quisommesnous', label: 'Qui sommes nous ?'},
                    ]
                }
            }
    }
</script>
<style scoped>
    ol{
       
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        grid-gap: 50px;
        padding: 1rem 0;
        align-items: start;
        
    }
    ol a{
        color: #ffffff;
        color: #ffffff;
        transition: all .2s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0;
        line-height: 1.5;
        letter-spacing: 1px;
        background-color: #005387;
        padding: 0.6rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        min-height: 180px;
        text-align: center;
        transition: .3s ease-out;
    }

    ol a:hover{
        transform: translateY(-10px);
        transition: .3s ease-out;
        background-color: #005387;
    }

    
    
</style>