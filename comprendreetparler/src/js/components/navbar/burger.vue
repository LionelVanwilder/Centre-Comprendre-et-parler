<template>
    <div class="sidenav" :class="{ 'open': displayMenu }" id="sidenav">
        <button class="OpenMenu" @click="toggleMenu">
            <img src="../../../../icons/bars-solid.svg">
        </button>
        <div class="menu-container animation-menu " v-if="displayMenu">
            <div class="burger-close-btn">
                <button class="CloseMenu" @click="toggleMenu">
                    <img src="../../../../icons/xmark-solid.svg">
                </button>
            </div>
            <ul>
                    <ProgrammesShow :CloseBurger="CloseBurger"></ProgrammesShow>
                    <CompetencesShow :CloseBurger="CloseBurger"></CompetencesShow>
                    <CollaborationsShow :CloseBurger="CloseBurger"></CollaborationsShow>
                    <DocumentationsShow :CloseBurger="CloseBurger"></DocumentationsShow>
                    <ActivitesShow></ActivitesShow>
            </ul>
            <ul class="burger-info">
                <li>
                    <a target="_blank" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3dc9b63dbd941:0xeb71a7aeb16468?sa=X&ved=2ahUKEwjjutrVudGEAxWIm_0HHfJLDe8Q4kB6BAgOEAA">
                        <img src="../../../../icons/location-dot-solid-w.svg" alt="" class="icon-navinfo">
                        {{ $t("banner.adress") }}
                    </a>
                </li>
                <li>
                    <a href="tel: 02 770 04 40">
                        <img src="../../../../icons/phone-solid-white.svg" alt="" class="icon-navinfo">
                        +32 2 770 04 40
                    </a>
                </li>
                
            <ul class="burger-languages">
                    <li><a href="#" :class="{ 'activelangburger' : $i18n.locale === 'fr' }" @click="$i18n.locale = 'fr'">FR</a></li>
                    <li><a href="#" :class="{ 'activelangburger' : $i18n.locale === 'nl' }" @click="$i18n.locale = 'nl'">NL</a></li>
                    <li><a href="#"  :class="{ 'activelangburger' : $i18n.locale === 'en' }" @click="$i18n.locale = 'en'">EN</a></li>
                    <li><a href="#">LDS</a></li>
            </ul>

            </ul>
        </div>
    </div>
</template>
<script>
    import ProgrammesShow from './Showdropdown/ProgrammesShow.vue'
    import CompetencesShow from './Showdropdown/CompetencesShow.vue'
    import CollaborationsShow from './Showdropdown/CollaborationsShow.vue'
    import DocumentationsShow from './Showdropdown/DocumentationShow.vue'
    import ActivitesShow from './Showdropdown/ActivitesShow.vue'

    export default{
        name: 'BurgerNav',

        components: {
            ProgrammesShow,
            CompetencesShow,
            CollaborationsShow,
            DocumentationsShow,
            ActivitesShow
        },

        data(){
            return{
                displayMenu: false,
                showDropdown: false,
            }
        },

        methods: {
        toggleMenu() {
            this.displayMenu = !this.displayMenu;
        },

        CloseBurger(){
            this.displayMenu = false;
        }
    }
    }
</script>


<style>

    .activelangburger{
        background-color: #FF4D00;
        padding: .5rem;
        border-radius: 3px;
    }
    .burger-languages{
        display: flex !important;
        justify-content: space-evenly !important;
        flex-direction: row !important;
        width: 70%;
        margin: auto;
        margin-top: 2rem;
    }

    .burger-info{
       gap: 20px;
       margin-top: 2rem;
       border-top: 2px solid #ffffff;
       padding: 1rem 0;

    }

    .burger-info li a{
        color: #ffffff;
        text-align: left;

    }

    .burger-info li{
        margin: 0;
    }

    .burger-links{
        color: #ffffff;
        margin: .8rem 0;
        text-transform: uppercase;
        position: relative;
        font-weight: 600;
       
    }

    .sidenav{
        display: none;
    }

    .animation-menu{
        animation-name: animation-menu;
    }

    @keyframes animation-menu{
        0%{
            opacity: 0;
            transform: translateX(80%);
        }

        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }



    .burger-close-btn{
        position: relative;
        z-index: 99;
    }

    .CloseMenu{
        position: absolute;
        right: 0;
    }

    .menu-container{
        position: fixed;
        background-color: #005387;
        border: 2px solid #ffffff;
        border-radius: 10px;
        padding: 1rem;
        min-height: 300px;
        overflow-x: hidden;
        top: 2rem;
        right: 2rem;
        max-width: 100vw;
        z-index: 99;
        min-width: 500px;
        animation-duration: .6s;
        transition: ease-in-out;
       
    }
    

    
    .menu-container ul{
        display: flex;
        flex-direction: column;
    
    }

    .burger-dropdown-links a{
        color: #ffffff;
        cursor: pointer;
        text-transform: capitalize;
    }

    .burger-dropdown-links li{
        margin: .3rem;
    }

    .burger-links:after{
        content: url('../../../../icons/chevron-down-solid.svg');
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin-left: .5rem;
        position: absolute;
        top: .1rem;
    }

    @media all and (max-width: 1366px){
        .sidenav{
            display: block;
        }

        .menu-container{
            min-width: 100%;
            border: none;
            border-radius: 0;
            top: 0;
            right: 0;
            max-height: 100vh;
            overflow: auto;
            min-height: 100vh;
            padding: 2rem;
        }
    }
     

    .OpenMenu{
        background-color: #FF4D00;
        border: none;
    }

    .OpenMenu img{
        height: 1.5rem;
    }

    .CloseMenu img{
        height: 1rem;
    }



    @media all and (max-width: 600px){

       
        .menu-container{
            min-width: 100%;
            border: none;
            border-radius: 0;
            top: 0;
            right: 0;
            max-height: 100vh;
            overflow: auto;
            min-height: 100vh;
            padding: 1rem;
        }
    }

    
</style>