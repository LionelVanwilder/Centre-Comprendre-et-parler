<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Psychomotricité</h2>
        <p>
            Une partie des thérapies psychomotrices et des thérapies du développement est effectuée par des psychomotricien(ne)s ayant une 
            formation particulière pour ce type de thérapies. Les enfants à audition déficiente en âge de rééducation précoce  ou d'école 
            maternelle ont des difficultés particulières découlant de leur déficience auditive dans le développement psychomoteur général ou 
            en raison de fréquents troubles de l'équilibre associé à la déficience auditive (par une atteinte vestibulaire) et d'une mauvaise 
            perception des rythmes et de l'espace.
        </p>
        <p>
            Les enfants à audition déficiente en âge de rééducation précoce ou d'école maternelle présentent aussi des troubles particuliers 
            d'adaptation aux relations et activités de groupe. C'est pourquoi ces enfants requièrent soit des séances de thérapie psychomotrice 
            individuelle, soit des séances collectives axées les unes sur le développement psychomoteur général, les autres sur la rééducation 
            psychomotrice relationnelle.
        </p>
        <p>
            Le rôle du psychomotricien est de chercher à modifier l’attitude de l’enfant sourd par rapport à son corps pour tenter d’établir, 
            de rétablir, de maintenir et d’enrichir ses rapports avec lui-même, avec autrui et avec son environnement. Le champ d’application 
            comprend pour l’essentiel les troubles qui s’expriment par des perturbations psychomotrices d’une part, et ceux pour lesquels 
            l’approche du corps paraît la seule possible ou la meilleure à un moment précis d’autre part.
        </p>
        <p>
            Le rôle du psychomotricien réside dans l’attention qu’il porte aux manifestations corporelles et à leurs significations, ainsi que 
            dans l’établissement d’un dialogue corporel.
        </p>
        <p>
            Le psychomotricien soutient l’enfant dans la mise en place des repères instrumentaux ainsi que dans la construction de son unité 
            corporelle et psychique, afin d’établir des bases solides indispensables aux apprentissages et au développement harmonieux de 
            l’enfant.  Cette mission s'inscrit dans celle plus générale du centre Comprendre et Parler qui vise à développer les potentialités 
            et les compétences linguistiques de l'enfant sourd, ainsi que de favoriser son épanouissement personnel et son autonomie.
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'PsychomotricitePage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '/Competences', label: 'Compétences' },
                { to: '/Competences/Psychomotricite', label: 'Psychomotricité' }
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