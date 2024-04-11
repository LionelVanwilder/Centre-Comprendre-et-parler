<template>
    <nav class="navinfo">
            <ul>
                <li>
                    <a target="_blank" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3dc9b63dbd941:0xeb71a7aeb16468?sa=X&ved=2ahUKEwjjutrVudGEAxWIm_0HHfJLDe8Q4kB6BAgOEAA">
                        <img src="../../../../icons/location-dot-solid-white.svg" alt="" class="icon-navinfo">
                        Rue de la Rive 101, 1200 Woluwe-Saint-Lambert
                    </a>
                </li>
                <li>
                    <a href="tel: 02 770 04 40">
                        <img src="../../../../icons/phone-solid-white.svg" alt="" class="icon-navinfo">
                        02 770 04 40
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
                <li><a href="#" class="activelang">FR</a></li>
                <li><a href="#">NL</a></li>
                <li><a href="#">EN</a></li>
                <li><a href="#">LDS</a></li>
            </ul>
        </nav>
</template>

<script>
    export default{
        name: 'NavInfo'
    }
</script>