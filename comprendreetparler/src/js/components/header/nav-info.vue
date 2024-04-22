<template>
    <nav class="navinfo">
            <ul>
                <li>
                    <a target="_blank" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3dc9b63dbd941:0xeb71a7aeb16468?sa=X&ved=2ahUKEwjjutrVudGEAxWIm_0HHfJLDe8Q4kB6BAgOEAA">
                        <img src="../../../../icons/location-dot-solid-white.svg" alt="" class="icon-navinfo">
                        {{ $t("banner.adress") }}
                    </a>
                </li>
                <li>
                    <a href="tel: 02 770 04 40">
                        <img src="../../../../icons/phone-solid.svg" alt="" class="icon-navinfo">
                        +32 2 770 04 40
                    </a>
                </li>
            </ul>
            <ul class="navinfo-media">
                <li>
                    <a href="#">
                        <img src="../../../../icons/media/facebook-f.svg" alt="" class="icon-navinfo">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../../../icons/media/instagram.svg" alt="" class="icon-navinfo">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../../../../icons/media/linkedin.svg" alt="" class="icon-navinfo">
                    </a>
                </li>
            </ul>
            <ul class="langnavinfo">
                <!--<li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"><a>{{ locale }}</a></li>-->
                
                
                    <li><a href="#" :class="{ 'activelang': $i18n.locale === 'fr' }" @click="$i18n.locale = 'fr'">FR</a></li>
                    <li><a href="#" :class="{ 'activelang': $i18n.locale === 'nl' }" @click="$i18n.locale = 'nl'">NL</a></li>
                    <li><a href="#"  :class="{ 'activelang': $i18n.locale === 'en' }" @click="$i18n.locale = 'en'">EN</a></li>
                    <!--<a href="#" id="signbtn"><img src="../../../../icons/hands-asl-interpreting-solid.svg"></a>-->
                </ul>
               
        </nav>
</template>

<script>
    export default{
        name: 'NavInfo'
    }
</script>