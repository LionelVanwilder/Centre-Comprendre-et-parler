<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>{{$t('AboutPage.title')}} "Comprendre et Parler"</h2>
        <p v-html="$t('AboutPage.content1')"></p>
        <p v-html="$t('AboutPage.content2')"></p>
        <div class="pages-paragraph">
            <h3>{{ $t('AboutPage.subtitle1') }}</h3>
            <p v-html="$t('AboutPage.content3')"></p>
        
        </div>

            
    
        
   </div>
    </div>
    
</template>

<script>

    import BreadCrumbCom from '../../breadcrumb.vue'
   

    export default{
        name: 'AboutusExpend',

        components: {
            BreadCrumbCom
        },

        

        computed: {
        breadcrumbs() {
            return [
                { to: '/', label: this.$t('breadcrumbs.home') },
                { to: '/Quisommesnous', label: this.$t('Aboutus.title') }
            ];
        }
    }
    }
</script>
<style scoped>
   h3{
    color: #222222;
   }
    
</style>