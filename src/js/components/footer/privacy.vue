<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from "../breadcrumb.vue"

export default{
        name: 'PrivacyPage',

        components: {
            BreadCrumbCom,
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '', label: this.$t('navbar.links.collab') },
                { to: '/Collaborations/Autrescollaborations', label: this.$t('navbar.dropdown.collab.other') }
            ];
        }
    }
    }
</script>
<style scoped>
    .Edu-container{
        margin: 0 6rem;
        padding: 1rem;
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

    

    a{
        color: #005387;
        font-weight: 600;
        text-decoration: underline;
    }
    

@media all and (max-width: 769px){
    .Edu-container{
        margin: 0 2rem;
    }
}

@media all and (max-width: 600px){
   

    .Edu-container h2{
        font-size: 1.5rem;
    }

    
}

@media all and (max-width: 476px){

    .Edu-container{
        padding: 1rem;
    }
 

    .Edu-container p{
        letter-spacing: 0.5px;
    }
}

@media all and (max-width: 426px){

.Edu-container{
    padding: 1rem;
}





}
</style>