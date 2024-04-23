<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Le dépistage de la surdité</h2>
        <p>
            Le service Dépistage organise l’évaluation, la mise au point et le diagnostic de la surdité.  Ceci se réalise soit en maternité (CHIREC ; Edith Cavell à Uccle), 
            soit au Centre même.
        </p>
        <p>
            En cas d’antécédents familiaux de déficience auditive ou en cas d’éléments néo-nataux laissant présager un risque potentiel de perte auditive, l’équipe du 
            Centre assure le follow-up de l’enfant jusqu’au diagnostic de surdité ou l’exclusion de tout problème particulier.
        </p>
        <p>
            Chaque année, environ 3.000 bébés et jeunes enfants sont ainsi testés par l’équipe.  Le Centre accueille également des enfants dépistés dans d’autres services 
            de maternité ou via les consultations médicales.  Dans ce cas, l’équipe audio-médicale assure la confirmation du diagnostic de surdité et la mise au point, 
            en coordination étroite avec les hôpitaux et médecins extérieurs.
        </p>
    </div>
    </div>
    


</template>
<script>
    
    import BreadCrumbCom from '../../breadcrumb.vue'
    export default{
        name: 'DepistagePage',

        components: {
            BreadCrumbCom
        },

        data(){
                return{
                    breadcrumbs: [
                        {to: '/Programmes', label: 'Programmes'},
                        {to: '/Programmes/Depistage', label: 'Dépistage de la surdité'},
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