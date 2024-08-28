<template>
    <div id="formdon">
      <h3 v-if="currentStep === 1">Choisissez un montant</h3>
      <h3 v-if="currentStep === 2">Informations personnelles</h3>
      <h3 v-if="currentStep === 3">Paiement</h3>
  
      <form @submit.prevent="submitForm">
        <!-- Étape 1 : Sélection du montant -->
        <div v-if="currentStep === 1">
          <div class="don-options">
            <div
              v-for="option in options"
              :key="option"
              :class="['don-option', { active: selectedAmount === option }]"
              @click="selectAmount(option)"
            >
              {{ option }}€
            </div>
          </div>
          <input
            type="number"
            name="montantperso"
            placeholder="Montant personnalisé"
            v-model="customAmount"
            @input="clearSelectedAmount"
            min="1"
            step="1"
            @keypress="isNumberKey"
          />
          <input type="hidden" id="montant" name="montant" :value="finalAmount" />
          <button type="button" @click="goToPersonalInfo">Suivant</button>
        </div>
  
        <!-- Étape 2 : Informations personnelles -->
        <div v-if="currentStep === 2">
          <input
            type="text"
            id="firstName"
            placeholder="Prénom"
            v-model="personalInfo.firstName"
            required
          />
          <input
            type="text"
            id="lastName"
            placeholder="Nom"
            v-model="personalInfo.lastName"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            v-model="personalInfo.email"
            required
          />
          <input
            type="tel"
            id="phone"
            placeholder="Téléphone"
            v-model="personalInfo.phone"
            required
          />
          <input
            type="text"
            id="nationalId"
            placeholder="Numéro de registre national"
            v-model="personalInfo.nationalId"
            required
          />
          <input type="hidden" id="montant" name="montant" :value="finalAmount" />
          <button type="button" @click="goBack">Retour</button>
          <button type="button" @click="goToPayment" id="nextpay">Suivant</button>
        </div>
  
        <!-- Étape 3 : Paiement -->
        <div v-if="currentStep === 3">
          <!-- Ajoutez ici les champs de paiement, par exemple : -->
          <input
            type="text"
            id="cardNumber"
            placeholder="Numéro de carte"
            v-model="payment.cardNumber"
            required
          />
          <input
            type="text"
            id="expiryDate"
            placeholder="Date d'expiration (MM/AA)"
            v-model="payment.expiryDate"
            required
          />
          <input
            type="text"
            id="cvv"
            placeholder="CVV"
            v-model="payment.cvv"
            required
          />
          <input
            type="text"
            id="billingAddress"
            placeholder="Adresse de facturation"
            v-model="payment.billingAddress"
            required
          />
          <input type="hidden" id="montant" name="montant" :value="finalAmount" />
          <button type="button" @click="goBackToPersonalInfo">Retour</button>
          <input type="submit" value="Payer" id="paybtn"/>
        </div>
      </form>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'DonForm',
    data() {
      return {
        options: [5, 10, 15, 20, 30, 50],
        selectedAmount: null,
        customAmount: '',
        currentStep: 1, // Étape actuelle : 1 = montant, 2 = infos personnelles, 3 = paiement
        personalInfo: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          nationalId: ''
        },
        payment: {
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          billingAddress: ''
        }
      };
    },
    computed: {
      finalAmount() {
        return this.selectedAmount || this.customAmount;
      },
    },
    methods: {
      selectAmount(amount) {
        this.selectedAmount = amount;
        this.customAmount = ''; // Clear custom input when a preset option is selected
      },
      clearSelectedAmount() {
        this.selectedAmount = null;
      },
      isNumberKey(event) {
        // Prevents input of any non-numeric characters and decimals
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          event.preventDefault();
        }
      },
      goToPersonalInfo() {
        if (!this.finalAmount) {
          alert('Veuillez sélectionner un montant ou entrer un montant personnalisé.');
          return;
        }
  
        const montant = parseInt(this.customAmount, 10);
  
        if (this.customAmount && (isNaN(montant) || montant <= 0)) {
          alert('Veuillez entrer un montant valide (un entier positif sans décimales).');
          return;
        }
  
        this.currentStep = 2; // Passer à l'étape des informations personnelles
      },
      goBack() {
        this.currentStep = 1; // Retour à l'étape de sélection du montant
      },
      goToPayment() {
        if (!this.personalInfo.firstName || !this.personalInfo.lastName || !this.personalInfo.email || !this.personalInfo.phone || !this.personalInfo.nationalId) {
          alert('Veuillez remplir tous les champs.');
          return;
        }
  
        this.currentStep = 3; // Passer à l'étape de paiement
      },
      goBackToPersonalInfo() {
        this.currentStep = 2; // Retour à l'étape des informations personnelles
      },
      submitForm() {
        if (!this.payment.cardNumber || !this.payment.expiryDate || !this.payment.cvv || !this.payment.billingAddress) {
          alert('Veuillez compléter toutes les informations de paiement.');
          return;
        }
  
        // Soumettez le formulaire ou effectuez d'autres actions ici
        alert(`Vous avez sélectionné un montant de ${this.finalAmount}€\nInformations personnelles : ${JSON.stringify(this.personalInfo)}\nDétails du paiement : ${JSON.stringify(this.payment)}`);
      },
    },
  };
  </script>
  
  <style scoped>
 #formdon {
  margin: 2rem 0;
  width: 50%;
}

#formdon h3 {
  background-color: #005387;
  padding: 2rem;
  color: #ffffff;
}

form {
  padding: 2rem;
  border: 1px solid #c3c3c3;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.don-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 2rem;
  margin-bottom: 2rem;
}

.don-option {
  background-color: #f0f0f0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: 2px solid transparent;
}

.don-option:hover {
  background-color: #d1e7fd;
}

.don-option.active {
  border-color: #005387;
  background-color: #005387;
  color: #fff;
}

input[type="number"],
input[type="text"],
input[type="email"],
input[type="tel"] {
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"] {
  margin-top: 0.5rem;
  background-color: #05060f0a;
  border: none;
}

/* Styles communs pour tous les boutons */
/* Styles communs pour tous les boutons */
button,
input[type="submit"] {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #005387;
  color: #fff;
  border: none;
  border-radius: 0; /* Assurez-vous que border-radius est défini à 0 */
  cursor: pointer;
  font-size: 1rem;
  
}

button:hover,
input[type="submit"]:hover {
  background-color: #005387;
  color: #ffffff;
  border: none; /* Assurez-vous qu'il n'y a pas de bordure au survol */
}

#paybtn, #nextpay{
    margin-left: 1rem;
}




  </style>
  