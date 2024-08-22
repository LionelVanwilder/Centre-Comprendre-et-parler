<template>
    <div class="donation-container"  data-aos="fade-up" data-aos-duration="1000">
        <img src="../../../../../icons/Donation.svg" class="icon-bloc-flex">
        <div class="donation-row">
            <div class="donation-image-wrapper">
                <img :src="imagepath" accesskey="">
            </div>
            <div class="donation-content-wrapper">
                
                <span v-html="$t('homedonation.title')"></span>
                
                <p>
                    {{ $t("homedonation.content") }}
                </p>
                <router-link to="/Don">{{ $t("homedonation.button") }}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'DonationSection',

        data(){
            return{
                imagepath: require('/images/donation.avif')
            }
        }
    }
</script>