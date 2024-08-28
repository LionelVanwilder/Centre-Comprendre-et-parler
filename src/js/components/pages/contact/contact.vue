<template>
<div class="Edu-container">
    <h2>{{ $t("Navinfo.infos") }}</h2>
    <div class="info-container">
        <h3>{{ $t("Contact.schedule") }}</h3>
    <div class="hours-container">
        <div class="hours-content">
            <p class="day">{{ $t("Contact.Mon") }}</p>
            <p class="hours">{{ $t("Contact.open") }}</p>
        </div>
        <div class="hours-content">
            <p class="day">{{ $t("Contact.tue") }}</p>
            <p class="hours">{{ $t("Contact.open") }}</p>
        </div>
        <div class="hours-content">
            <p class="day">{{ $t("Contact.wed") }}</p>
            <p class="hours">{{ $t("Contact.open") }}</p>
        </div>
        <div class="hours-content">
            <p class="day">{{ $t("Contact.thu") }}</p>
            <p class="hours">{{ $t("Contact.open") }}</p>
        </div>
        <div class="hours-content">
            <p class="day">{{ $t("Contact.fri") }}</p>
            <p class="hours">{{ $t("Contact.open") }}</p>
        </div>
        <div class="hours-content">
            <p class="day">{{ $t("Contact.sat") }}</p>
            <p class="hours">{{ $t("Contact.close") }}</p>
        </div>
        <div class="hours-content">
            <p class="day">{{ $t("Contact.sun") }}</p>
            <p class="hours">{{ $t("Contact.close") }}</p>
        </div>
    </div>

    <div class="infos-container">
        <h3>{{ $t("Contact.route") }}</h3>
        <p>- {{ $t("Contact.metro") }}</p>
        <p>- {{ $t("Contact.car") }}</p>
        <p>- {{ $t("Contact.park") }}</p>
        <div id="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.9935774640335!2d4.4445771999999995!3d50.849803200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dc9b63dbd941%3A0xeb71a7aeb16468!2sCentre%20Comprendre%20et%20Parler%20asbl%20%2F%20vzw!5e0!3m2!1sfr!2sbe!4v1724327349489!5m2!1sfr!2sbe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <h3>Contact</h3>
        <ul>
            <li>E-mail : <a href="#" mailto="#"> adresseMail@outlook.com</a></li>
            <li>Tél. +32 2 770 04 40</li>
            <li>Linkedin: <a href="https://be.linkedin.com/company/comprendre-et-parler" class="linkedinlink" target="_blank">Centre Comprendre et Parler asbl</a></li>
        </ul>
    </div>
    </div>
    
</div>
</template>
<script>
export default{
    name: 'ContactPage'
}
</script>
<style scoped>
p{
    margin: .5rem 0 !important;
}
h2{
    color: #222222;
}

.hours-container{
    display: flex;
    flex-direction: column;
    width: 25vw;
}

.hours-content{
    display: flex;
    justify-content: space-between;
    
}

.hours{
    margin-left: 2rem !important;
}

.day{
    font-weight: 600;
}

.infos-container ul li{
    margin: 1rem 0;
}

.linkedinlink{
    color: #005387;
    font-weight: 600;
    text-decoration: underline;
}

@media screen and (max-width: 1200px){
    .hours-container{
        width: 40vw;
    }
}

@media screen and (max-width: 1024px){
    iframe{
        width: 85%;
    }
}

@media screen and (max-width: 769px){
    .hours-container{
        width: 60vw;
    }

    iframe{
        width: 100%;
    }

    .Edu-container{
        margin: 3rem auto !important;
    }
}

@media screen and (max-width: 600px){
    .Edu-container{
        padding: 2rem 0 !important;
        width: 80%;
    }

    .hours-container{
        width: 100%;
    }
}

</style>