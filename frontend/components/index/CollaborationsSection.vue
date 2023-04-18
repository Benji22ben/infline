<script lang="ts">
export default defineComponent({
    name: 'CollaborationsSection',
})
</script>

<template>
    <div
        class="relative w-full md:p-52 p-10 space-y-6 md:space-y-0 flex justify-center items-center flex-col lg:text-4xl md:text-3xl text-xl">
        <h2 class="font-integral z-50">
            déjà plus de
        </h2>
        <h2 class="font-integral text-infline-purple">
            250 collaborations
        </h2>
        <img class="invisible lg:visible absolute top-0 left-0" src="@/assets/images/collaborations/2.png" alt="">
        <img class="invisible lg:visible absolute bottom-0 left-40" src="@/assets/images/collaborations/1.png" alt="">
        <img class="invisible lg:visible absolute top-10" src="@/assets/images/collaborations/3.png" alt="">
        <img class="invisible lg:visible absolute bottom-0 right-1/3" src="@/assets/images/collaborations/4.png" alt="">
        <img class="invisible lg:visible absolute right-0 bottom-0" src="@/assets/images/collaborations/5.png" alt="">
        <img class="invisible lg:visible absolute right-20 top-0" src="@/assets/images/collaborations/6.png" alt="">
    </div>
</template>