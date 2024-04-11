<template>
   <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
   <div class="Pages-container-content">
        <h2>Satut et vision</h2>
        <h3>Statut</h3>
        <p>
            Le Centre Comprendre et Parler est une A.S.B.L 
            (forme juridique d'association à but non lucratif) active dans le domaine 
            de la rééducation fonctionnelle des troubles de l'audition, de la parole et du langagier.  
            Elle a le statut de Centre de Réadaptation Fonctionnelle. Sa convention conclue avec l'INAMI 
            en 1967 porte le numéro 7.79.001.06 et a été transférée vers la COCOM qui est actuellement son pouvoir 
            subsidiant. Y sont notamment spécifiés les différents programmes de rééducation fonctionnelle. 
            Le Centre est également agréé par le Service Bruxellois Francophone des Personnes Handicapées PHARE.
        </p>

        <h3>Vision</h3>
            <div class="pages-paragraph">
                <p v-for="(item, index) in Paragraph" v-html="item.content" :key="index"></p>
            </div>
   </div>
</template>

<script>
    
    import BreadCrumbCom from '../../breadcrumb.vue'

    export default {
    name: 'VisionPage',
    
    components: {
        BreadCrumbCom
    },
    data(){
                return{
                    Paragraph: [
                                {content: '<span>Projet individualisé : </span><br>pour chaque enfant un projet individualisé est défini. Une implication la plus importante possible est demandée aux parents en tant que partenaires privilégiés de la communication et de l\'éducation au langage. Des cycles de formation et de guidance leurs sont proposés. Des parents sont présents dans la gestion de l’ASBL.'},
                                {content: '<span>Équipe multidisciplinaire : </span><br>une équipe multidisciplinaire motivée et impliquée assure un accompagnement quotidien, soutenu et coordonné : logopèdes et animateurs en langue des signes, assistantes sociales et éducateurs, psychologues, médecins, interprètes, psychomotriciennes, audiologues,... En fonction des besoins, les professionnels se déplacent dans les principaux milieux de vie de l\'enfant et des familles: domicile, crèche, école...'},
                                {content: '<span>Méthodologie : </span><br>les méthodes et les appuis techniques/technologiques sont sans cesse adaptés avec une mise à jour régulière des compétences. Un cadre de recherches scientifiques menées en collaboration avec des personnes sourdes et une collaboration étroite avec les universités y contribue intensivement: ULB- C.O.D.E Laboratoire Cognition et Développement, Huderf, Hôpital Brugmann, Hôpital Erasme, Groupe GEORRIC de recherche sur l\'implant cochléaire,…'},
                                {content: '<span>Professionnalisme et Dynamisme : </span><br> le dynamisme de son équipe, sa rigueur associée au caractère familial des prises en charges sont maintenant reconnus à travers le monde et ont fait l\'objet de récompenses scientifiques ou honorifiques. Les professionnels collaborent étroitement tant avec l\'enseignement spécialisé pour enfants sourds (l\'École Intégrée) qu\'avec l\'enseignement ordinaire.'},
                                {content: '<span>Projets-Pilotes : </span><br>on notera tout particulièrement :collaboration avec la crèche spécialisée Crescendo, implication croissante de professionnels sourds dans l\'équipe, thérapies linguistiques basées sur la langues des signes, interprétation en langues étrangères, accompagnement pédagogique de jeunes étudiants sourds, soutien de projets éloignés des infrastructures spécialisées...'},
                                {content: '<span>Recherche scientifique et Développement : </span><br>le Centre est en recherche constante des méthodes et techniques les plus efficaces pour amorcer, améliorer ou rétablir la communication et créer les conditions nécessaires au développement linguistique. Il tente de rassembler les conditions nécessaires au développement d’une langue ou d’un système de communication grâce auquel l\'enfant puisse non seulement communiquer mais aussi penser, se développer intellectuellement et affectivement, lire et écrire,...Le Centre est impliqué dans plusieurs programmes de recherche universitaire.'},
                                {content: '<span>Bilinguisme : </span><br>tout en privilégiant le développement de la communication parlée, le Centre a la volonté de préparer également les enfants qui lui sont confiés à devenir un jour, s\'ils le souhaitent, bilingues, càd maîtrisant à la fois la langue française et la langue des signes tant en compréhension qu’en expression. La valorisation de la langue des signes et le contact régulier avec des personnes sourdes, dans ce contexte, constituent des leviers majeurs.'}
                    ],

                    breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/Vision', label: 'Statut et vision'},
                    ]
                }
            }

    }
</script>