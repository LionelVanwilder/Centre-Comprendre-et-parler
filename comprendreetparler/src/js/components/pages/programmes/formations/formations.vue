<template>

<BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Formations extérieures</h2>
        <p>
            Le service Formations extérieures a pour but d’organiser des formations dans le domaine de la surdité ou encore celui de la méthode de « La langue en Mouvements ».
        </p>
        <p>
            Le Centre organise ces formations à l’attention d’enseignants du réseau « ordinaire », de logopèdes, de puéricultrices, de soignants, de rééducateurs 
            ou de toutes personnes impliquées de près ou de loin dans le domaine de la surdité. Il est également possible de suivre une formation de base ou une
             post formation dans le domaine de la « Langue en mouvements », méthode dynamique d’ "éducation phonologique" pour enfants ou adultes exposés à plusieurs 
             langues parlées dans leur famille ou à l’école.
        </p>
    </div>


</template>
<script>
    
    import BreadCrumbCom from '../../breadcrumb.vue'
    export default{
        name: 'FormationsPage',

        components: {
            BreadCrumbCom,
        },

        data(){
                return{
                    breadcrumbs: [
                        {to: '/Programmes', label: 'Programmes'},
                        {to: '/Programmes/FormationsExterieures', label: 'Formations extérieures'},
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