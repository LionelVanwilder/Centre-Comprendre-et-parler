<template>
    <div class="donation-container"  data-aos="fade-up" data-aos-duration="1000">
        <img src="../../../../../icons/Donation.svg" class="icon-bloc-flex">
        <div class="donation-row">
            <div class="donation-image-wrapper">
                <img :src="imagepath" accesskey="">
            </div>
            <div class="donation-content-wrapper">
                
                <span>Comment nous<br>soutenir?</span>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
                <router-link to="/Don">Faire un don</router-link>
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