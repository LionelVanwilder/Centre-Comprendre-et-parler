<template>
    <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Dépistage</h2>
        <p>
            Sous la responsabilité de l'équipe médicale, le Centre assure le dépistage de la déficience auditive.
        </p>
        <p>
            Le dépistage dès la naissance ou en maternité, le dépistage des troubles précoces de l'audition, la mise au point en cas de 
            doutes ou de perte progressive de l'audition se font en coordination étroite avec le milieu hospitalier
        </p>
        <p>
            Les observations comportementales, les oto-émissions, les potentiels évoqués du tronc cérébral (BERA), les examens ORL, 
            les audiométries,.....sont autant de moyens d'objectiver une éventuelle déficience auditive.
        </p>
        <p>
            Le dépistage des troubles de l'audition s'accompagne d'une mise au point coordonnée entre tous les intervenants , et la 
            participation d'un/e psychologue aux premiers entretiens, ainsi que des entrevues avec un/e logopède pour les premiers conseils 
            et soutiens envers la famille de l'enfant. Le service de dépistage a pour mission l’évaluation, la mise au point et le diagnostic 
            de la surdité majoritairement dès la naissance mais aussi à tout âge. L’équipe du centre assure le follow-up de l’enfant jusqu’à 
            la confirmation du diagnostic de surdité ou l’exclusion de toute difficulté particulière en ce domaine. Elle assure en suite une 
            transition entre le service de dépistage et l’équipe d’éducation/rééducation. La précocité de l’accompagnement est déterminante 
            dans l’émergence ultérieure des compétences de l’enfant sourd. La mission du service de dépistage s’inscrit dès lors dans celle 
            plus générale qui vise à développer au maximum les potentialités et les compétences linguistiques de l’enfant sourd tout en 
            favorisant son épanouissement personnel et son autonomie. »
        </p>
        <p>
            Chaque année, environ 3.000 bébés et jeunes enfants sont ainsi testés par l’équipe.  Le centre accueille également des enfants 
            dépistés dans d’autres services de maternité ou via les consultations médicales.  Dans ce cas, l’équipe audio-médicale assure 
            la confirmation du diagnostic de surdité et la mise au point, en coordination étroite avec les hôpitaux et médecins extérieurs.
        </p>
    </div>

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'DepistageCompetence',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '/Competences', label: 'Compétences' },
                { to: '/Competences/Depistage', label: 'Dépistage' }
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