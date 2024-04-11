<template>
    <div class="Edu-container">
        <div class="Newsdetail-container" v-for="(detail, index) in NewsDetail" :key="index">
            <p class="news-date" :style="{ backgroundColor: detail.color }">{{ detail.date }}</p>
            <h1>{{ detail.title }}</h1>
            
            <div class="image-wrapper">
                <img :src="detail.image" alt="">
            </div>
            <ShareMedia></ShareMedia>
            <p class="detail-paragraph">{{ detail.content }}</p>
            
        </div>
    </div>
</template>
<script>
    import ShareMedia from '@/js/components/pages/Home/news/share.vue'
    
    export default{
        name: 'NewsDetail',

        components: {
            ShareMedia,
        },

        props: {
            NewsDetail: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style scoped>

    .news-date{
        color: #ffffff !important;
        
    }
    .Newsdetail-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .Edu-container{
        
        padding: 3rem;
        margin: 0 6rem;
        position: relative;
       
    }

    .Edu-container h1{
        color: #444444 !important;
        text-transform: uppercase;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        width: 80%;
        text-align: center;
    }

    .detail-paragraph{
        color: #222222;
        width: 70%;


    }

    .detail-paragraph::first-letter{
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3rem;
        float: left;
        line-height: 1em; /* Ajustement de la hauteur de ligne */
        padding-right: 0.1em; /* Ajustement de l'espacement */
        padding-top: 0.1em; /* Ajustement de l'espacement */
        vertical-align: top;
    }

    

    .image-wrapper{
        overflow: hidden;
        width: 70%;
        margin: auto;
    }

    .image-wrapper img{
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        transition: 0.3s;
    }

    @media all and (max-width: 769px){
        .Edu-container{
            margin: 0 2rem;
        }
    }

    @media all and (max-width: 600px){

        .Edu-container{
            margin: 0;
        }
        .Edu-container h1{
            font-size: 2rem;
        }

        .image-wrapper{
            width: 100%;
        }

        .detail-paragraph{
            width: 100%;
        }


    }

    @media all and (max-width: 476px){

        .Edu-container{
            padding: 1rem;
        }
        .Edu-container h1{
            font-size: 1.7rem;
        }

        .image-wrapper{
            width: 100%;
        }

        .detail-paragraph{
            width: 100%;
        }

        .image-wrapper{
            width: 100%;
        }

        .detail-paragraph{
            width: 100%;
        }

        .Edu-container p{
            letter-spacing: 0.5px;
        }
    }

    @media all and (max-width: 426px){

    .Edu-container{
        padding: 1rem;
    }
    .Edu-container h1{
        font-size: 1.5rem;
    }

    

    .image-wrapper{
        width: 80%;
    }

    .detail-paragraph{
        width: 80%;
    }

    .image-wrapper{
        width: 90%;
    }

    .detail-paragraph{
        width: 90%;
    }
    }

</style>