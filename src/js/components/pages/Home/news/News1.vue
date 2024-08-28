<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
        <NewsDetail :NewsDetail="NewsDetail"></NewsDetail>
    </div>
    
</template>
<script>
    import NewsDetail from './NewsDetail.vue'
    import BreadCrumbCom from '../../breadcrumb.vue'
    

    export default{
        name: 'NewsPage1',

        components: {
            NewsDetail,
            BreadCrumbCom
        },

        data(){
            return{
                NewsDetail: [
                    {
                        title: 'Covid 19: info en LPC à destination des enfants sourds', 
                        image: require('../../../../../../images/news/covid2.jpg'),
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis in nunc fringilla facilisis. Integer rhoncus ex quis neque congue, sed interdum risus interdum. Morbi aliquet justo eu nulla luctus, vel tincidunt metus convallis. Cras hendrerit justo nec urna dignissim, id interdum leo dapibus. Duis at neque eget ipsum efficitur accumsan. Proin nec purus ac dolor pulvinar finibus. Sed eget risus non mauris convallis semper. Integer vehicula dolor ut magna commodo, sed gravida justo luctus. Aenean quis risus quis libero vehicula interdum. Ut suscipit dolor et ultricies vulputate. Morbi ullamcorper neque eu urna dignissim, in tristique nunc malesuada. Duis consequat vel ipsum id laoreet. Cras vel libero vitae ex condimentum dignissim.Quisque interdum ex at risus feugiat, vitae ultricies nulla fringilla. Vivamus in augue ut felis fermentum iaculis eget sit amet dolor. Nunc tincidunt odio quis sem tempor, in efficitur eros faucibus. Mauris non ante id quam venenatis rutrum nec vel lectus. Integer semper magna vel nisi dapibus, in lacinia mauris sagittis. Pellentesque nec sapien a mauris luctus convallis. Proin eget purus id nulla gravida malesuada. Fusce tempus euismod leo sit amet fermentum. Aliquam consectetur ex sed dolor efficitur volutpat. Sed sollicitudin risus sit amet arcu interdum, et aliquam elit pulvinar. Vivamus scelerisque felis ac vestibulum tempor. Vivamus euismod diam a justo cursus, non fermentum nisl venenatis. Nulla quis libero a mauris auctor tempus. Etiam consequat neque nec fringilla feugiat. Nam rhoncus ante a tortor ultricies, non efficitur turpis convallis.',
                        date: '01 MAR 2024',
                        color: '#EA3788',
                    },
                ],

                breadcrumbs: [
                    {to: '/', label: 'Accueil'},
                    {to: '/Actualites', label: 'Actualités'},
                    {to:'', label:'Covid 19'}
                ]
            }
        },

        
    }
</script>
<style scoped>
</style>