<template>
    <div class="footer-row">
        <div>
            <h4>Contact</h4>
            <ul>
                <li><a href="#">02 770 04 40</a></li>
                <li><a href="#">adresseMail@outlook.com</a></li>
                <li><a href="#">{{ $t("banner.adress") }}</a></li>
            </ul>
        </div>
        <div class="container-media-footer">
            <h4>{{ $t("footer.follow") }}</h4>
            <div class="media-footer">
                <a href="#">Facebook</a>
            </div>
            <div class="media-footer">
                <a href="#">Instagram</a>
            </div>
            <div class="media-footer">
                <a href="#">Linkedin</a>
            </div>
        </div>
    
        <div class="privacy">
            <ul>
                <li><a href="#">{{ $t("footer.terms") }}</a></li>
                <li><a href="#">{{ $t("footer.gdpr") }}</a></li>
                <li><a href="#">{{ $t("footer.legal") }}</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>
        </div>
    </div>
        
    <div class="footer-footer">
        <div class="policy">
            <a>© 1967 - 2024</a>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'FooterApp'
    }
</script>