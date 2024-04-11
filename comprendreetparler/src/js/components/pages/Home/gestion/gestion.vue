<template>
    <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Pages-container-content">
        <h2>Organes de gestion</h2>
        <p>
            <span>AG : </span> L’Assemblée Générale réunit les membres pour approuver les décisions qui tombent notamment dans les catégories suivantes 
            : Modifications de statuts, des parents et des membres du personnel font partie de l'assemblée générale. <br>Elle élit les membres du Conseil d’Administration, 
            elle approuve les comptes et des budgets
        </p>

        <p>
            <span>CA : </span> La gestion de l’ASBL relève de la compétence du Conseil d’Administration. Elle comprend l’ensemble des actes permettant à l’association de 
            vivre au quotidien: gestion du personnel ou des volontaires, organisation des activités de l’association, recherche de subsides et de fonds, relations 
            avec les autorités publiques, les fournisseurs, les bénéficiaires de services; etc...<br>
            <span style="text-decoration: underline; cursor: pointer;">Listes des administrateurs (pdf)</span>
        </p>
        <p>
            <span>CE : </span> Le Comité Exécutif gère l’institution dans tous ses volets organisationnels et de soutien de l’activité au quotidien. 
            Il répartit les missions des personnes travaillant pour le Centre.<br> 
            Le CE émet vers le CA des recommandations qu'il juge nécessaire à la bonne gestion du Centre afin qu'il remplisse les missions qui lui sont allouées.
        </p>

        
        

        <p> Font partie du Comité Exécutif : Alain Baudichau, Président,   Brigitte Charlier, Directrice, Dr Chantal Ligny,  Médecin Directeur</p>
        
        <div class="gestion-grid-container">
           <img src="../../../../../../images/banner.avif">
           <img src="../../../../../../images/banner.avif">
           <img src="../../../../../../images/banner.avif">
        </div>

        <p>
            <span>CD : </span> Le Conseil de Direction est constitué des responsables des équipes professionnelles:  Logopèdes / Animateurs en langue des signes, 
            Interprètes, Psychologues / Psychomotriciens, Audiologues / Audiciens, Assistants sociaux et de l'équipe Finances / Administration / Logistique.<br> 
            Son rôle est de soutenir le Comité Exécutif dans sa tâche de gestion opérationnelle de l'ASBL.
        </p>
   </div>
 </template>
 
 <script>
    import BreadCrumbCom from '../../breadcrumb.vue'

     export default {
     name: 'GestionPage',
     
     components: {
        BreadCrumbCom,
    },

    data(){
        return{
            breadcrumbs: [
                        {to: '/', label: 'Accueil'},
                        {to: '/OrganesdeGestion', label: 'Organe de gestion'},
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

    .gestion-grid-container{
        width: 100%;
        max-width: 1200px;
        display: grid;
        grid-gap: 50px;
        grid-template-columns: repeat(3, 1fr);
        margin: auto;
       padding: 3rem 0;
    }

    .gestion-grid-container img{
        height: 100%;
        width: 100%;
    }

    @media all and (max-width: 769px){
        .gestion-grid-container{
            grid-template-columns: 1fr;
            width: 80%;
        }
    }
</style>