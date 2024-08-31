<template>
   <div class="template-page-container">
    <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>{{ $t("mission.title") }}</h2>
        <h3>{{ $t("mission.subtitle") }}</h3>
        <p>{{ $t("mission.intro") }}</p>

        <h3>{{ $t("mission.subtitle2") }}</h3>
        <p>{{ $t("mission.listintro") }}</p>

        <div class="pages-paragraph">
               
                    <ol>
                        <li>{{ $t('mission.misslist1') }}</li>
                        <li>{{ $t('mission.misslist2') }}</li>
                        <li>{{ $t('mission.misslist3') }}</li>
                        <li>{{ $t('mission.misslist4') }}</li>
                        <li>{{ $t('mission.misslist5') }}</li>
                        <li>{{ $t('mission.misslist6') }}</li>
                    </ol>
                
            <h3>{{ $t("mission.values") }}</h3>
            <ol class="grid-list values">
                <li>{{ $t('mission.valueslist1') }}</li>
                <li>{{ $t('mission.valueslist2') }}</li>
                <li>{{ $t('mission.valueslist3') }}</li>
                <li>{{ $t('mission.valueslist4') }}</li>
                <li>{{ $t('mission.valueslist5') }}</li>
                <li>{{ $t('mission.valueslist6') }}</li>
                <li>{{ $t('mission.valueslist7') }}</li>
                <li>{{ $t('mission.valueslist8') }}</li>
            </ol>
        </div>
        
   </div>
   </div>
   
 </template>
 
 <script>
     
     import BreadCrumbCom from '../../breadcrumb.vue'
 
     export default {
     name: 'MissionPage',
     
     components: {
        BreadCrumbCom
     },



     computed: {
        breadcrumbs() {
            return [
                { to: '/', label: this.$t('breadcrumbs.home') },
                { to: '/Mission', label: this.$t('blocflex.cards.mission') }
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

    .grid-list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        grid-gap: 30px;
    }

    .values li{
        white-space: nowrap;
    }

    .values li:before{
        content: url('../../../../../../icons/heart-solid.svg');
        margin-right: 1rem;
    }
</style>