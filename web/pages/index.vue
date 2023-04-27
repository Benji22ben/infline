
import Footer from '~/components/index/Footer.vue';


import NewsSection from '~/components/index/NewsSection.vue';


import CommentsSection from '~/components/index/CommentsSection.vue';


import DomainSection from '~/components/index/DomainSection.vue';


import CollaborationsSection from '~/components/index/CollaborationsSection.vue';


import RelationshipSection from '~/components/index/RelationshipSection.vue';


import BrandSection from '~/components/index/BrandSection.vue';


import Header from '~/components/index/Header.vue';


import Header from '~/components/index/Header.vue';

<template>
    <h1 class="font-integral text-center p-8 text-2xl 2xl:text-4xl">INFLINE</h1>
    <Header />
    <BrandSection />
    <RelationshipSection />
    <CollaborationsSection />
    <DomainSection />
    <CommentsSection />
    <NewsSection />
    <Footer />
</template>

<script lang="ts">
import BrandSection from '~/components/index/BrandSection.vue';
import CollaborationsSection from '~/components/index/CollaborationsSection.vue';
import CommentsSection from '~/components/index/CommentsSection.vue';
import DomainSection from '~/components/index/DomainSection.vue';
import Footer from '~/components/index/Footer.vue';
import Header from '~/components/index/Header.vue';
import NewsSection from '~/components/index/NewsSection.vue';
import RelationshipSection from '~/components/index/RelationshipSection.vue';

export default (({
    name: "index",
    components: { Header, BrandSection, RelationshipSection, CollaborationsSection, DomainSection, CommentsSection, NewsSection, Footer }
}))
</script>