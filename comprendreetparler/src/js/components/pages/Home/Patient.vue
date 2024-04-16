<template>
    <div class="image-text-row">
        <div class="image-wrapper">
            <img src="../../../../../images/banner.avif" alt="">
        </div>
        <div class="content-wrapper">
            <div class="content-wrapper-content"  data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
                <img :src="iconpath" alt="" class="icon-bloc-flex">
                <h2 v-html="$t('patient.title')"></h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'PatientGrid',

        data(){
            return{
                iconpath: require('/images/child.svg'),
            }
        }
    }

    
</script>