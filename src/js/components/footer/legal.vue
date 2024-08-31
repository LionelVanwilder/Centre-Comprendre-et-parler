<template>
    <div class="template-page-container">
    <div class="Edu-container">
        <p>
            <span>{{ $t('footer.privacy.title1') }}</span>
        </p>

        <p v-html="$t('footer.privacy.content1')"></p>

        <p><span>{{ $t('footer.privacy.title2') }}</span></p>
        <p v-html="$t('footer.privacy.content2')"></p>
        <p><span>{{ $t('footer.privacy.title3') }}</span></p>
        <p v-html="$t('footer.privacy.content3')"></p>
        <p><span>{{ $t('footer.privacy.title4') }}</span></p>
        <p v-html="$t('footer.privacy.content4')"></p>
        <p><span>{{ $t('footer.privacy.title5') }}</span></p>
        <p v-html="$t('footer.privacy.content5')"></p>
    </div>
    </div>
    

</template>
<script>



export default{
        name: 'PrivacyPage',

        

       
    }
</script>
<style scoped>
    .Edu-container{
        margin: 0 6rem;
        padding: 1rem;
    }

   

    p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    }

    span{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
    color:  #005387;
    font-weight: 600;
    
    }

    

    a{
        color: #005387;
        font-weight: 600;
        text-decoration: underline;
    }
    

@media all and (max-width: 769px){
    .Edu-container{
        margin: 0 2rem;
    }
}

@media all and (max-width: 600px){
   

    .Edu-container h2{
        font-size: 1.5rem;
    }

    
}

@media all and (max-width: 476px){

    .Edu-container{
        padding: 1rem;
    }
 

    .Edu-container p{
        letter-spacing: 0.5px;
    }
}

@media all and (max-width: 426px){

.Edu-container{
    padding: 1rem;
}





}
</style>