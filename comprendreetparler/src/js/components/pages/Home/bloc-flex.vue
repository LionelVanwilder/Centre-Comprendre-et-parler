<template>
    <div class="bloc-flex-container">
        
        <h2>à propos du centre</h2>
        <div class="grid-bloc-flex">
            <div class="bloc-flex" v-for="(item, index) in bloc" :key="index" data-aos="fade-up" data-aos-duration="1000">
                <img :src="item.source" class="icon-bloc-flex">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
                <RouterLink :to="item.url">→ Voir plus</RouterLink>
            </div>
        </div>
                   
    </div>
</template>

<script>
    export default{
        name: 'BlocFlex',

       data(){
        return{
            bloc: [
                            {
                                source: require('../../../../../icons/vision.svg'),
                                title: 'Statut et vision',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                url:'/Vision',
                            },

                            {
                                source: require('../../../../../icons/mission.svg'),
                                title: 'Mission et valeurs',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                url:'/Mission',
                            },

                            {
                                source: require('../../../../../icons/gestion.svg'),
                                title: 'Organes de gestion',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                url:'/OrganesdeGestion',
                            },

                            {
                                source: require('../../../../../icons/hierarchy.svg'),
                                title: 'Organigrammes',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                url:'/Organigrammes',
                            },

                            {
                                source: require('../../../../../icons/report.svg'),
                                title: 'Rapport d\'activités',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                url:'/RapportdActivités',
                            },

                            {
                                source: require('../../../../../icons/history.svg'),
                                title: 'Histoire',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                                url:'/Histoire',
                            },
            ]
        }
       }
    }
</script>