<template>
    <div class="absolute p-4 bg-white w-full h-full text-black max-h-full max-w-full flex flex-row">
        <LoginRegisterInputsSection :submitLoginForm="submitLoginForm" :login="false" />
        <LoginRegisterJoinCommunitySection />
    </div>
</template>

<script lang="ts">
export default (defineComponent({
    name: 'register',
    methods: {
        submitLoginForm(data: any) {
            console.log(data)
        },
    },
}))
</script>
