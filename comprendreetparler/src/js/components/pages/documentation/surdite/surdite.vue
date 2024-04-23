<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2 style="margin-bottom: 2rem;">Surdité</h2>
        
        <p>
            <span >Recommandations du BIAP, Bureau International d’AudioPhonologie</span><br>
            Le BIAP est le Bureau International d'Audiophonologie dont la mission est d'édicter des recommandations dans le domaine de 
            l'audio-phonologie (développement du langage, aides techniques et audiologique, développement cognitivo-linguistique, 
            guidance parentale, handicaps associés...)
        </p>
        <p>Lien: 
            <a href="http://www.biap.org/fr/recommandations" target="_blank" style="text-decoration: underline;">Recommandation du BIAP</a>
        </p>
        <p>
            CHU Sart Tilman – ENT dept - 4000 Liège<br>
            Tél : 04/366.72.70<br>
            Fax : 04/366.75.25<br>
            e-mail : <a href="mailto:laurentchp.demanez@chu.ulg.ac.be">laurentchp.demanez@chu.ulg.ac.be</a>
        </p>
        
        <p>
            <span>Intégration scolaire</span><br>
            <a href="" target="_blank" style="text-decoration: underline;">Guide - Pdf</a>
        </p>
        <p>
            <span>Moyens visuels de communication - Langue des signes </span><br>
            <a href="https://www.lsfb.be/" target="_blank" style="text-decoration: underline;">Langue des signes de Belgique francophone</a><br>
            <a href="https://www.cfls.be/" target="_blank" style="text-decoration: underline;">Centre Francophone de la Langue des Signes</a><br>
            <a href="http://www.mariehaps.be/recherche-scientifique/profils/" target="_blank" style="text-decoration: underline;">Institut libre Marie Haps</a><br>
            <a href="http://www.ffsb.be/" target="_blank" style="text-decoration: underline;">Fédération Francophone des Sourds de Belgique</a><br>
        </p>
        <p>
            <span>LPC</span><br>
            <a href="http://www.lpcbelgique.be/" target="_blank" style="text-decoration: underline;">Association LPC Belgique</a><br>
            <a href="www.alpc.asso.fr" target="_blank" style="text-decoration: underline;">Association nationale pour la promotion et le développement de la Langue française Parlée Complétée</a><br>
            <a href="https://fr.wikipedia.org/wiki/Langage_parl%C3%A9_compl%C3%A9t%C3%A9" target="_blank" style="text-decoration: underline;">Wikipédia: Langage parlé complété</a><br>
            <a href="http://membres.multimania.fr/riane/LPC/LPC-Charlier.html" target="_blank" style="text-decoration: underline;">Les Sourds Ont la Parole</a><br>
            <a href="http://www.lpcbelgique.be/" target="_blank" style="text-decoration: underline;">Les habiletés phonologiques chez des enfants sourds prélecteurs</a><br>
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0022096599925390" target="_blank" style="text-decoration: underline;">Phonology Acquired through the Eyes and Spelling in Deaf Children</a><br>
        </p>
        <p>
            <span>Ecrire les langues des signes</span><br>
            <a href="https://www.signwriting.org/" target="_blank" style="text-decoration: underline;">SignWriting® Site</a>
        </p>
    </div>
    </div>
    

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'SurditePage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '', label: 'Documentations' },
                { to: '/Documentations/Surdite', label: 'Surdité' }
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