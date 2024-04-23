<template>
<BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
<div class="Edu-container">
    
        <img src="../../../../../icons/Donation.svg" class="icon-bloc-flex">
    
    <h2>{{ $t("donation.title") }}</h2>
    <p>{{ $t("donation.intro") }}</p>
    <p>{{ $t("donation.intro2") }}</p>
    
</div>
<div class="don-grid">
        <div class="don-grid-left">
            <h2 v-html="$t('donation.gridleft.title')"></h2>
            <p v-html="$t('donation.gridleft.info')"></p>
            <p v-html="$t('donation.gridleft.text')"></p>
        </div>
        <div class="don-grid-right">
            <h2 v-html="$t('donation.gridright.title')"></h2>
            <p v-html="$t('donation.gridright.info')"></p>
            <p v-html="$t('donation.gridright.text')"></p>
        </div>
    </div>
</template>
<script>

import BreadCrumbCom from '../breadcrumb.vue'

export default{
        name: 'DonPage',

        components: {
            BreadCrumbCom
        },

        

        data(){
            return{
                breadcrumbs: [
                    {to: '/', label: this.$t('breadcrumbs.home')},
                    {to: '/Don', label: this.$t('breadcrumbs.donation')}
                ]
            }
        }
    }
</script>
<style scoped>
.breadcrumb-container{
    margin-top: 2rem !important;
}
.don-grid-left h2 span, .don-grid-right h2 span{
    color: #005387 !important;
    font-weight: 700 !important;
}
.Edu-container{
        
        padding: 3rem;
        background-color: #005387;
        margin-top: 2rem !important;
        position: relative;
    }

.Edu-container h2{
    color: #ffffff !important;
}

.Edu-container p{
    color: #ffffff;

}

.don-grid{
    padding: 3rem;
    margin: 2rem 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 50px;
}

.don-grid p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
}

.don-grid h2{
    color: #222222;
}
.don-grid a{
    color: #005387;
    text-decoration: underline;
    font-weight: 600 !important;
    transition: .3s ease-in-out;
}

.icon-bloc-flex{
    right: 30px;
}

@media all and (max-width: 600px){

    .Edu-container{
        padding: 3rem 2rem;
        margin: 2rem 4rem;
    }
    .Edu-container h2{
        font-size: 1.5rem;
    }

    .Edu-container p{
        letter-spacing: 0.5px;
    }

    .don-grid{
        padding: 3rem 2rem;
        margin: 2rem 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .don-grid h2{
        font-size: 1.5rem;
    }

    .don-grid-left{
        display: flex;
        flex-direction: column;
    }

    
}

@media all and (max-width: 476px){
    .icon-bloc-flex{
        height: 3.5rem;
    }

    .Edu-container{
        padding: 3rem 2rem;
        margin: 2rem 2rem;
    }

    .Edu-container h2{
        font-size: 1.2rem;
    }

    .don-grid h2{
        font-size: 1.2rem;
    }

    .don-grid p{
        line-height: 1.2;
    }

    .Edu-container p{
        line-height: 1.3;
    }

    .don-grid{
        padding: 3rem 2rem;
        margin: 2rem 2rem;
    }
}
</style>