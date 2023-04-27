<script lang="ts">
export default ({
    name: 'CommentsSection',
})
</script>

<template>
    <div class="flex flex-col md:flex-row justify-center items-center w-full md:p-20 p-10 lg:p-32">
        <div class="relative 2xl:w-1/2 md:w-full">
            <img class="md:w-2/4" src="@/assets/images/jerome.jpg" alt="">
            <div
                class="md:absolute bg-white md:top-1/2 3xl:left-3/4 lg:left-2/3 md:transform md:translate-x-1/2 lg:-translate-x-1/2 md:-translate-y-1/2 lg:p-16 md:p-10 w-full md:w-3/5 p-6 flex flex-col gap-4">
                <h3 class="md:text-2xl lg:text-2xl text-lg text-black font-poppins font-bold whitespace-nowrap">
                    Jérôme,
                    influenceur
                    sport</h3>
                <p class="text-black font-poppins w-full">
                    Infline m’a permis d’être en relation avec plus de 100 marques depuis que je me suis inscrit sur la
                    plateforme. C’est de la bombe !
                </p>
                <CoreButton class="bg-infline-purple md:text-xl text-xs text-white whitespace-nowrap">
                    VOIR LES AUTRES AVIS
                </CoreButton>
            </div>
        </div>
    </div>
</template>