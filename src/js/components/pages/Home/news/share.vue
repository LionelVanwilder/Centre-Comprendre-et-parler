<template>
    <div class="grid-row-share">
        <span>Partager:</span>
        <div class="share-container">
                    <a class="share-button" href="https://www.facebook.com/sharer/sharer.php?u=URL_DE_VOTRE_PAGE" target="_blank">
                        <img src="../../../../../../icons/media/facebook-f2.svg" alt="Paratger sur Facebook">
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=URL_DE_VOTRE_PAGE&text=Titre_de_votre_article" target="_blank" rel="noopener noreferrer">
                    <img src="../../../../../../icons/media/twitter.svg" alt="Partager sur Twitter">
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?url=URL_DE_VOTRE_PAGE&title=Titre_de_votre_article" target="_blank" rel="noopener noreferrer">
                    <img src="../../../../../../icons/media/linkedin2.svg" alt="Partager sur LinkedIn">
                    </a>
        </div>
    </div>
    
</template>
<script>
    export default{
        name: 'ShareMedia',
    }
</script>
<style scoped>

    .share-container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: end;
    }

    .share-container a{
        display: flex;
        justify-content: center;
    }
    .share-container img{
        height: 1.5rem;
    }

    span{
        font-size: 1.2rem;
        font-weight: 600;
        color: #444444;
        margin: 2rem 0;
        color: #005387;
        letter-spacing: 1.1px;
    }

    .grid-row-share{
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        width: 60%;
    }

    @media all and (max-width: 426px){
        .grid-row-share{
            width: 85%;
        }

        span{
            font-size: 1rem;
        }

        .share-container img{
            height: 1rem;
        }
    }
</style>