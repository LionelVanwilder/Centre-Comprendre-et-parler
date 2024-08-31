<template>
    <div class="template-page-container">
    <div class="Edu-container">
        <p>
            <span>{{ $t('footer.legalpage.title') }}</span>
        </p>

    <p>{{ $t('footer.legalpage.content1') }}</p>
      <p>{{ $t('footer.legalpage.content2') }}</p>
      <p>{{ $t('footer.legalpage.content3') }}</p>
      <p>{{ $t('footer.legalpage.content4') }}info@ccpasbl.be </p>
      <p>{{ $t('footer.legalpage.content5') }}</p>
      <p>{{ $t('footer.legalpage.content6') }}</p>
    </div>
    </div>
    

</template>
<script>



export default{
        name: 'LegalPage',

        

       
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