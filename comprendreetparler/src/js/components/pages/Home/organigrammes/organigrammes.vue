<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>Organnigramme</h2>
        <h3>Les organisations professionnelles</h3>
        <p>
            Le Centre est structuré en interne en équipes professionnelles ayant chacune des compétences s'exerçant dans les différents domaines 
            d'activités multidisciplinaires selon les programmes et les services offerts
        </p>

        <p>
            <span>La direction : </span>
        </p>

        <div class="card-grid-container">
            <div class="orga-card">
                <div class="orga-card-image-container">
                    <img src="../../../../../../images/banner.avif">
                </div>
                <div class="orga-card-content">

                </div>
            </div>
        </div>
   </div>
    </div>
    
 </template>
 
 <script>
     
     import BreadCrumbCom from '../../breadcrumb.vue'
 
     export default {
     name: 'OrgaPage',
     
     components: {
        BreadCrumbCom
    },

    data(){
        return{
            breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/Organigrammes', label: 'Organigrammes'},
                    ]
        }
    }
 
 }
 </script>

 <style scoped>
    ol{
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: center;
        align-items: flex-start;
        margin: auto;
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

    .card-grid-container{
        width: 60%;
        /*max-width: 1170px;*/
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
        overflow: hidden;
        margin: 2rem 0;

    }

    .photo-container{
        overflow: hidden;
        

    }

    .photo-container img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        transition: .3s ease-in-out;
    }

   /* .photo-container:hover img{
        transform: scale(1.2);
        transition: .3s ease-in-out;
    }*/

    .orga-posts-container{
        width: 60%;
        max-width: 1170px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 50px;
        overflow: hidden;
        margin: 2rem 0;
        align-items: start;
    }

    .orga-posts-container p{
        order: 1;
    }

    .orga-posts-container img{
        order: 2;
    }

    @media all and (max-width: 1024px){
        .orga-posts-container{
           grid-template-columns: 1fr;
           width: 40%;
        }
    }
    
</style>