<template>
    <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Accompagnements</h2>
        <h4>Enfants de 0 à 3 ans à déficience auditive moyenne, sévère ou profonde, éventuellement associée à d'autres handicaps</h4>
        <p>
            Ce programme Education précoce appelé aussi Home training s'adresse aux enfants de 0 à 3 ans à déficience auditive moyenne, 
            sévère ou profonde, éventuellement associée à d'autres handicaps. Le programme (A1) vise à développer la communication et le 
            langage de l'enfant en stimulant au maximum ses capacités d'audition résiduelle et de perception visuelle de la parole et des 
            signes manuels.
        </p>
        <p>
            Son objectif est également d'accompagner les parents sur le plan psychologique, leur apprendre les moyens de communication parlés 
            ou visuels pour les rendre autonomes et aptes à développer le langage de leur enfant.
        </p>

        <span>
            Enfants entendants vivant dans un foyer composé uniquement de personnes atteintes de déficience auditive sévère ou profonde communiquant 
            entre elles par la langue des signes.
        </span>
        <p>
            En ce qui concerne les enfants entendants vivant dans un foyer composé uniquement de personnes atteintes de déficience auditive sévère ou 
            profonde communiquant entre elles par la langue des signes, le programme (A2) vise à stimuler les capacités auditives normales de l'enfant 
            et à créer autour de lui les conditions nécessaires au développement de son langage et de sa parole.
        </p>
        <p>
            Son objectif est également d'aider les parents à communiquer avec leur enfant et à adopter les attitudes propres à favoriser le développement de son langage.
        </p>
    </div>

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'AccompagnementPage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '/Competences', label: 'Compétences' },
                { to: '/Competences/Accompagnements', label: 'Accompagnements' }
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
    font-style: italic;
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