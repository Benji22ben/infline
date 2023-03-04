<script lang="ts">
export default defineComponent({
    name: 'BrandSection',
    data() {
        return {
            brands: [
                "/assets/images/brands/logoNike.png",
                "/assets/images/brands/logoBk.png",
                "/assets/images/brands/logoSamsung.png",
                "/assets/images/brands/logoAdidas.png",
                "/assets/images/brands/logoGoogle.png",
                "/assets/images/brands/logoKfc.png"
            ]
        }
    }
})
</script>

<template>
    <div class="font-poppins bg-infline-purple w-full flex flex-col justify-center items-center gap-16">
        <div class="flex flex-row gap-14 justify-center items-center pt-52">
            <img v-for="brand in brands" :src="brand" alt="">
        </div>
        <p class="text-center text-black w-3/6 font-semibold text-xl pb-52">
            Infline est la plateforme numéro 1 dans la mise en relation entre les influenceurs et les marques en France.
            Finies
            les recherches interminables, matchez avec le profil parfait
        </p>
    </div>
</template>