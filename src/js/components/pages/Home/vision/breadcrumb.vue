<template>
    <div class="breadcrumb-container">
        <ul class="breadcrumb-nav">
        <li>
            <RouterLink to="/" class="breadcrumb-routerlink">Accueil</RouterLink>
        </li>
        <li> Statut et vision</li>
    </ul>
    </div>
    
</template>
<script>
    export default{
        name: 'BreadCrumbVision',
    }
</script>
<style  scoped>
    ul{
        display: flex;
        margin: auto;
        width: 100%;
    }
</style>