<template>
    <div class="absolute p-4 bg-white w-full h-full text-black max-h-full max-w-full flex flex-row">
        <InputsSection :submitForm="registerSubmit" :login="false" />
        <JoinCommunitySection />
    </div>
</template>

<script lang="ts">
import InputsSection from '~/components/loginRegister/InputsSection.vue';
import JoinCommunitySection from '~/components/loginRegister/JoinCommunitySection.vue';

export default (({
    name: "register",
    methods: {
        registerSubmit(data: any) {
            this.submitRegisterForm(data).then((result) => {
                console.log(result)
            }).catch((error) => {
                console.error('Auth form had an error', error)
            });
        },

        async submitRegisterForm(data: any) {
            return await $fetch("http://localhost:1337/api/auth/local/register", {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                method: 'POST',
                body: {
                    email: data.email,
                    username: data.username,
                    password: data.password,
                }
            });
        },
    },
    components: { InputsSection, JoinCommunitySection }
}))
</script>
