<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Médecins - ORL</h2>
        <p>
            Le médecin-directeur organise et anime des réunions interdisciplinaires de réflexion et de concertation sur les méthodes, 
            et prend la décision finale de modification ou d'introduction de nouvelles méthodes. Il dirige et supervise individuellement, 
            les activités des différents ré-éducateurs, et participe aux réunions d'équipe des différents secteurs.
        </p>
        <p>
            Il intervient directement auprès des enfants et de leurs parents, des adolescents ou adultes en début de processus de 
            rééducation, et entretient des contacts personnels avec eux tout au long du processus. Il  veille à établir et à développer 
            des contacts avec la communauté des sourds adultes, afin d'obtenir leur adhésion aux programmes de rééducation du Centre et leur 
            coopération dans le domaine de l'utilisation des signes. Il assure les contacts avec les médecins extérieurs appelés à intervenir 
            auprès des patients du Centre soit complémentairement au processus de rééducation (chirurgiens-électrophysiologistes) soit pour 
            des affections autres que la déficience auditive.
        </p>
        <p>
            Il examine les rapports préparés par ses collaborateurs et rédige avec leur aide les rapports médicaux destinés à différents 
            organismes (INAMI – Allocations familiales – FCRSPPH) ou aux médecins traitants, et entretient des rapports suivis avec ces 
            derniers ainsi qu'avec les différents spécialistes appelés à intervenir pour des pathologies non liées à la déficience auditive.
            Les médecins ORL effectuent les examens nécessaires à l'établissement ou à la confirmation du diagnostic des nouveaux patients 
            adressés au Centre.
        </p>
        <p>
            Ils prescrivent les examens complémentaires et traitements appropriés, en concertation avec les autres membres de l'équipe 
            interdisciplinaire. Lorsqu'un traitement chirurgical devant être effectué en milieu hospitalier est nécessaire, ils 
            effectuent celui-ci eux-mêmes  en dehors du Centre (activité hors convention) ou adressent les patients à d'autres spécialistes 
            extérieurs.
        </p>
        <p>
            Ils examinent régulièrement les patients en rééducation: ceux-ci requièrent effectivement une attention toute particulière à la 
            sphère ORL, afin de prévenir ou de remédier rapidement à toute détérioration de leur audition résiduelle.
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'MedecinsPage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '/Competences', label: 'Compétences' },
                { to: '/Competences/Medecins', label: 'Médecins - ORL' }
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