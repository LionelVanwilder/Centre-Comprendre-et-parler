<template>
    <div class="aboutus">
        <h2>{{ $t("Aboutus.title") }}</h2>
        <p>{{ $t("Aboutus.intro") }}</p>
        <Router-link to="/Quisommesnous" data-aos="fade-up" data-aos-duration="1000">{{ $t("Aboutus.button") }}</Router-link>
    </div>
</template>

<script>
    export default{
        name: 'AboutUs',
    }
</script>