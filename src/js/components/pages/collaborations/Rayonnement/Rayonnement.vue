<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t('collab.ray.title') }}</h2>
        <p>
            <span>{{ $t('collab.ray.span1') }}</span><br>
            {{ $t('collab.ray.content1') }}
        </p>
        <p>
            <span>{{ $t('collab.ray.span2') }}</span><br>
            La Libre.be: 
            <a href="https://www.lalibre.be/belgique/2012/07/30/acquerir-le-francais-plus-facilement-KL6CINOBEVAQREIBNHERAOLGKI/" target="_blank" style="text-decoration: underline;">Acquérir le français plus facilement</a>. (Article du 30 juillet 2012)
        </p>
        <p style="font-style: italic;">
            {{ $t('collab.ray.content3') }}
        </p>
        <p>
            <span style="color: #222222">
                {{ $t('collab.ray.span3') }}
            </span>
        </p>
        <p class="reward">
            <span>
                {{ $t('collab.ray.span4') }}
            </span>
            <br><br>
            {{ $t('collab.ray.span5') }}
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'RayonnementPage',

        components: {
            BreadCrumbCom,
        },

        computed: {
        breadcrumbs() {
            return [
                { to: '', label: this.$t('navbar.links.collab') },
                { to: '/Collaborations/Rayonnement', label: this.$t('navbar.dropdown.collab.influence') }
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

    h4{
        margin: 2rem 0;
        font-size: 1.2rem;
        color: #222222;
        font-weight: 500;
        letter-spacing: 1.1px;
    }

    p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    }

    .reward{
        font-weight: 600;
        color: #005387;
    }

    span{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    color:  #005387;
    font-weight: 600;
    
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