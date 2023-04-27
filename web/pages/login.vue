<template>
    <div class="absolute p-4 bg-white w-full h-full text-black max-h-full max-w-full flex flex-row">
        <InputsSection :submitLoginForm="submitLoginForm" :login="true" />
        <JoinCommunitySection />
    </div>
</template>

<script lang="ts">
import InputsSection from '~/components/loginRegister/InputsSection.vue';
import JoinCommunitySection from '~/components/loginRegister/JoinCommunitySection.vue';

export default (({
    name: "login",
    methods: {
        submitLoginForm(data: any) {
            console.log("coucou");
        },
    },
    components: { InputsSection, JoinCommunitySection }
}))
</script>