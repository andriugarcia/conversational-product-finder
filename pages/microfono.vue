<template lang="pug">
  #index
    v-layout(column, align-center)
      v-card.elevation-12(:class="{'mt-12': $vuetify.breakpoint.mdAndUp}", style="width: 100%; max-width: 1000px")
        v-fade-transition
          .pa-6.pb-6(v-show="testOpen", style="max-width: 1000px; width: 100%;")
            test
        v-fade-transition
          div(v-show="!testOpen")
            v-layout
              v-layout.px-4(style="background-color: #2962ff;", align-center)
                img(src="/logowhite.svg", style="width: 20px;")
                b.py-3.pl-4.white--text(@click="$router.push({path: '/'})") Encuentra tu Mejor
                span.py-3.white--text / {{ pageName }}
            .px-6.pb-6
              h1.mt-6 {{ page.title }}
              .subtitle {{page.description}}
              v-divider.mt-12
              v-layout(justify-center)
                test.py-6(style="width: 100%")
                //- v-btn.my-12.px-12.font-weight-bold(x-large, dark, rounded, color="#2962ff", @click="testOpen = true") Comenzar Test
              v-divider.mb-12
              article(style="max-width: 1000px; width: 100%")
                v-layout(justify-center, style="width: 100%")
                  nuxt-content(:document="page")
              h2 🔥 Los {{page.product}} más comprados
              v-layout.mt-4(wrap)
                v-flex.pa-1(xs6, md3, v-for="(el, i) in portatiles", :key="i")
                  product(:product="el", style="height: 100%")
              //- h2 Otros Tests

</template>

<script>
import Test from "@/layouts/test.vue";
import Product from "@/components/product.vue";
import microfonosData from "../products/microfono.json";

export default {
  head() {
    return {
      title: this.page.seotitle,
      description: this.page.seodescription,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.seodescription
        },
        { property: "og:title", content: this.page.seotitle },
        { property: "og:description", content: this.page.seodescription },
        { property: "og:site_name", content: "Recomendador" },
        { property: "og:type", content: "website" },
        // { property: 'og:image', content: ''},
        // { property: 'og:url', content: ''},
        { name: "twitter:title", content: this.page.seotitle },
        { name: "twitter:description", content: this.page.seodescription },
        // { name: 'twitter:image', content: ''},
        { name: "twitter:image:alt", content: "Logo de Recomendador" },
        // { name: 'twitter:card', content: '' },
        { name: "twitter:site", content: "@versymattic" }
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: this.page.q1,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: this.page.a1
                }
              },
              {
                "@type": "Question",
                name: this.page.q2,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: this.page.a2
                }
              },
              {
                "@type": "Question",
                name: this.page.q3,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: this.page.a3
                }
              }
            ]
          }
        }
      ]
    };
  },
  components: {
    Test,
    Product
  },
  data() {
    return {
      found: true,
      testOpen: false,
      portatiles: microfonosData
        .sort(function(first, second) {
          return first.tags.includes("Choice") && second.tags.includes("Choice")
            ? 0
            : first.tags.includes("Choice")
            ? -1
            : 1;
        })
        .slice(0, 8),

      pageName:
        this.$router.history.current.path.charAt(1).toUpperCase() +
        this.$router.history.current.path.slice(2)
    };
  },
  methods: {
    toAmazon(link) {
      window.open(link);
    }
  },
  async asyncData({ $content, redirect, params }) {
    let page;
    try {
      page = await $content("microfono").fetch();
    } catch (err) {
      redirect(`/notFound`);
    }

    return {
      page
    };
  }
};
</script>
