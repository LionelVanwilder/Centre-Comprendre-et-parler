<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Audiologie</h2>
        <p>
            Le service audiologie du centre Comprendre et Parler assure l’évaluation et la mise au point des déficiences auditives, 
            l’adaptation des appareils auditifs, la programmation des implants cochléaires et le suivi audiologique / audioprothétique 
            des patients.
        </p>
        <p>
            L’équipe est composée de 5 audiologistes pédiatriques dont les spécialisations respectives couvrent l’ensemble du spectre de 
            l’activité (appareils auditifs “conventionnels”, implants cochléaires, systèmes FM, aides techniques d’aide à la communication, 
            audiologie clinique).
        </p>
        <p>
            La spécificité pédiatrique du service permet de sélectionner et d'adapter les techniques audiométriques les plus appropriées à 
            l'âge et aux capacités de l'enfant. Les appareils auditifs et les processeurs implants sont réglés avec rigueur et prudence pour les enfants dès le plus jeune âge.
        </p>
        <p>
            Notre pratique, notre expérience et nos procédures sont enrichies très régulièrement par nos rencontres et collaborations avec 
            d'autres équipes et par différentes formations et congrès.
        </p>
        <p>
            En collaboration avec toute l'équipe multidisciplinaire, nous suivons l'évolution des enfants en nous inscrivant dans la mission 
            générale du Centre Comprendre et Parler.
        </p>
    </div>

    </div>
    
</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'AudiologiePage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '/Competences', label: 'Compétences' },
                { to: '/Competences/Audiologie', label: 'Audiologie' }
                ]
            }
        }
    }
</script>
<style scoped>
    .Edu-container{
        margin: 0 6rem;
        padding: 1rem;
    }

    h4{
        margin: 2rem 0;
        font-size: 1.2rem;
        color: #222222;
        font-weight: 500;
        letter-spacing: 1.1px;
    }

    p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    }

    span{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    color:  #005387;
    font-weight: 600;
    
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

    @media all and (max-width: 769px){
    .Edu-container{
        margin: 0 2rem;
    }
}

@media all and (max-width: 600px){
    .Edu-container h1{
        font-size: 2rem;
    }

    .Edu-container h2{
        font-size: 1.5rem;
    }

    .Edu-container h3{
        font-size: 1.2rem;
    }
}

@media all and (max-width: 476px){

    .Edu-container{
        padding: 1rem;
    }
    .Edu-container h1{
        font-size: 1.7rem;
    }

    .Edu-container p{
        letter-spacing: 0.5px;
    }
}

@media all and (max-width: 426px){

.Edu-container{
    padding: 1rem;
}
.Edu-container h1{
    font-size: 1.5rem;
}




}
</style>