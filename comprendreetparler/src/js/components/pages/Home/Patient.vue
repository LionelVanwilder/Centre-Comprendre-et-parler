<template>
    <div class="image-text-row patient-section" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
        <div class="image-wrapper">
            <img src="../../../../../images/patient.webp" alt="Patient enfant">
        </div>
        <div class="content-wrapper">
            <div class="content-wrapper-content patient-content"  data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
                <img :src="iconpath" alt="" class="icon-bloc-flex">
                <h2 v-html="$t('patient.title')"></h2>
                <p>
                    Le Centre Comprendre et Parler accueille des enfants sourds ou malentendants, offrant un soutien spécialisé pour leur développement du langage et de la communication. Les patients bénéficient de thérapies adaptées, visant à améliorer leur compréhension et expression orale, ainsi que leur intégration sociale. Le centre s'engage à fournir des solutions personnalisées pour aider chaque enfant à s’épanouir pleinement et à mieux interagir avec son environnement.
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
<style scoped>
.patient-content p{
    text-align: justify;
}
</style>