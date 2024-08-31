<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t('navbar.dropdown.collab.other') }}</h2>
        <p>
            <span>Musées royaux</span><br>
            web: <a href="https://fine-arts-museum.be/en" target="_blank">fine-arts-museum.be</a><br>
            FB: <a href="https://www.facebook.com/LangueDesSignesMuseeSurMesure/?locale=fr_FR" target="_blank">LangueDesSignesMuseeSurMesure</a>
        </p>
        <p>
            <span>ULB Laboratoire Cognition Langage et Développement</span><br>
            web: <a href="https://crcn.ulb.ac.be/" target="_blank">crcn.ulb.ac.be</a><br>
        </p>
        <p>
            <span>HUDERF (Hôpital Universitaire des Enfants Reine Fabiola)</span><br>
            web: <a href="https://www.huderf.be/fr">www.huderf.be</a><br>
        </p>
        <p>
            <span>Hôpital Erasme</span><br>
            web: <a href="https://www.erasme.be/en" target="_blank">www.erasme.ulb.ac.be</a><br>
        </p>
        <p>
            <span>Bureau International d’AudioPhonologie</span><br>
            web: <a href="https://www.biap.org/fr/" target="_blank">www.biap.org/</a><br>
        </p>
        <p>
            <span>CEFES : Centre d'Etudes et de formation pour l'Education Spécialisée</span><br>
            web: <a href="https://www.ulb.be/" target="_blank">www.ulb.ac.be</a><br>
        </p>
        <p>
            <span>Plateau 96</span><br>
            web: <a href="https://www.plateau96.be/" target="_blank">www.plateau96.be/</a><br>
        </p>
        <p>
            <span>Fédération des Centres de Réadaptation Ambulatoire</span><br>
            web: <a href="https://www.fcra.be/" target="_blank">www.fcra.be/</a><br>
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'OtherCollabPage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '', label: 'Collaborations' },
                { to: '/Collaborations/Autrescollaborations', label: 'Autres collaborations' }
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