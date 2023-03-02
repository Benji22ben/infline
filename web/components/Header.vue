<template>
    <div class="flex flex-row py-24 px-36 font-integral justify-start items-start gap-20 relative">
        <div class="flex flex-col gap-16 mt-10">
            <h1 class="text-5xl font-bold leading-snug">
                LA PLATEFORME <br> N°1 POUR TROUVER <br> UN <span style="-webkit-text-stroke: 1px #B188EA"
                    class="text-black">INFLUENCEUR</span>
            </h1>
            <div class="flex flex-row gap-10">
                <NuxtLink to="/influencers"><Button>Je suis un influenceur</Button></NuxtLink>
                <NuxtLink to="/brands"><Button class="bg-infline-purple text-white">Je suis une marque</Button></NuxtLink>
            </div>
        </div>
        <img class="absolute transform -translate-x-1/6 -translate-y-2/4 left-1/2 top-3/4"
            src="@/assets/images/home-pic.png" alt="">
    </div>
</template>