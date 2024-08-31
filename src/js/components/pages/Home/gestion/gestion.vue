<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>{{ $t('gestion.title') }}</h2>
        <p>
            <span>{{ $t('gestion.span1') }}</span> 
            {{ $t('gestion.content1') }}
        </p>

        <p>
            <span>{{ $t('gestion.span2') }}</span>
            {{ $t('gestion.content2') }}
            <br>
           
        </p>
        <p>
            <span>{{ $t('gestion.span3') }}</span> 
            {{ $t('gestion.content3') }}
        </p>

        
        

        <p> {{ $t('gestion.content4') }}</p>
        

        <p>
            <span>{{ $t('gestion.span4') }}</span> 
            {{ $t('gestion.content5') }}
        </p>
   </div>
    </div>
    
 </template>
 
 <script>
    import BreadCrumbCom from '../../breadcrumb.vue'

     export default {
     name: 'GestionPage',
     
     components: {
        BreadCrumbCom,
    },


        computed: {
        breadcrumbs() {
            return [
                { to: '/', label: this.$t('breadcrumbs.home') },
                { to: '/OrganesdeGestion', label: this.$t('blocflex.cards.gestion') }
            ];
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

    .gestion-grid-container{
        width: 100%;
        max-width: 1200px;
        display: grid;
        grid-gap: 50px;
        grid-template-columns: repeat(3, 1fr);
        margin: auto;
       padding: 3rem 0;
    }

    .gestion-grid-container img{
        height: 100%;
        width: 100%;
    }

    @media all and (max-width: 769px){
        .gestion-grid-container{
            grid-template-columns: 1fr;
            width: 80%;
        }
    }
</style>