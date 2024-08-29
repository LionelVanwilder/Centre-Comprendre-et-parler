

export default{
        banner: {
            centre: 'Centre',
            asbl: 'ASBL',
            adress: 'Rue de la Rive 101, 1200 Woluwe-Saint-Lambert',
            

        },
        
        Navinfo: {
            infos: 'Infos pratiques'
        },

        Contact: {
            schedule: 'Horaires du centre',
            Mon: 'Lundi',
            tue: 'Mardi',
            wed: 'Mercredi',
            thu: 'Jeudi',
            fri: 'Vendredi',
            sat: 'Samedi',
            sun: 'Dimanche',
            open: '08:30 - 17:00',
            close: 'Fermé',
            route: 'Comment se rendre au centre?',
            metro: '7 minutes à pied de l\'arret Alma',
            car: 'Accessible en voiture',
            park: 'Parking disponible'
        },
       

        Aboutus: {

            title: 'Qui sommes-nous???!',
            intro: 'Le Centre Comprendre et Parler est une ASBL fondée en 1965 par le Docteur Olivier Périer et des parents d\'enfants sourds ou malentendants soucieux d\'offrir à leurs enfants une éducation de haut niveau. Son statut est celui de “Centre de Réadaptation Fonctionnelle”, "Service d’Accompagnement Pédagogique", "Centre d’Orientation Spécialisé".',
            button: 'En savoir plus →'

        },

        flexrow: {
            first: 'patients de tous âges et de tous milieux socio-économiques ou culturels',
            second: 'personnes aux compétences multidisciplinaires assure l\'accompagnement des enfants et de leurs familles'
        },

        blocflex: {
            title: 'à propos du centre',

            cards: {
                vision: 'Statut et vision',
                mission: 'Mission et valeurs',
                gestion: 'Organes de gestion',
                organ: 'Organigrammes',
                activity: 'Rapport d\'activités',
                history: 'Histoire',
                more: '→ Voir plus'
            }
        },

        patient: {
            title: 'Qui sont <br> nos Patients?',
        },

        news: {
            title: 'Actualités'
        },

        homedonation: {
            title: 'Comment nous<br>soutenir?',
            button: 'Faire un don',
            content: 'Votre générosité peut faire une réelle différence. En choisissant de faire un don à notre ASBL, vous soutenez activement nos projets et contribuez à améliorer la vie de nombreuses personnes. Chaque contribution, qu\'elle soit petite ou grande, joue un rôle essentiel dans la réalisation de nos objectifs et l\'accomplissement de notre mission.'
        },

        carousel: {
            title: 'Nos autres pages',
            
        },

        navbar: {
            navbutton: 'Nous soutenir',
            links:{
                program: 'Programmes',
                skills: 'Compétences',
                collab: 'Collaborations',
                doc: 'SAFP / SAP',
                activity: 'Actualités'
            },

            dropdown:{
                program:{
                    education: 'Education précoce',
                    spec: 'Spécialisation',
                    ord: 'Enfants et jeunes scolarisés en enseignement ordinaire',
                    spec2: 'Enfants et jeunes scolarisés en enseignement spécialisé',
                    sup: 'Jeunes en enseignement supérieur',
                    integration: 'Intégration',
                    implants: 'Implants cochléaires',
                    services: 'Services',
                    formations: 'Formations extérieures',
                    screening: 'Dépistage de la surdité',
                    external: 'Services extérieurs'
                },

                skills:{
                    acc: 'Accompagnements',
                    assistance: 'Assistance sociale',
                    audio: 'Audiologie',
                    research: 'Formations, évaluation et recherche',
                    help: 'Aides visuelles à la communication',
                    logo: 'Logopédie',
                    doctor: 'Médecins - ORL',
                    psychology: 'Psychologie et neuropsychologie',
                    psychomotor: 'Psychomotricité',
                    financial: 'Services administratifs et financiers'
                },

                collab:{
                    partner: 'Partenaires privilégiés',
                    other: 'Autres collaborations',
                    influence: 'Rayonnement du centre'
                },

                doc:{
                    deafness: 'Surdité',
                    post: 'Publication',
                    link: 'Autres liens utiles'
                },

                activity:{
                    sign: 'Langue des signes',
                    speech: 'LPC',
                    lang: 'Langue en mouvements',
                    vac: 'Activités vacances',
                    other: 'Autres activités du Centre',
                    job: 'Emploi - stage et bénévolat',
                }
            }
        },

        footer: {
            follow: 'Suivez nous',
            terms: 'Conditions générales de vente',
            gdpr: 'RGPD',
            legal: 'Mentions légales',
            rights: '© 2024 Centre Comprendre et Parler ASBL',
        },


        donation: {
            title: 'Comment soutenir le Centre Comprendre et Parler?',
            intro: 'La générosité de nombreuses personnes ou sociétés, les dons, les activités de sponsoring, le financement de projets ciblés ou encore l\'organisation d\'évènements caritatifs permettent de soutenir la réalisation de nombreuses activités de notre ASBL.',
            intro2: 'Tout don versé au Centre d’un montant supérieur ou égal à 40 € fera l’objet d’une attestation fiscale qui vous sera envoyée dans le courant du premier semestre qui suit l’année de votre don. Ainsi, vous pourrez correctement compléter votre déclaration fiscale.',

            gridleft: {
                title: 'Vous pouvez choisir une domiciliation<br> ou un don par <span style="color: #005387; font-weight: 700;">virement bancaire </span>',
                info: 'Comprendre et Parler ASBL<br>Rue de la Rive, 101<br>1200 Bruxelles<br>IBAN : BE22 2100 4361 0747<br>BIC : GEBABEBB',
                text: 'En cliquant sur <span><router-link to="/Competences" style="color: #005387;text-decoration: underline;font-weight: 600 !important;transition: .3s ease-in-out;cursor: pointer;">ce lien</router-link></span>, vous trouverez un virement bancaire à télécharger.<br> Merci de le compléter et de le transmettre à votre banque.'
            },

            gridright:{
                title: 'Vous pouvez choisir de faire<br> un <span style="color: #005387; font-weight: 700;">don en ligne</span>',
                info: 'Comprendre et Parler ASBL<br>Rue de la Rive, 101<br> 1200 Bruxelles<br>IBAN : BE23 7320 2390 4891<br>BIC : CREGBEBB',
                text: 'En cliquant sur <span><router-link to="/Competences"  style="color: #005387;text-decoration: underline;font-weight: 600 !important;transition: .3s ease-in-out;cursor: pointer;">ce lien</router-link></span>, vous trouverez un virement bancaire à télécharger.<br> Merci de le compléter et de le transmettre à votre banque.'
            }
        },

        breadcrumbs:{
            home: 'Accueil',
            donation: 'Nous soutenir',
            collab:{
                collab: 'Collaborations',
                other: 'Autres collaborations'
            },

            
        },

        program:{
            heading: 'Programmes et spécificités',
            subheading: 'Présentation générale',

            specialization:{
                title: 'Spécialisation',
                subtitle: 'Ré-éducation coordonnée avec l’enseignement de « l’Ecole Intégrée » (Enseignement spécial type 7 avec intégration partielle par association étroite avec écoles ordinaires)',
                kindertitle: 'Spécialisée maternelles',
                kindercontent1: '',
    
            },
    
            integration:{
                title: 'Intégration',
                subtitle: 'Ré-éducation coordonnée avec l’enseignement de « l’Ecole Intégrée » (Enseignement spécial type 7 avec intégration partielle par association étroite avec écoles ordinaires)',
                text1: 'Le programme Intégration veille à permettre aux enfants et adolescents dont la communication et le langage ont commencé à évoluer favorablement de continuer à améliorer leurs possibilités de compréhension et d\'expression orales.',
                text2: 'Son objectif est de leur permettre de suivre l\'enseignement en intégration dans l\'enseignement ordinaire, premier stade de leur intégration sociale générale, en leur assurant des conditions adéquates de communication, y compris pour ceux à déficience auditive profonde l\'indispensable soutien des interprètes en communication visuelle, jouant un rôle essentiel d\'aide à la communication.',
            },

            implants:{
                title: "Implants cochléaires",
                subtitle: "Enfants ou adultes porteurs d’un ou de deux implants cochléaires",
                text1: "Pour les enfants avec Implants cochléaires, l'objectif du programme est de leur permettre de mieux développer leurs capacités de communication et de développement du langage, et améliorer ainsi leurs possibilités d'intégration au niveau scolaire et dans la société en général.",
                text2: "L’objectif de ce programme est de permettre aux adultes totalement privés d’audition fonctionnelle, d’être accompagnés dans la pose d’un ou de deux implants cochléaires, de bénéficier de soutien et d’exercices de réhabilitation auditive via la prothèse cochléaire jusqu’à récupération maximale de leurs capacités de communication avec l’entourage et avec la société dans son ensemble"
            },

            services:{
                title: "Services",
                subtitle1: "Service d’appui à la formation professionnelle",
                text1: "Pour les enfants avec Implants cochléaires, l'objectif du programme est de leur permettre de mieux développer leurs capacités de communication et de développement du langage, et améliorer ainsi leurs possibilités d'intégration au niveau scolaire et dans la société en général.",
                subtitle2: "Service d’accompagnement pédagogique",
                text2: "Le Service d’Accompagnement Pédagogique offre quant à lui de l’aide aux étudiants sourds inscrits dans une formation supérieure universitaire ou non-universitaire, sous forme de coordination de projet, accompagnement pédagogique, prises de notes, et interprétation des cours. Le suivi dans ce cadre est soumis à l’approbation préalable du projet de l’étudiant par les pouvoirs subsidiants (PHARE, AWIPH,..).",
            },

            formations:{
                title: 'Formations extérieures',
                text1: 'Le service Formations extérieures a pour but d’organiser des formations dans le domaine de la surdité ou encore celui de la méthode de « La langue en Mouvements ».',
                text2: 'Le Centre organise ces formations à l’attention d’enseignants du réseau « ordinaire », de logopèdes, de puéricultrices, de soignants, de rééducateurs ou de toutes personnes impliquées de près ou de loin dans le domaine de la surdité. Il est également possible de suivre une formation de base ou une post formation dans le domaine de la « Langue en mouvements », méthode dynamique d’ "éducation phonologique" pour enfants ou adultes exposés à plusieurs langues parlées dans leur famille ou à l’école.'
            },

            screening:{
                title: 'Dépistage de la surdité',
                text1: 'Le service Dépistage organise l’évaluation, la mise au point et le diagnostic de la surdité. Ceci se réalise soit en maternité (CHIREC ; Edith Cavell à Uccle), soit au Centre même.',
                text2: 'En cas d’antécédents familiaux de déficience auditive ou en cas d’éléments néo-nataux laissant présager un risque potentiel de perte auditive, l’équipe du Centre assure le follow-up de l’enfant jusqu’au diagnostic de surdité ou l’exclusion de tout problème particulier.',
                text3: 'Chaque année, environ 3.000 bébés et jeunes enfants sont ainsi testés par l’équipe. Le Centre accueille également des enfants dépistés dans d’autres services de maternité ou via les consultations médicales. Dans ce cas, l’équipe audio-médicale assure la confirmation du diagnostic de surdité et la mise au point, en coordination étroite avec les hôpitaux et médecins extérieurs.'
            },

            

        },

        skills:{
            acc:{
                title: 'Accompagnement',
                subtitle: 'Service d\'Accompagnement Pédagogique',
                text1: 'Le Service d’Accompagnement Pédagogique offre quant à lui de l’aide aux étudiants sourds inscrits dans une formation supérieure universitaire ou non-universitaire, sous forme de coordination de projet, accompagnement pédagogique, prises de notes, et interprétation des cours. Le suivi dans ce cadre est soumis à l’approbation préalable du projet de l’étudiant par les pouvoirs subsidiants. (PHARE, AWIPH,..).',
            },

            audio:{
                title: 'Audiologie',
                text1: 'Le service audiologie du centre Comprendre et Parler assure l’évaluation et la mise au point des déficiences auditives, l’adaptation des appareils auditifs, la programmation des implants cochléaires et le suivi audiologique / audioprothétique des patients.',
                text2: 'L’équipe est composée de 5 audiologistes pédiatriques dont les spécialisations respectives couvrent l’ensemble du spectre de l’activité (appareils auditifs “conventionnels”, implants cochléaires, systèmes FM, aides techniques d’aide à la communication, audiologie clinique).',
                text3: 'La spécificité pédiatrique du service permet de sélectionner et d\'adapter les techniques audiométriques les plus appropriées à l\'âge et aux capacités de l\'enfant. Les appareils auditifs et les processeurs implants sont réglés avec rigueur et prudence pour les enfants dès le plus jeune âge.',
                text4: 'Notre pratique, notre expérience et nos procédures sont enrichies très régulièrement par nos rencontres et collaborations avec d\'autres équipes et par différentes formations et congrès.',
                text5: 'En collaboration avec toute l\'équipe multidisciplinaire, nous suivons l\'évolution des enfants en nous inscrivant dans la mission générale du Centre Comprendre et Parler.',
            },

            research:{
                title: 'Formations, évaluations et recherches',
                text1: 'Le Centre Comprendre et Parler a, depuis toujours, été à la pointe de la recherche dans le domaine de la surdité et de ses conséquences sur le développement des compétences des enfants sourds.',
                text2: 'Intégrant dans son équipe des membres du corps académique et de recherche de l\'Université Libre de Bruxelles (ULB), des Hautes écoles (Institut Libre Marie Haps), et des membres du Bureau International d\'Audio-phonologie (BIAP), le Centre conduit ou participe à des recherches cliniques ou scientifiques dans son domaine d\'intervention, supervise des mémoires de fin d\'étude en logopédie, psychologie, psycholinguistique, audiologie, psychomotricité, et publie des articles scientifiques ou des ouvrages de référence sur l\'ensemble de la problématique liée à la surdité.',
                text3: 'Le service des formations, évaluations et recherches a pour mission d’organiser des formations, soit internes, soit externes à l’attention d’enseignants du réseau « ordinaire », de logopèdes, de puéricultrices, de soignants, de rééducateurs ou de toute personne impliquée de près ou de loin dans l’accompagnement de l’enfant sourd. Il organise, en lien avec les universités, une activité de recherche et de publication scientifiques dans le domaine de la surdité.  Sa mission s’inscrit dans celle plus générale du Centre Comprendre et Parler qui vise à favoriser le développement de l’enfant sourd en s’appuyant sur la cohérences des moyens mis en œuvre et sur l’utilisation optimales de moyens technologiques.',
                text4: 'Pour « 30 ans d\'action concertée Terrain-Recherche », le Centre a reçu le prix Houtman 1993 de l\'ONE (O. Périer, B. Charlier, J. Leybaert, C. Hage)'
            }
            
           
        },

        mission:{
            title: 'Missions et valeurs',
            subtitle: 'Missions générales',
            intro: 'La mission générale du Centre Comprendre et Parler est d\'assurer la mise en place d\'un projet individualisé pour l\'enfant sourd visant à développer au maximum ses potentialités et ses compétences linguistiques et à favoriser son épanouissement personnel et son autonomie.Le centre s\'appuie sur la collaboration entre partenaires impliqués -enfant, famille et professionnels- , sur la cohérence des moyens mis en œuvre et sur l’utilisation optimale des moyens technologiques.',
            subtitle2: 'Missions élargies',
            listintro: 'A partir de la mission principale, les missions élargies du Centre Comprendre et Parler se déclinent comme suit:',
            values: 'Valeurs',
            
        
        },

        

        
      
}