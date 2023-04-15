<template>
    <div class="flex flex-row py-10 md:py-28 px-20 lg:px-40 font-integral justify-start items-start gap-20 relative">
        <div class="z-10 flex flex-col gap-10 lg:gap-16 md:mt-10">
            <h1 class="text-xl lg:text-5xl 3xl:text-8xl font-bold leading-snug">
                LA PLATEFORME <br> N°1 POUR TROUVER <br> UN <span style="-webkit-text-stroke: 1px #B188EA"
                    class="text-black">INFLUENCEUR</span>
            </h1>
            <div class="flex flex-col-reverse lg:flex-row gap-10">
                <NuxtLink to="/influencers"><Button class="bg-white">Je suis un influenceur</Button></NuxtLink>
                <NuxtLink to="/brands"><Button class="bg-infline-purple text-white">Je suis une marque</Button></NuxtLink>
            </div>
        </div>
        <img class="absolute transform lg:right-44 right-10 -bottom-40 md:bottom-0 md:top-20 w-1/2 3xl:w-1/5 lg:w-2/6 2xl:w-1/4"
            src="@/assets/images/home-pic.png" alt="">
    </div>
</template>