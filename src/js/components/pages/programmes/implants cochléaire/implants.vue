<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t("program.implants.title") }}</h2>
        <span>{{ $t("program.implants.subtitle") }}</span>
        <p>{{ $t("program.implants.text1") }}</p>
        <p>{{ $t("program.implants.text2") }}</p>
    </div>
    </div>
    


</template>
<script>
    
    import BreadCrumbCom from '../../breadcrumb.vue'
    export default{
        name: 'ImplantsPage',

        components: {
            BreadCrumbCom
        },

        data(){
                return{
                    breadcrumbs: [
                        {to: '/Programmes', label: 'Programmes'},
                        {to: '/Programmes/ImplantsCochleaires', label: 'Implants cochléaires'},
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