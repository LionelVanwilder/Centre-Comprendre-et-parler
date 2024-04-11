<template>
    <div class="programmes-container">
        <div class="programmes-nav">
            <ul>
                <li><router-link to="/Competences/Accompagnements">Accompagnements</router-link></li>
                <li><router-link to="/Competences/AssistancesSociales">Assistance sociale</router-link></li>
                <li><router-link to="/Competences/Audiologie">Audiologie</router-link></li>
                <li><router-link to="/Competences/Depistage">Dépistage</router-link></li>
                <li><router-link to="/Programmes/Services">Formations, évaluations <br>et recherche scientifique</router-link></li>
                <li><router-link to="/Programmes/FormationsExterieures">Aides visuelles à la communication :<br> Interprétation, translittération et transcription</router-link></li>
                <li><router-link to="/Competences/Logopedie">Logopédie</router-link></li>
                <li><router-link to="/Competences/Medecins">Médecins – ORL</router-link></li>
                <li><router-link to="/Programmes/ServicesExterieurs">Psychologie et neuropsychologie</router-link></li>
                <li><router-link to="/Competences/Psychomotricite">Psychomotricité</router-link></li>
                <li><router-link to="/Programmes/ServicesExterieurs">Services administratifs et financiers</router-link></li>
            </ul>
        </div>
        <div class="programmes-text">
        <h2>Compétences</h2>
        <p>
            Les différentes compétences des professionnels du Centre Comprendre et Parler s’intègrent de manière multidisciplinaire 
            autour du projet individualisé de l’enfant sourd. Ce projet vise à développer les potentialités et les aptitudes linguistiques 
            de l'enfant sourd, ainsi que de favoriser son épanouissement personnel et son autonomie en s'appuyant sur la collaboration 
            avec les partenaires impliqués, enfant, famille, professionnels, sur la cohérence des moyens mis en œuvre et sur les progrès 
            technologiques.
        </p>
        <p v-for="(item, index) in Competences" :key="index"><router-link :to="item.path"><span class="custom-span">{{ item.span }}</span></router-link>{{ item.content }}</p>
        </div>
       
    </div>
   
</template>
<script>
    export default{
        name: 'CompetencesPage',

        data(){
                return{
                    Competences: [
                        {   
                            path: '/Competences',
                            span: 'Le logopède',
                            content: ' a pour mission de favoriser le développement de la communication et du langage de l\'enfant sourd, en privilégiant l\'acquisition de la langue française. L’animateur en langue des signes a pour mission d’étendre les compétences linguistiques et de communication à celles de la langue des signes.'
                        },

                        {   
                            path: '/Competences',
                            span: 'L\'assistant(e) social(e) (AS)',
                            content: ' a pour mission de soutenir les familles d\'enfant sourd et les jeunes adultes sourds, de les conseiller et les orienter dans leurs démarches, en axant les interventions de manière privilégiée sur l\'autonomie.'
                        },

                        {   
                            path: '/Competences',
                            span: 'Le psychologue',
                            content: ' veille au respect des valeurs éthiques et de confidentialité. Dans son travail, il vise avant tout à considérer l\'enfant comme sujet dans son projet en partenariat avec les familles. Le psychologue a pour mission de développer au maximum les potentialités de l\'enfant sourd et à favoriser son épanouissement personnel et son autonomie.'
                        },

                        {   
                           path: '/Competences', 
                            span: 'L\'équipe médicale',
                            content: ', composée du médecin directeur, de plusieurs médecins ORL spécialistes en réadaptation et d\'une pédiatre, assurent les consultations, bilans, mises au point et suivis cliniques. Cette équipe se coordonne avec l\'équipe des audiologues/audiciens pour le volet de l\'appareillage.'
                        },




                    ]
                }
            }


    }
</script>
<style scoped>
    .custom-span{
        line-height: 1.5 !important;
        letter-spacing: 1px !important;
        color:  #005387 !important;
        font-weight: 600 !important;
        transition: .3s ease-in-out;
    }

    .custom-span:hover{
        text-decoration: underline;
        transition: .3s ease-in-out;
    }
</style>