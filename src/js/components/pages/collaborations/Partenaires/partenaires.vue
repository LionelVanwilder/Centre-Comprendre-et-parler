<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t('collab.partner.title') }}</h2>
        <h3>{{ $t('collab.partner.subtitle') }} </h3>
        
        <p>
            <span>Ecole intégrée</span><br>
            Rue de la Rive, 99 - 1200 Bruxelles<br>
            Tel : 02/771.75.11<br>
            Fax : 02/772.62.88<br>
            e-mail : secretariat@ecoleintegree.be<br>
            web: www.ecoleintegree.be<br>
            <a href="https://www.google.com/maps/place/L'ecole+Int%C3%A9gr%C3%A9e/@50.8498093,4.4445605,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3dc9b6249b8e1:0x8e7a5923a3180e96!8m2!3d50.8498093!4d4.4445605!16s%2Fg%2F1td714pt?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="text-decoration: underline;">Google Maps</a>
        </p>
        
        <p>
            <span>Lui et nous ASBL</span><br>
            Rue Eggerickx, 15 - 1150 Bruxelles<br>
            Tel : 02/763.04.35<br>
            Fax : 02/771.98.09<br>
            e-mail : <a href="mailto:lui-nous@swing.be">lui-nous@swing.be</a><br>
            <a href="https://www.google.com/maps/@50.837554,4.416085,16z?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="text-decoration: underline;">Google Maps</a>
        </p>

        <p>
            <span>Crèche Crescendo</span><br>
            Chaussée de Roodebeek, 320 - 1200 Bruxelles<br>
            Tel: 02/772.60.22<br>
            Fax : 02/772.60.22<br>
            e-mail : <a href="mailto: creche.crescendo@skynet.be"> creche.crescendo@skynet.be</a><br>
            <a href="https://www.google.com/maps/place/Crescendo+Asbl/@50.8492924,4.4198335,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3dca616494f99:0xefa5d9112dd8a927!8m2!3d50.8492924!4d4.4224084!16s%2Fg%2F1td1_f4n?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="text-decoration: underline;">Google Maps</a>
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

        computed: {
        breadcrumbs() {
            return [
                { to: '', label: this.$t('navbar.links.collab') },
                { to: '/Collaborations/Partenaires', label: this.$t('navbar.dropdown.collab.partner') }
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