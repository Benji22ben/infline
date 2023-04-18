<template>
    <button :type="type == 'submit' ? 'submit' : 'button'"
        class="rounded-xl font-integral text-black font-bold text-xs 2xl:text-xl 2xl:px-12 2xl:py-4 px-6 py-4 hover:opacity-50">
        <slot></slot>
    </button>
</template>


<script lang="ts">
export default defineComponent({
    name: 'Button',
    props: {
        type: {
            type: String as PropType<string>,
            required: false,
        }
    }
})
</script>