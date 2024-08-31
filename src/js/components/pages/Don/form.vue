<template>
    <div id="formdon">
      <h3 v-if="currentStep === 1">{{ $t('form.selecttitle') }}</h3>
      <h3 v-if="currentStep === 2">{{ $t('form.infotitle') }}</h3>
      <h3 v-if="currentStep === 3">{{ $t('form.paytitle') }}</h3>
  
      <form @submit.prevent="submitForm" method="get">
      
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
            :placeholder="this.$t('form.amount')"
            v-model="customAmount"
            @input="clearSelectedAmount"
            min="1"
            step="1"
            @keypress="isNumberKey"
          />
          <input type="hidden" id="montant" name="montant" :value="finalAmount" />
          <button type="button" @click="goToPersonalInfo">{{ $t('form.nextbtn') }}</button>
        </div>
  
 
        <div v-if="currentStep === 2">
          <input
            type="text"
            id="firstName"
            :placeholder="this.$t('form.firstname')"
            v-model="personalInfo.firstName"
            required
          />
          <input
            type="text"
            id="lastName"
            :placeholder="this.$t('form.name')"
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
            :placeholder="this.$t('form.phone')"
            v-model="personalInfo.phone"
            required
          />
          <input
            type="text"
            id="nationalId"
            :placeholder="this.$t('form.idnumber')"
            v-model="personalInfo.nationalId"
            required
          />
          <input type="hidden" id="montant" name="montant" :value="finalAmount" />
          <button type="button" @click="goBack">{{ $t('form.backbtn') }}</button>
          <button type="button" @click="goToPayment" id="nextpay">{{ $t('form.nextbtn') }}</button>
        </div>
  
       
        <div v-if="currentStep === 3">
         
          <input
            type="text"
            id="cardNumber"
            :placeholder="this.$t('form.cardnumber')"
            v-model="payment.cardNumber"
            required
          />
          <input
            type="text"
            id="expiryDate"
            :placeholder="this.$t('form.date')"
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
            :placeholder="this.$t('form.address')"
            v-model="payment.billingAddress"
            required
          />
          <input type="hidden" id="montant" name="montant" :value="finalAmount" />
          <button type="button" @click="goBackToPersonalInfo">{{ $t('form.backbtn') }}</button>
          <input type="submit" :value="this.$t('form.paybtn')" id="paybtn" :disabled="isDisabled"/>
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
        currentStep: 1,
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
        },

        isDisabled: true 
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
        this.customAmount = ''; 
      },
      clearSelectedAmount() {
        this.selectedAmount = null;
      },
      isNumberKey(event) {
        
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
  
        this.currentStep = 2; 
      },
      goBack() {
        this.currentStep = 1; 
      },
      goToPayment() {
        if (!this.personalInfo.firstName || !this.personalInfo.lastName || !this.personalInfo.email || !this.personalInfo.phone || !this.personalInfo.nationalId) {
          alert('Veuillez remplir tous les champs.');
          return;
        }
  
        this.currentStep = 3; 
      },
      goBackToPersonalInfo() {
        this.currentStep = 2; 
      },
      submitForm() {
        if (!this.payment.cardNumber || !this.payment.expiryDate || !this.payment.cvv || !this.payment.billingAddress) {
          alert('Veuillez compléter toutes les informations de paiement.');
          return;
        }
  
        
        alert(`Vous avez sélectionné un montant de ${this.finalAmount}€\nInformations personnelles : ${JSON.stringify(this.personalInfo)}\nDétails du paiement : ${JSON.stringify(this.payment)}`);
      },
    },
  };
  </script>
  
  <style scoped>

#paybtn{
  cursor: not-allowed !important;
}
 #formdon {
  margin: 2rem 0;
  
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



button,
input[type="submit"] {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #005387;
  color: #fff;
  border: none;
  border-radius: 0; 
  cursor: pointer;
  font-size: 1rem;
  
}

button:hover,
input[type="submit"]:hover {
  background-color: #005387;
  color: #ffffff;
  border: none;
}

#paybtn, #nextpay{
    margin-left: 1rem;
}


@media all and (max-width: 476px){
  form{
    padding: 1.5rem;
  }

  .don-options{
        grid-template-columns: repeat(2, 1fr);
    }
}



  </style>
  