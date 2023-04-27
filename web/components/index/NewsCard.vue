<template>
    <div class="text-black space-y-4">
        <span class="font-bold font-poppins">{{ date }}</span>
        <hr class="w-full border-black border">
        <h3 class='font-poppins font-medium'>{{ title }}</h3>
        <img :src="image" class="w-full">
    </div>
</template>

<script lang="ts">
export default ({
    name: 'Card',
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        isPrincipal: {
            type: Boolean,
            required: true,
        },
    },
})
</script>