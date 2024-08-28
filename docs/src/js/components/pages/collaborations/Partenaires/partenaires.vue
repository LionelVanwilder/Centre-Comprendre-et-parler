<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Partenaires privilégiés</h2>
        <h3> Le Centre entretient des relations privilégiées,  avec les institutions et associations suivantes:</h3>
        
        <p>
            <span>Ecole intégrée</span><br>
            Rue de la Rive, 99 - 1200 Bruxelles<br>
            Tel : 02/771.75.11<br>
            Fax : 02/772.62.88<br>
            e-mail : secretariat@ecoleintegree.be<br>
            web: www.ecoleintegree.be<br>
            <a href="" style="text-decoration: underline;">Lien sur Google Maps</a>
        </p>
        
        <p>
            <span>Lui et nous ASBL</span><br>
            Rue Eggerickx, 15 - 1150 Bruxelles<br>
            Tel : 02/763.04.35<br>
            Fax : 02/771.98.09<br>
            e-mail : <a href="mailto:lui-nous@swing.be">lui-nous@swing.be</a><br>
            <a href="" style="text-decoration: underline;">Lien sur Google Maps</a>
        </p>

        <p>
            <span>Crèche Crescendo</span><br>
            Chaussée de Roodebeek, 320 - 1200 Bruxelles<br>
            Tel: 02/772.60.22<br>
            Fax : 02/772.60.22<br>
            e-mail : <a href="mailto: creche.crescendo@skynet.be"> creche.crescendo@skynet.be</a><br>
            <a href="" style="text-decoration: underline;">Lien sur Google Maps</a>
        </p>
    </div>

    </div>
    
</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'PartenairesPage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '/', label: 'Collaborations' },
                { to: '/Collaborations/Partenaires', label: 'Partenaires privilégiés' }
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