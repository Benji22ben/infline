<script lang="ts">
export default ({
    name: 'NewsSection',
    data() {
        return {
            news: [
                {
                    image: "/assets/images/news-cropped.png",
                    title: "Trouver l’influenceur parfait pour votre marque",
                    date: "4 mars 2022",
                    isPrincipal: false
                },
                {
                    image: "/assets/images/news.png",
                    title: "50 nouvelles influenceuses rejoignent la plateforme",
                    date: "7 mars 2022",
                    isPrincipal: true
                },
                {
                    image: "/assets/images/news-cropped.png",
                    title: "Instagram investit 100 millions d’euros dans Infline",
                    date: "1 juin 2022",
                    isPrincipal: false
                },
            ]
        }
    }
})
</script>

<template>
    <div class="bg-white w-full lg:p-32 p-20 space-y-20">
        <h1 class="text-black text-center md:text-left text-5xl 2xl:text-8xl font-integral font-bold">Les News</h1>
        <div class="flex flex-col md:flex-row justify-center items-start gap-16">
            <IndexNewsCard v-for="card in news.sort()" :image="card.image" :title="card.title" :date="card.date"
                :isPrincipal="card.isPrincipal" />
        </div>
    </div>
</template>