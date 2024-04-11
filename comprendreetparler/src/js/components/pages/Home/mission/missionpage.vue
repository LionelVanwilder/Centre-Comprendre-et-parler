<template>
   
   <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>Missions et valeurs</h2>
        <h3>Missions générales</h3>
        <p>
            La mission générale du Centre Comprendre et Parler est d'assurer la mise en place d'un projet 
            individualisé pour l'enfant sourd visant à développer au maximum ses potentialités et ses compétences 
            linguistiques et à favoriser son épanouissement personnel et son autonomie. <br>Le centre s'appuie sur 
            la collaboration entre partenaires impliqués -enfant, famille et professionnels- , sur la cohérence 
            des moyens mis en œuvre et sur l’utilisation optimale des moyens technologiques.
        </p>

        <h3>Missions élargies</h3>
        <p>
            A partir de la mission principale, les missions élargies du <strong>Centre Comprendre et Parler</strong> se déclinent comme suit:
        </p>

        <div class="pages-paragraph">
               
                    <ol>
                        <li v-for="(item, index) in missions" :key="index">
                            {{ item.content }}
                        </li>
                    </ol>
                
            <h3>Valeurs</h3>
            <ol class="grid-list values">
                <li>Management participatif</li>
                <li>Place privilégiée des parents</li>
                <li>Ethique</li>
                <li>Confidentialité</li>
                <li>Liberté d’expression</li>
                <li>Valorisation de la langue des signes</li>
                <li>Formation</li>
                <li>Développement personnel</li>
            </ol>
        </div>
        
   </div>
 </template>
 
 <script>
     
     import BreadCrumbCom from '../../breadcrumb.vue'
 
     export default {
     name: 'MissionPage',
     
     components: {
        BreadCrumbCom
     },

 data(){
        return{
            missions: [
                {content: 'Assurer l\'intégration optimale des progrès technologiques dans la mise en œuvre des interventions (programmes et services dans différents domaines d\'activités)'},
                {content: ' Chez l\'enfant sourd ou malentendant, assurer le dépistage, la mise au point et l\'évaluation de toute compétence nécessaire au développement de ses potentialités'},
                {content: 'Chez l\'enfant entendant ayant des parents sourds, assurer la mise en place d\'un projet individualisé entre 0 et 6 ans, suivant les mêmes modalités et objectifs que pour l\'enfant sourd décrits dans la mission générale'},
                {content: 'Chez l\'adulte sourd ou malentendant, de même que chez l\' enfants sourd, assurer un appareillage prothétique conventionnel de qualité ou accompagner l\'implantation cochléaire en visant l\'établissement ou la récupération d\'une utilisation fonctionnelle optimale des capacités auditives et une qualité de communication avec l\'entourage'},
                {content: 'Assurer des formations dans le domaine de la surdité ou de l\'accompagnement des partenaires ou collaborateurs de l\'association. '},
                {content: 'Assurer des formations dans le domaine de la perception de la parole et/ou de la Langue en Mouvements'}
            ],

            breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/Mission', label: 'Missions et valeurs'},
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
        justify-content: center;
        align-items: flex-start;
        margin: auto;
        padding: 1rem 0;
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

    .grid-list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        grid-gap: 30px;
    }

    .values li{
        white-space: nowrap;
    }

    .values li:before{
        content: url('../../../../../../icons/heart-solid.svg');
        margin-right: 1rem;
    }
</style>