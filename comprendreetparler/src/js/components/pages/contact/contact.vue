<template>
<div class="Edu-container">
    <h2>Infos pratiques</h2>
    <div class="info-container">
        <h3>Horaires du centre</h3>
    <div class="hours-container">
        <div class="hours-content">
            <p class="day">Lundi</p>
            <p class="hours">08:30 - 17:00</p>
        </div>
        <div class="hours-content">
            <p class="day">Mardi</p>
            <p class="hours">08:30 - 17:00</p>
        </div>
        <div class="hours-content">
            <p class="day">Mercredi</p>
            <p class="hours">08:30 - 17:00</p>
        </div>
        <div class="hours-content">
            <p class="day">jeudi</p>
            <p class="hours">08:30 - 17:00</p>
        </div>
        <div class="hours-content">
            <p class="day">Vendredi</p>
            <p class="hours">08:30 - 17:00</p>
        </div>
        <div class="hours-content">
            <p class="day">Samedi</p>
            <p class="hours">Fermé</p>
        </div>
        <div class="hours-content">
            <p class="day">Dimanche</p>
            <p class="hours">Fermé</p>
        </div>
    </div>

    <div class="infos-container">
        <h3>Comment se rendre au centre?</h3>
        <p>- 7 minutes à pied de l'arret Alma</p>
        <p>- Accessible en voiture</p>
        <p>- Parking disponible</p>
        <div id="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.9935774640335!2d4.4445771999999995!3d50.849803200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dc9b63dbd941%3A0xeb71a7aeb16468!2sCentre%20Comprendre%20et%20Parler%20asbl%20%2F%20vzw!5e0!3m2!1sfr!2sbe!4v1724327349489!5m2!1sfr!2sbe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <h3>Contact</h3>
        <ul>
            <li>E-mail : <a href="#" mailto="#"> adresseMail@outlook.com</a></li>
            <li>Tél. +32 2 770 04 40</li>
            <li>Linkedin: <a href="https://be.linkedin.com/company/comprendre-et-parler" class="linkedinlink">Centre Comprendre et Parler asbl</a></li>
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

</style>