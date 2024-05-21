<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>Rapport d'activités</h2>
        <div class="rapport-container" v-for="(item, index) in rapport" :key="index">
            <h3>{{ item.title }}</h3>
            <p v-html="item.content"></p>
        </div>
    </div>
    </div>
     
 </template>
 
 <script>
     
     import BreadCrumbCom from '../../breadcrumb.vue'
 
     export default {
     name: 'RapportPage',
     
     components: {
    
        BreadCrumbCom,
    },

   data(){

        return{
            rapport: [

                {
                    title: 'Rapport d\'Activité 2017',
                    content: 'Vous trouverez ci dessous le Rapport d\'Activité 2017 tel qu\'il a été présenté à l\'Assemblée Générale du 19 avril 2018.<br>Le lien ci-dessous pointe sur un fichier PDF.'
                },

                {
                    title: 'Rapport d\'Activité 2016',
                    content: 'Vous trouverez ci dessous le Rapport d\'Activité 2016 tel qu\'il a été présenté à l\'Assemblée Générale du 19 avril 2018.<br>Le lien ci-dessous pointe sur un fichier PDF.'
                },

                {
                    title: 'Rapport d\'Activité 2015',
                    content: 'Vous trouverez ci dessous le Rapport d\'Activité 2015 tel qu\'il a été présenté à l\'Assemblée Générale du 19 avril 2018.<br>Le lien ci-dessous pointe sur un fichier PDF.'
                },

                {
                    title: 'Rapport d\'Activité 2014',
                    content: 'Vous trouverez ci dessous le Rapport d\'Activité 2014 tel qu\'il a été présenté à l\'Assemblée Générale du 19 avril 2018.<br>Le lien ci-dessous pointe sur un fichier PDF.'
                },

                {
                    title: 'Rapport d\'Activité 2013',
                    content: 'Vous trouverez ci dessous le Rapport d\'Activité 2013 tel qu\'il a été présenté à l\'Assemblée Générale du 19 avril 2018.<br>Le lien ci-dessous pointe sur un fichier PDF.'
                },

                {
                    title: 'Rapport d\'Activité 2012',
                    content: 'Vous trouverez ci dessous le Rapport d\'Activité 2012 tel qu\'il a été présenté à l\'Assemblée Générale du 19 avril 2018.<br>Le lien ci-dessous pointe sur un fichier PDF.'
                },

                {
                    title: 'Rapport d\'Activité 2011',
                    content: 'Vous trouverez ci dessous le Rapport d\'Activité 2011 tel qu\'il a été présenté à l\'Assemblée Générale du 19 avril 2018.<br>Le lien ci-dessous pointe sur un fichier PDF.'
                },

                {
                    title: 'Rapport d\'Activité 2010',
                    content: 'Vous trouverez ci dessous le Rapport d\'Activité 2010 tel qu\'il a été présenté à l\'Assemblée Générale du 19 avril 2018.<br>Le lien ci-dessous pointe sur un fichier PDF.'
                },

            ],

            breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/RapportdActivités', label: 'Rapport d\'activités'},
                    ]
        }

        },
 
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
</style>