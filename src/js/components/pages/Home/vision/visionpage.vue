<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
   <div class="Pages-container-content">
        <h2>{{ $t('vision.title') }}</h2>
        <h3>{{ $t('vision.subtitle') }}</h3>
        <p>
            {{ $t('vision.content1') }}
        </p>

        <h3></h3>
            <div class="pages-paragraph">
                <p v-html="$t('vision.content2')"></p>
                <p v-html="$t('vision.content3')"></p>
                <p v-html="$t('vision.content4')"></p>
                <p v-html="$t('vision.content5')"></p>
                <p v-html="$t('vision.content6')"></p>
                <p v-html="$t('vision.content7')"></p>
                <p v-html="$t('vision.content8')"></p>
            </div>
   </div>
    </div>
   
</template>

<script>
    
    import BreadCrumbCom from '../../breadcrumb.vue'

    export default {
    name: 'VisionPage',
    
    components: {
        BreadCrumbCom
    },
    data(){
                return{
                    breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/Vision', label: 'Statut et vision'},
                    ]
                }
            }

    }
</script>