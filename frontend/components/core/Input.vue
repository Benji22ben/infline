<template>
    <div class="font-poppins flex flex-col items-start gap-4 w-full">
        <label class="text-[#999999]">
            {{ label }}
        </label>
        <div class="flex flex-row w-full border-b border-b-black border-solid pb-2 px-2 gap-4">
            <img class="w-6 h-6" :src="icon" alt="">
            <input @input="$emit('update:modelValue', handleInputChange($event))"
                class="border-none w-full placeholder-black focus:border-none outline-none" :placeholder="placeholder"
                :type="showPassword ? 'text' : type">
            <img @click="showPassword = !showPassword" class="w-6 h-6" v-if="type == 'password'"
                src="@/assets/images/eye.svg" alt="">
        </div>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    name: 'Input',
    props: {
        label: {
            type: String as PropType<string>,
            required: true,
        },
        icon: {
            type: String as PropType<string>,
            required: true,
        },
        placeholder: {
            type: String as PropType<string>,
            required: true,
        },
        type: {
            type: String as PropType<string>,
            required: true,
        },
    },
    data() {
        return {
            showPassword: false,
            inputText: '',
        }
    },
    setup: () => {
        const handleInputChange = (event: Event) =>
            (event.target as HTMLInputElement).value

        return { handleInputChange }
    },
})
</script>