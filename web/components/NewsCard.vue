<template>
    <div class="text-black space-y-4">
        <span class="font-bold font-poppins">{{ date }}</span>
        <hr class="w-full border-black border">
        <h3 class='font-poppins font-medium'>{{ title }}</h3>
        <img :src="image" class="w-full">
    </div>
</template>

<script lang="ts">
export default defineComponent({
    name: 'Card',
    props: {
        image: {
            type: String as PropType<string>,
            required: true,
        },
        title: {
            type: String as PropType<string>,
            required: true,
        },
        date: {
            type: String as PropType<string>,
            required: true,
        },
        isPrincipal: {
            type: Boolean as PropType<boolean>,
            required: true,
        },
    },
})
</script>