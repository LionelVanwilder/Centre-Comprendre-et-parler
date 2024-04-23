<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Services</h2>
        <h3>Service d’appui à la formation professionnelle</h3>
        <p>
            Pour les enfants avec Implants cochléaires, l'objectif du programme est de leur permettre de mieux développer leurs capacités de communication 
            et de développement du langage, et améliorer ainsi leurs possibilités d'intégration au niveau scolaire et dans la société en général.
        </p>

        <h3>Service d’accompagnement pédagogique</h3>
        <p>
            Le Service d’Accompagnement Pédagogique offre quant à lui de l’aide aux étudiants sourds inscrits dans une formation supérieure universitaire 
            ou non-universitaire, sous forme de coordination de projet, accompagnement pédagogique, prises de notes, et interprétation des cours. 
            Le suivi dans ce cadre est soumis à l’approbation préalable du projet de l’étudiant par les pouvoirs subsidiants (PHARE, AWIPH,..).
        </p>
    </div>

    </div>
    

</template>
<script>
    
    import BreadCrumbCom from '../../breadcrumb.vue'
    export default{
        name: 'ServicesPage',

        components: {
            BreadCrumbCom
        },

        data(){
                return{
                    breadcrumbs: [
                        {to: '/Programmes', label: 'Programmes'},
                        {to: '/Programmes/Services', label: 'Services'},
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