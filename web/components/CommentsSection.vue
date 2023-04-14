<script lang="ts">
export default defineComponent({
    name: 'CommentsSection',
})
</script>

<template>
    <div class="flex flex-col md:flex-row justify-center items-center w-full md:p-20 p-10 lg:p-32">
        <div class="relative 2xl:w-1/2 md:w-full">
            <img class="md:w-2/4" src="@/assets/images/jerome.jpg" alt="">
            <div
                class="md:absolute bg-white md:top-1/2 2xl:left-3/4 lg:left-2/3 md:transform md:translate-x-1/2 lg:-translate-x-1/2 md:-translate-y-1/2 lg:p-16 lg:pr-60 md:p-10 p-6">
                <h3 class="md:text-3xl text-lg text-black font-poppins font-bold whitespace-nowrap">Jérôme, influenceur
                    sport</h3>
                <Button class="bg-infline-purple md:text-xl text-xs mt-10 md:mt-24 lg:mt-48 text-white whitespace-nowrap">
                    VOIR LES AUTRES AVIS
                </Button>
            </div>
        </div>
    </div>
</template>