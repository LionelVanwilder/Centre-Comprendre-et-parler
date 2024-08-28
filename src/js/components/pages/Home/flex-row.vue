<template>
    <div class="flex-row-container">
        <div class="flex-row">
                <div class="flex-row-div" data-aos="fade-right" data-aos-duration="1000">
                    <h4>600</h4>
                    <p>{{ $t("flexrow.first") }}</p>
                </div>
                <div class="flex-row-div" data-aos="fade-left" data-aos-duration="1000">
                    <h4>110</h4>
                    <p>{{ $t("flexrow.second") }}</p>
                </div>
            </div>
    </div>
</template>

<script>
    export default{
        name: 'FlexRow'
    }
</script>