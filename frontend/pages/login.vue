<template>
    <div class="absolute p-4 bg-white w-full h-full text-black max-h-full max-w-full flex flex-row">
        <LoginRegisterInputsSection :submitLoginForm="submitLoginForm" :login="true" />
        <LoginRegisterJoinCommunitySection />
    </div>
</template>

<script lang="ts">
export default (defineComponent({
    name: 'login',
    methods: {
        submitLoginForm(data: any) {
            console.log("coucou")
        },
    },
}))
</script>