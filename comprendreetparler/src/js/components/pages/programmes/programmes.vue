<template>
    <div class="programmes-container">
        <div class="programmes-nav">
            <ul>
                <li><router-link to="/Programmes/EducationPrecoce">{{ $t("navbar.dropdown.program.education") }}</router-link></li>
                <li><router-link to="/Programmes/Specialisation">{{ $t("navbar.dropdown.program.spec") }}</router-link></li>
                <li><router-link to="/Programmes/Integration">{{ $t("navbar.dropdown.program.integration") }}</router-link></li>
                <li><router-link to="/Programmes/ImplantsCochleaires">{{ $t("navbar.dropdown.program.implants") }}</router-link></li>
                <li><router-link to="/Programmes/Services">{{ $t("navbar.dropdown.program.services") }}</router-link></li>
                <li><router-link to="/Programmes/FormationsExterieures">{{ $t("navbar.dropdown.program.formations") }}</router-link></li>
                <li><router-link to="/Programmes/Depistage">{{ $t("navbar.dropdown.program.screening") }}</router-link></li>
                <li><router-link to="/Programmes/ServicesExterieurs">{{ $t("navbar.dropdown.program.external") }}</router-link></li>
            </ul>
        </div>
        <div class="programmes-text">
        <h2>{{ $t('program.heading') }}</h2>
        <h3>{{ $t('program.subheading') }}</h3>
        <p>
            Le Centre Comprendre et Parler, grâce à une équipe dotée de compétences multidisciplinaires, 
            offre une série de programmes et services dans différents domaines d'activités. Ces services 
            sont différenciés en fonction de l'âge de l'enfant ou de la personne malentendante, toujours 
            dans le cadre d'un projet individualisé.
        </p>
        <p>
            L'implication la plus importante possible est demandée aux parents en tant que partenaires privilégiés du développement 
            de la communication et des acquisitions linguistiques.
        </p>
        <p>
            Dès que le jeune en a la possibilité, il est intégré dans l’enseignement ordinaire, en collaboration avec l’équipe professionnelle.
        </p>

        <h3>Nos moyens d'action: </h3>
            <ol>
                <li v-for="(item,index) in Action" :key="index">{{ item.content }}</li>
            </ol>
        </div>
       
    </div>
   
</template>
<script>
    export default{
        name: 'ProgrammesPage',

        data(){
                return{
                    Action: [
                        {content: 'Dépistage auditif, notamment en maternité, diagnostic et mise au point'},
                        {content: 'Implants cochléaires'},
                        {content: 'Accompagnement multidisciplinaire en partenariat avec les familles et le jeune lui-même'},
                        {content: 'Suivi et prise en charge à domicile pour les tout-jeunes enfants'},
                        {content: 'Intégration scolaire'},
                        {content: 'Suivi des enfants scolarisés dans l\'enseignement spécialisé de type 7 (École Intégrée),   Maternelles, Primaires, Secondaire et Supérieur'},
                        {content: 'Suivi logopédique spécialisé'}
                    ]
                }
            }


    }
</script>
<style scoped>

</style>