<template>

    <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Intégration</h2>
        <span>
            Ré-éducation coordonnée avec l’enseignement de « l’Ecole Intégrée » (Enseignement spécial type 7 avec intégration partielle 
            par association étroite avec écoles ordinaires)
        </span>
        <p>
            Le programme Intégration  veille à permettre aux enfants et adolescents dont la communication et le langage ont commencé à 
            évoluer favorablement de continuer à améliorer leurs possibilités de compréhension et d'expression orales.
        </p>
        <p>
            Son objectif est de leur permettre de suivre l'enseignement en intégration dans l'enseignement ordinaire, premier stade de 
            leur intégration sociale générale, en leur assurant des conditions adéquates de communication, y compris pour ceux à déficience 
            auditive profonde l'indispensable soutien des interprètes en communication visuelle, jouant un rôle essentiel d'aide à la communication.
        </p>
    </div>


</template>
<script>
    
    import BreadCrumbCom from '../../breadcrumb.vue'
    export default{
        name: 'IntegrationPage',

        components: {
            BreadCrumbCom
        },

        data(){
                return{
                    breadcrumbs: [
                        {to: '/Programmes', label: 'Programmes'},
                        {to: '/Programmes/Integration', label: 'Intégration'},
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

    h2{
        margin-bottom: 2rem;
    }

    p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    }

    span{
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