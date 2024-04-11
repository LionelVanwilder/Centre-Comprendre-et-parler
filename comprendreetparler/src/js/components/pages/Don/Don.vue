<template>
<BreadCrumbCom :breadcrumbs="breadcrumbs"></BreadCrumbCom>
<div class="Edu-container">
    
        <img src="../../../../../icons/Donation.svg" class="icon-bloc-flex">
    
    <h2>Comment soutenir le Centre Comprendre et Parler?</h2>
    <p>La générosité de nombreuses personnes ou sociétés, les dons, les activités de sponsoring, 
        le financement de projets ciblés ou encore l'organisation d'évènements caritatifs permettent 
        de soutenir la réalisation de nombreuses activités de notre ASBL. 
    </p>
    <p>
        Tout don versé au Centre d’un montant supérieur ou égal à 40 € fera l’objet d’une attestation fiscale 
        qui vous sera envoyée dans le courant du premier semestre qui suit l’année de votre don. 
        Ainsi, vous pourrez correctement compléter votre déclaration fiscale.
    </p>
    
</div>
<div class="don-grid">
        <div class="don-grid-left">
            <h2>Vous pouvez choisir une domiciliation<br> ou un don à verser sur le compte <span>210-0436107-47</span></h2>
            <p>
                Comprendre et Parler ASBL<br>
                Rue de la Rive, 101<br>
                1200 Bruxelles<br>
                IBAN : BE22 2100 4361 0747<br>
                BIC : GEBABEBB
            </p>
            <p>
                En cliquant sur <span><router-link to="/Competences">ce lien</router-link></span>, vous trouverez un virement bancaire à télécharger.<br> 
                Merci de le compléter et de le transmettre à votre banque.
            </p>
        </div>
        <div class="don-grid-right">
            <h2>Vous pouvez choisir une domiciliation<br> ou un don à verser sur le compte <span>732-0239048-91</span></h2>
            <p>
                Comprendre et Parler ASBL<br>
                Rue de la Rive, 101<br>
                1200 Bruxelles<br>
                IBAN : BE23 7320 2390 4891<br>
                BIC : CREGBEBB
            </p>
            <p>
                En cliquant sur <span><router-link to="/Competences">ce lien</router-link></span>, vous trouverez un virement bancaire à télécharger.<br> 
                Merci de le compléter et de le transmettre à votre banque.
            </p>
        </div>
    </div>
</template>
<script>

import BreadCrumbCom from '../breadcrumb.vue'

export default{
        name: 'DonPage',

        components: {
            BreadCrumbCom
        },

        data(){
            return{
                breadcrumbs: [
                    {to: '/', label: 'Accueil'},
                    {to: '/Don', label: 'Nous Soutenir'}
                ]
            }
        }
    }
</script>
<style scoped>

.don-grid-left h2 span, .don-grid-right h2 span{
    color: #005387;
    font-weight: 700;
}
.Edu-container{
        
        padding: 3rem;
        background-color: #005387;
        margin: 2rem 6rem;
        position: relative;
    }

.Edu-container h2{
    color: #ffffff !important;
}

.Edu-container p{
    color: #ffffff;

}

.don-grid{
    padding: 3rem;
    margin: 2rem 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 50px;
}

.don-grid p{
    margin: 2rem 0;
    line-height: 1.5;
    letter-spacing: 1px;
}

.don-grid h2{
    color: #222222;
}
.don-grid a{
    color: #005387;
    text-decoration: underline;
    font-weight: 600 !important;
    transition: .3s ease-in-out;
}

.icon-bloc-flex{
    right: 30px;
}

@media all and (max-width: 600px){

    .Edu-container{
        padding: 3rem 2rem;
        margin: 2rem 4rem;
    }
    .Edu-container h2{
        font-size: 1.5rem;
    }

    .Edu-container p{
        letter-spacing: 0.5px;
    }

    .don-grid{
        padding: 3rem 2rem;
        margin: 2rem 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .don-grid h2{
        font-size: 1.5rem;
    }

    .don-grid-left{
        display: flex;
        flex-direction: column;
    }

    
}

@media all and (max-width: 476px){
    .icon-bloc-flex{
        height: 3.5rem;
    }

    .Edu-container{
        padding: 3rem 2rem;
        margin: 2rem 2rem;
    }

    .Edu-container h2{
        font-size: 1.2rem;
    }

    .don-grid h2{
        font-size: 1.2rem;
    }

    .don-grid p{
        line-height: 1.2;
    }

    .Edu-container p{
        line-height: 1.3;
    }

    .don-grid{
        padding: 3rem 2rem;
        margin: 2rem 2rem;
    }
}
</style>