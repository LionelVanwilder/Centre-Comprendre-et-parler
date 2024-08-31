<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t("skills.research.title") }}</h2>
        <p>{{ $t("skills.research.text1") }}</p>
        <p>{{ $t("skills.research.text2") }}</p>
        <p>{{ $t("skills.research.text3") }}</p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'ResearchPage',

        components: {
            BreadCrumbCom,
        },


        computed: {
        breadcrumbs() {
            return [
                { to: '/Competences', label: this.$t('navbar.links.skills') },
                { to: '/Competences/Recherches', label: this.$t('navbar.dropdown.skills.research') }
            ];
        }
    }
    }
</script>
<style scoped>
   
</style>