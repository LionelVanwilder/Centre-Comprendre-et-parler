<template>
    <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>Organnigramme</h2>
        <h3>Les organisations professionnelles</h3>
        <p>
            Le Centre est structuré en interne en équipes professionnelles ayant chacune des compétences s'exerçant dans les différents domaines 
            d'activités multidisciplinaires selon les programmes et les services offerts
        </p>

        <p>
            <span>La direction : </span>
        </p>

        <div class="image-grid-container">
            <div class="photo-text-container">
                <div class="photo-container">
                    <img src="../../../../../../images/banner.avif">
                   
                </div>
                <p>
                        La direction opérationnelle est assurée par <span> Brigitte Charlier</span>
                    </p>
            </div>
            <div class="photo-text-container">
                <div class="photo-container">
                    <img src="../../../../../../images/banner.avif">  
                </div>
                <p>
                    La direction médicale est assurée par <span>Chantal Ligny</span>
                </p>
            </div>
        </div>
        
        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Logopèdes, animateurs en langue des signes, puéricultrice : </span>
                <br>
                développement de la communication et du langage. L'équipe des logopèdes et animateurs en 
                langue des signes est dirigée par Nathalie Balon, Cathy Van Vlierberghe responsable faisant 
                fonction
            </p>
            
        </div>

        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Assistantes sociales : </span>
                <br>
                accompagnement des familles d'enfant sourd et des jeunes adultes sourds, conseils et orientation dans leurs démarches, 
                en axant les interventions de manière privilégiée sur l'autonomie.
            </p>
            
        </div>

        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Psychologues et psychomotriciennes : </span>
                <br>
                développement des potentialités de l'enfant sourd afin de favoriser son épanouissement personnel et son autonomie.
            </p>
            
        </div>

        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Médecins : </span>
                <br>
                diagnostic, consultations, soins, mises au point, dépistage, recherche continue et mise en œuvre des moyens les plus efficaces pour améliorer la rééducation.
            </p>
            
        </div>

        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Interprètes : </span>
                <br>
                stimulation linguistique de l’enfant en intégration scolaire en utilisant des moyens visuels de du communication, LPC et langue des signes..
            </p>
            
        </div>

        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Audiologues : </span>
                <br>
                examens complémentaires nécessaires à l'évaluation et au diagnostic, appareillage auditif ou électro-cochléaire 
                (implant cochléaire), mises au point et réglages, suivi auditif des enfants et adultes sourds en collaboration avec les médecins.
            </p>
            
        </div>

        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Service d'Accompagnement Pédagogique : </span>
                <br>
                accompagnement de jeunes étudiants qui suivent un enseignement supérieur, universitaire ou un cadre de formations complémentaires”.
            </p>
            
        </div>

        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Formation-Evaluations-Recherches : </span>
                <br>
                formations, liens avec les unités de recherche des universités, coloc,...
            </p>
            
        </div>
        
        <div class="orga-posts-container">
            <div class="photo-container">
                <img src="../../../../../../images/banner.avif">
            </div>
            <p>
                <span>Services Administratifs : </span>
                <br>
                accueil, administration, finances, comptabilité, gestion des contrats du personnel, des assurances,...
            </p>
            
        </div>
   </div>
 </template>
 
 <script>
     
     import BreadCrumbCom from '../../breadcrumb.vue'
 
     export default {
     name: 'OrgaPage',
     
     components: {
        BreadCrumbCom
    },

    data(){
        return{
            breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/Organigrammes', label: 'Organigrammes'},
                    ]
        }
    }
 
 }
 </script>

 <style scoped>
    ol{
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: center;
        align-items: flex-start;
        margin: auto;
        padding: 1rem 0;
    }
    ol li{
        margin: 1.5rem 0;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    ol li:before{
        content: url('../../../../../../icons/check-solid.svg');
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin: 0 .2rem;
    }

    .image-grid-container{
        width: 60%;
        max-width: 1170px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
        overflow: hidden;
        margin: 2rem 0;

    }

    .photo-container{
        overflow: hidden;
        

    }

    .photo-container img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        transition: .3s ease-in-out;
    }

   /* .photo-container:hover img{
        transform: scale(1.2);
        transition: .3s ease-in-out;
    }*/

    .orga-posts-container{
        width: 60%;
        max-width: 1170px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
        overflow: hidden;
        margin: 2rem 0;
        align-items: start;
    }

    .orga-posts-container p{
        order: 1;
    }

    .orga-posts-container img{
        order: 2;
    }

    @media all and (max-width: 1024px){
        .orga-posts-container{
           grid-template-columns: 1fr;
           width: 40%;
        }
    }
    
</style>