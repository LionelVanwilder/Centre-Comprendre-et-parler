<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Spécialisation</h2>
        <h3>Spécialisé maternelles</h3>
        <span>
            Ré-éducation coordonnée avec l’enseignement de « l’Ecole Intégrée » (Enseignement spécial type 7 avec intégration partielle par 
            association étroite avec écoles ordinaires)
        </span>
        <p>
            Ce programme Spécialisé Maternelles veille à assurer un enseignement spécial aux enfants de maternelles (B1), à audition déficiente et 
            dont la communication et le développement langagier ne sont pas encore suffisants pour leur permettre de suivre l'enseignement en 
            intégration partielle offerte:
        </p>
        <ol>
            <li>Par l'association étroite de l' « École Intégrée » avec une école ordinaire d'entendants (niveaux maternels et primaires B1 et B2 )</li>
            <li>par coopération avec plusieurs écoles ordinaires d'entendants (niveau secondaire B3).</li>
        </ol>
        <p>
            Son objectif est de développer et améliorer leurs capacités de communication orale tant sur le versant compréhension qu'expression de la parole, 
            tout en utilisant avec ceux dont les aptitudes à la communication orale sont plus faibles les moyens de communication par signes qui leur sont 
            nécessaires.
        </p>
        <p>
            Le programme vise à améliorer les modalités de communication parlée et visuelle entre parents et enfants.
        </p>

        <h3>Spécialisé primaires</h3>
        <span>
            Ré-éducation coordonnée avec l’enseignement de « l’Ecole Intégrée » (Enseignement spécial type 7 avec intégration partielle par association étroite avec 
            écoles ordinaires)
        </span>
        <p>
            Le programme Spécialisé Primaires veille à assurer un enseignement spécial aux enfants de primaires (B2), à audition déficiente et dont la communication 
            et le développement langagier ne sont pas encore suffisants pour leur permettre de suivre l'enseignement en intégration partielle offerte:
        </p>
        <ol>
            <li>par l'association étroite de l' « École Intégrée » avec une école ordinaire d'entendants (niveaux maternels et primaires B1 et B2 )</li>
            <li>par coopération avec plusieurs écoles ordinaires d'entendants (niveau secondaire B3).</li>
        </ol>
        <p>
            Son objectif est de développer et améliorer leurs capacités de communication orale tant sur le versant compréhension qu'expression de la parole, tout 
            en utilisant avec ceux dont les aptitudes à la communication orale sont plus faibles les moyens de communication par signes qui leur sont nécessaires.
        </p>
        <p>
            Le programme vise à améliorer les modalités de communication parlée et visuelle entre parents et enfants.
        </p>

        <h3>Secondaire et supérieur</h3>
        <span>
            Ré-éducation coordonnée avec l’enseignement de « l’Ecole Intégrée » (Enseignement spécial type 7 avec intégration partielle par association étroite avec écoles ordinaires)
        </span>
        <p>
            Le programme Spécialisé Secondaire/Supérieur  veille à assurer un enseignement spécial aux enfants de Secondaire et Supérieur (B3), à audition déficiente et dont 
            la communication et le développement langagier ne sont pas encore suffisants pour leur permettre de suivre l'enseignement en intégration partielle offerte:
        </p>
        <ol>
            <li>par l'association étroite de l' « École Intégrée » avec une école ordinaire d'entendants (niveaux maternels et primaires B1 et B2 )</li>
            <li>par coopération avec plusieurs écoles ordinaires d'entendants (niveau secondaire B3).</li>
        </ol>
        <p>
            Le programme vise à développer et améliorer leurs capacités de communication parlée tant sur le versant compréhension qu'expression de la parole, 
            tout en utilisant avec ceux dont les aptitudes à la communication orale sont plus faibles les moyens de communication par signes qui leur sont nécessaires.
        </p>
        <p>
            Son objectif est également de préparer les adolescents à audition déficiente (B3) à s'intégrer à l'ensemble de la société et à pouvoir librement choisir 
            quelle part d'eux-mêmes ils souhaitent consacrer à cette intégration et quelle part ils veulent consacrer à la communauté des sourds.
        </p>
        <p>
            Le programme veille à améliorer les modalités de communication parlée et visuelle entre parents et enfants.
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from '../../breadcrumb.vue'

export default{
        name: 'SpecialisationPage',

        components: {
            BreadCrumbCom
        },

        data(){
                return{
                    breadcrumbs: [
                        {to: '/Programmes', label: 'Programmes'},
                        {to: '/Programmes/Specialisation', label: 'Spécialisation'},
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

    h3{
        margin-bottom: 2rem !important;
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

    ol{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
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