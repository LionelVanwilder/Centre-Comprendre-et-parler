<template>
    <div class="image-text-row patient-section" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
        <div class="image-wrapper">
            <img src="../../../../../images/patient.webp" alt="Patient enfant">
        </div>
        <div class="content-wrapper">
            <div class="content-wrapper-content patient-content"  data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
                <img :src="iconpath" alt="" class="icon-bloc-flex">
                <h2 v-html="$t('patient.title')"></h2>
                <p>{{ $t('patient.content') }}</p>
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
<style scoped>
.patient-content p{
    text-align: justify;
}

.content-wrapper{
    position: relative;
}
</style>