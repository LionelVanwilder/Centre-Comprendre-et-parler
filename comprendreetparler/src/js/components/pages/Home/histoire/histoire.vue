<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>Histoire du centre</h2>
        <p>
            Des parents soucieux d'offrir à leurs enfants sourds ou malentendants une éducation de haut niveau fondent à l'initiative du Docteur Olivier Périer, 
            en 1965, le Centre Comprendre et Parler.
        </p>
        <p><span>Leur but: </span></p>
        <ol>
            <li>Permettre à ces enfants de s'épanouir</li>
            <li>Développer ou récupérer leurs facultés de communication et de langage</li>
            <li>Atteindre l'autonomie la plus large possible</li>
            <li>S'intégrer d'abord dans leur milieu familial puis à la société dans son ensemble</li>
        </ol>
        <h3>1965-1980</h3>
        <p>
            Pendant les 15 premières années de son existence, le Centre a utilisé exclusivement des méthodes audio-orales basées sur l'utilisation 
            de l'audition résiduelle et de la lecture labiale. Il a particulièrement investi dans la méthode verbo-tonale de P. Guberina qui s'est 
            révélée très efficace pour le développement de la voix, de l'articulation et de la mélodie de la parole. Dans ses début, le Centre a été 
            particulièrement attentif au développement des techniques d'adaptation prothétique, considérant celles-ci comme un volet essentiel du 
            processus de rééducation : les progrès de ces dernières années dans ce domaine interviennent pour une part importante dans l'amélioration 
            générale des résultats du processus de rééducation.
        </p>
        <h3>1980 - 2012</h3>
        <p>
            A partir de 1980, l'expérience acquise et la référence à l'évolution des méthodes dans le monde ont conduit l'équipe à intégrer aux méthodes 
            audio-orales précédentes des moyens supplémentaires de communication faisant appel à la sphère visuelle.
            <br><br>
            D'une part le Langage Parlé Complété (LPC) procédé ingénieux clarifiant et complétant la lecture labiale et,- d'autre part, le Français Signé (FS), 
            utilisant les signes de la langue des sourds complémentairement à la parole.
            <br><br>
            L'introduction du LPC et du FS ont permis un véritable bond en avant dans la communication et l'acquisition des mécanismes fondamentaux du langage oral,
            tout en jetant les bases d'un accès ultérieur à la langue des signes de la communauté des sourds.
            <br><br>
            La combinaison de ces deux techniques sous forme de Français Complet Signé et Codé FCSC a signé l'abandon du FS. Le FCSC est une création de parents qui 
            avaient la volonté de cumuler les avantages d'une perception complète de la parole via le LPC et les possibilités d'expression aisée et naturelle en bas 
            âge de leur enfant via l'utilisation de signes de la langue des signes. Le FCSC constitue une contribution de valeur internationalement reconnue à la 
            méthodologie de l'éducation des enfants à audition déficiente. De nombreux enfants sourds en ont bénéficié (voir rubrique Documentation/Publications).
            <br><br>
            Les récents progrès technologiques, et notamment l'avènement de l'implant cochléaire performant depuis les années '90 ont à nouveau- conduit à une modification 
            des pratiques. Le LPC reste un outil complémentaire à l'implant cochléaire afin de permettre à l'enfant un accès à la précision phonologique fine, en toutes 
            circonstances (ex: en situation de bruit). Les signes sont encore utilisés lors des premiers échanges aux fins de stimuler l'interaction parents-enfants. 
            Ils prennent parallèlement place lors de contacts encouragés avec les membres de la communauté des sourds qui partagent cette langue.
            <br><br>
            L'émergence des implants cochléaires a également eu un effet inattendu. Une fois l'apport audio-prothétique rendu très performant, sont mieux apparus au 
            grand jour les difficultés concommittantes présentées par certains enfants et adolescents sourds: troubles "dys" (dysphasie, dyslexie, dyscalculie, 
            troubles de la mémoire, troubles de l'attention, troubles de l'intégration visuelle, difficultés de compréhension en lecture), voire handicaps associés. 
            Les prochains défis pour le futur seront de développer des outils d'évaluation de ces troubles concommitants à la déficience auditive et de proposer 
            des pistes de rééducation validées scientifiquement ou par les pratiques ajustées.


        </p>
   </div>
    </div>
   
 </template>
 
 <script>
    
    import BreadCrumbCom from '../../breadcrumb.vue'
 
     export default {
     name: 'HistoiretPage',
     
     components: {
        BreadCrumbCom
    },

    data(){
        return{
            breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/Histoire', label: 'Histoire'},
                    ]
        }
    }
 
 }
 </script>

 <style scoped>
    ol{
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 1rem 0;
    }
    ol li{
        margin: 1.5rem 0;
        line-height: 1.5;
        letter-spacing: 1px;
        background-color: #005387;
        color: #ffffff;
        width: 100%;
    }

    /*ol li:before{
        content: url('../../../../../../icons/check-solid.svg');
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin: 0 1rem;
    }*/
</style>