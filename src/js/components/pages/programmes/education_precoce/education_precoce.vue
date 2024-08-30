<template>
    <div class="template-page-container">
        <BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
    <div class="Edu-container">
        <h2>{{ $t('Education.title') }}</h2>
        <h4>{{ $t('Education.subtitle') }}</h4>
        <p>
            {{ $t('Education.text1') }}
        </p>
        <p>
            {{ $t('Education.text2') }}
        </p>

        <span>
            {{ $t('Education.span1') }}
        </span>
        <p>
            {{ $t('Education.text3') }}
        </p>
        <p>
            {{ $t('Education.text4') }}
        </p>
    </div>

    </div>
    
</template>
<script>
    import BreadCrumbCom from '../../breadcrumb.vue'


    export default{
            name: 'EducationPrecoce',

            components: {
                BreadCrumbCom
            },

            data(){
                return{
                    breadcrumbs: [
                        {to: '/Programmes', label: 'Programmes'},
                        {to: '/Programmes/EducationPrecoce', label: 'Education précoce'},
                    ]
                }
            }
        }
</script>
<style scoped>
    .Edu-container{
        margin: 0 6rem;
        padding: 1rem;
    }

    h4{
        margin: 2rem 0;
        font-size: 1.2rem;
        color: #222222;
        font-weight: 500;
        letter-spacing: 1.1px;
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
    font-style: italic;
    }

@media all and (max-width: 769px){
    .Edu-container{
        margin: 0 2rem;
    }
}

@media all and (max-width: 600px){
    .Edu-container h1{
        font-size: 2rem;
    }

    .Edu-container h2{
        font-size: 1.5rem;
    }
}

@media all and (max-width: 476px){

    .Edu-container{
        padding: 1rem;
    }
    .Edu-container h1{
        font-size: 1.7rem;
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




}

</style>