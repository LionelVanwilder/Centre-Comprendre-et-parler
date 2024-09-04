<template>
    <div class="footer-container">
        <div class="footer-row">
        <div>
            <h4>Contact</h4>
            <ul>
                <li><a href="#">02 770 04 40</a></li>
                <li><a href="mailto:info@ccpasbl.be" class="footermail">info@ccpasbl.be</a></li>
                <li><a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3dc9b63dbd941:0xeb71a7aeb16468?sa=X&ved=2ahUKEwjjutrVudGEAxWIm_0HHfJLDe8Q4kB6BAgOEAA" target="_blank">{{ $t("banner.adress") }}</a></li>
            </ul>
        </div>
        <div class="container-media-footer">
            <h4>{{ $t("footer.follow") }}</h4>
            <div class="media-footer">
                <a href="https://www.facebook.com/CentreComprendreEtParlerAsbl/?locale=fr_FR" target="_blank">Facebook</a>
            </div>
            <!--<div class="media-footer">
                <a href="#">Instagram</a>
            </div>-->
            <div class="media-footer">
                <a href="https://fr.linkedin.com/company/comprendre-et-parler" target="_blank">Linkedin</a>
            </div>
        </div>
    
        <div class="privacy">
            <ul>
                <li><router-link to="/Privacy">{{ $t("footer.terms") }}</router-link></li>
                <!--<li><a href="#">{{ $t("footer.gdpr") }}</a></li>-->
                <li><router-link to="/Legal">{{ $t("footer.legal") }}</router-link></li>
                <!--<li><a href="#">Cookies</a></li>-->
            </ul>
        </div>
    </div>
        
    <div class="footer-footer">
        <div class="policy">
            <p>{{ $t("footer.rights") }}</p>
        </div>
    </div>
    </div>
    
</template>

<script>


    export default{
        name: 'FooterApp'
    }
</script>

<style scoped>
footer p{
    color: #ffffff;
    letter-spacing: 1.2px;
    text-transform: capitalize;
}
</style>