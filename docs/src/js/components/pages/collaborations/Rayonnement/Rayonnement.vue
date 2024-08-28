<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Rayonnement du centre</h2>
        <p>
            <span>Colloque des 1° et 2 juin 2012:</span><br>
            Les 1ers et 2 juin 2012, l'équipe du Centre Comprendre et Parler a organisé à l'Université Libre de Bruxelles 
            ULB un colloque sur le thème de "L'accompagnement multidisciplinaire de l'enfant sourd, une dynamique en mouvement" 
            auquel ont participé près de 400 personnes.
        </p>
        <p>
            <span>Articles presse</span><br>
            La Libre.be: <a href="" style="text-decoration: underline;">Acquérir le français plus facilement</a>. (Article du 30 juillet 2012)
        </p>
        <p style="font-style: italic;">
            "Contrairement à ce que nous pourrions penser, des études témoignent que les élèves de 2e ou 3e génération ne parlent pas mieux 
            et même souvent moins bien que la génération qui les précède."
        </p>
        <p>
            <span style="color: #222222">
                A Bruxelles, près d’un enfant sur deux naît d’une mère non-belge à l’accouchement. Leur langue première n’est donc pas la langue 
                de l’enseignement...
            </span>
        </p>
        <p>
            <span>
                Publications:
            </span>
            <br>
            <a href="" style="text-decoration: underline;">Publications des membres du Centre</a>
        </p>
        <p>
            <span>
                Prix honorifiques:
            </span>
            <br>
            <a href="" style="text-decoration: underline;">Le Prix Herman Houtman pour l’enfance en difficulté</a>
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'RayonnementPage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '/', label: 'Collaborations' },
                { to: '/Collaborations/Rayonnement', label: 'Rayonnement du centre' }
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