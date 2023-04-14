<script lang="ts">
export default defineComponent({
    name: 'DomainSection',
})
</script>

<template>
    <div class="bg-white w-full p-16 lg:p-32 flex justify-center items-center flex-col lg:gap-16 gap-10">
        <h3 class="text-black font-poppins font-bold text-center lg:text-3xl text-xl">Les domaines qu’on couvre.</h3>
        <ul class="text-center font-integral font-bold text-infline-gray text-3xl lg:text-6xl space-y-2">
            <li>BEAUTE</li>
            <li>MUSCULATION</li>
            <li>GAMING</li>
            <li>MAQUILLAGE</li>
        </ul>
    </div>
</template>