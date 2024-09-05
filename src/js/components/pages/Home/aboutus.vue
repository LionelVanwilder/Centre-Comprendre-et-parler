<template>
    <div class="aboutus">
        <img src="../../../../../images/soleil.svg" class="icon-sun" alt="soleil enfants">
        <h2>{{ $t("Aboutus.title") }}</h2>
        <img src="../../../../../images/underline.svg" class="icon-line" alt="ligne enfants">
        <p>{{ $t("Aboutus.intro") }}</p>
        <Router-link to="/Quisommesnous" data-aos="fade-up" data-aos-duration="1000">{{ $t("Aboutus.button") }}</Router-link>
    </div>
</template>

<script>
    export default{
        name: 'AboutUs',
    }
</script>