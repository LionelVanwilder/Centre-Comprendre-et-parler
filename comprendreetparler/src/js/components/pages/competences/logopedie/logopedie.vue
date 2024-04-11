<template>
    <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>Logopédie</h2>
        <p>
            La rééducation logopédique individuelle et collective joue un rôle primordial. Apprendre à comprendre un interlocuteur, 
            à prendre la parole et à développer les mécanismes cognitifs fondamentaux propres au langage à des enfants qui entendent 
            peu ou qui entendent mal est une tâche ardue et de longue haleine.<br> Les séances quotidiennes indispensables à l'objectif 
            de communication linguistique exigent de grands efforts de la part des logopèdes. ... et  surtout de la part des enfants. 
            <br>Pour motiver ceux-ci à accepter ces efforts, les logopèdes doivent constamment proposer de nouvelles activités de communication 
            nécessitant la préparation de supports matériels attrayants et fréquemment renouvelés (jeux éducatifs, images, pictogrammes, 
            objets et personnages miniatures, ...).
        </p>
        <p>
            L'évolution des méthodes au fil des ans et les avancées dans le domaine de la psycholinguistique développementale servent de 
            tremplin pour l'équipe logopédique vers de nombreuses réflexions, remises en question et développement de nouvelles techniques 
            et moyens de communication. La mise en pratique de ces techniques et la combinaison originale de la méthode verbo-tonale, 
            du LPC et du FCSC et de l'éducation auditive ont requis et continuent à requérir d'importants efforts de conceptualisation et 
            de réflexion critique.
        </p>
        <p>
            C'est essentiellement l'équipe logopédique qui fournit ces efforts et qui mérite particulièrement d'être créditée de leurs 
            résultats, modèle de référence pour de nombreux centres belges et étrangers. Le rôle des logopèdes est également de contribuer , 
            par une guidance parentale appropriée, à ce que les parents soient, à tous âges, les acteurs privilégiés du développement 
            linguistique de leur enfant sourd ou malentendant.
        </p>
        <p>
            Le Centre reconnaît l'intérêt et la nécessité pour les enfants et adultes sourds d'utiliser la langue des signes et de la valoriser.
        </p>
        <p>
            La langue des signes est intégrée dans le processus d'accompagnement voire de rééducation linguistique lorsque nécessaire.<br>
            En pratique cela implique l'intégration de pratiquants de la langue des signes à l'équipe interdisciplinaire.<br> Des animateurs 
            sourde remplissent cette fonction, par l'organisation d'ateliers de communication en langue des signes faisant partie des 
            différents programmes de rééducation ou par des séances individuelles ciblées sur l'entraînement de compétences particulières 
            (mémoire, analyse phonologique, conceptualisation, culture générale,....).<br> Les parents sont également invités à se familiariser
             avec la langue des signes et à acquérir du vocabulaire de cette langue qui pourra être utilisé en combinaison avec le LPC selon 
             e projet mis en place.<br>  Cette manière de procéder permet aux enfants de se familialriser, dans le plaisir, à cette langue et à 
             l'investir positivement. Les transferts de compétences linguistiques entre langues parlées et langues de signes font partie des 
             observations de développement linguistique courantes.
        </p>
    </div>

</template>
<script>

import BreadCrumbCom from "../../breadcrumb.vue"

export default{
        name: 'LogopediePage',

        components: {
            BreadCrumbCom,
        },

        data(){
            return{
                breadcrumbs: [
                { to: '/Competences', label: 'Compétences' },
                { to: '/Competences/Logopedie', label: 'Logopédie' }
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