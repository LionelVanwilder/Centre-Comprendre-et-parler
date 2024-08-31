<template>
    <div class="programmes-container">
        <div class="programmes-nav">
            <ul>
                <li><router-link to="/Programmes/EducationPrecoce">{{ $t("navbar.dropdown.program.education") }}</router-link></li>
                <li><router-link to="/Programmes/Specialisation">{{ $t("navbar.dropdown.program.spec") }}</router-link></li>
                <li><router-link to="/Programmes/Integration">{{ $t("navbar.dropdown.program.integration") }}</router-link></li>
                <li><router-link to="/Programmes/Services">{{ $t("navbar.dropdown.program.services") }}</router-link></li>
                <li><router-link to="/Programmes/FormationsExterieures">{{ $t("navbar.dropdown.program.formations") }}</router-link></li>
                <li><router-link to="/Programmes/Depistage">{{ $t("navbar.dropdown.program.screening") }}</router-link></li>
            </ul>
        </div>
        <div class="programmes-text">
        <h2>{{ $t('program.heading') }}</h2>
        <h3>{{ $t('program.subheading') }}</h3>
        <p>
            {{ $t('program.content1') }}
        </p>
        <p>
            {{ $t('program.content2') }}
        </p>
        <p>
            {{ $t('program.content3') }}
        </p>

        <h3>{{ $t('program.subtitle1') }}</h3>
        <p>{{ $t('program.content4') }}</p> 
        </div>
       
    </div>
   
</template>
<script>
    export default{
        name: 'ProgrammesPage',


    }
</script>
<style scoped>

</style>