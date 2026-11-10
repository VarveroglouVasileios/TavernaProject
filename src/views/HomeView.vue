<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FaqSection from '@/components/FaqSection.vue'
import Lightbox from '@/components/Lightbox.vue'
import SearchBar from '@/components/SearchBar.vue'
import { dishPhotos, gallery, photo } from '@/data/content'
import { signature } from '@/data/menu'

const { t, locale } = useI18n()
const lang = computed(() => (locale.value === 'en' ? 'en' : 'el'))
const price = (amount: number) => new Intl.NumberFormat(locale.value, { style: 'currency', currency: 'EUR' }).format(amount)

const locationAlt = computed(() => (lang.value === 'en' ? 'The little harbour with fishing boats at dusk' : 'Το λιμανάκι με τα καΐκια το σούρουπο'))
const lightboxIndex = ref<number | null>(null)
const items = computed(() => gallery.map((g) => ({ src: photo(g.image), alt: g.alt[lang.value], caption: g.caption[lang.value] })))
</script>

<template>
  <section class="photo-hero">
    <img :src="photo('terrace')" alt="" width="1024" height="576" fetchpriority="high" />
    <div class="photo-hero-shade" />
    <div class="shell photo-hero-copy">
      <p class="hero-location"><span aria-hidden="true">✦</span> {{ t('home.location') }}</p>
      <h1>{{ t('home.title') }}</h1>
      <p class="hero-intro">{{ t('home.intro') }}</p>
    </div>
  </section>

  <div class="shell hero-search"><SearchBar /></div>

  <section class="visit-band" :aria-label="t('home.info')">
    <dl class="shell visit-grid">
      <div>
        <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
          <circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" />
        </svg>
        <dt>{{ t('home.hoursLabel') }}</dt><dd>{{ t('home.hours') }}</dd>
      </div>
      <div>
        <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2.3" />
        </svg>
        <dt>{{ t('home.addressLabel') }}</dt><dd>{{ t('home.address') }}</dd>
      </div>
    </dl>
  </section>

  <section class="shell story">
    <div v-reveal class="story-copy">
      <p class="kicker">{{ t('home2.storyKicker') }}</p>
      <h2>{{ t('home2.storyTitle') }}</h2>
      <p class="lead">{{ t('home2.storyText') }}</p>
    </div>
    <div class="story-photos">
      <img v-reveal :src="photo('interior')" alt="" width="1024" height="1024" loading="lazy" class="story-main" />
      <img v-reveal="150" :src="photo('meze')" alt="" width="1024" height="1024" loading="lazy" class="story-inset" />
    </div>
  </section>

  <section class="shell signatures">
    <div class="section-heading">
      <h2>{{ t('home.signature') }}</h2>
      <RouterLink class="text-link" to="/menu">{{ t('home.fullMenu') }}</RouterLink>
    </div>
    <div class="dish-grid">
      <article v-for="(dish, i) in signature" :key="dish.id" v-reveal="i * 120" class="signature">
        <img :src="photo(dishPhotos[dish.id] ?? 'meze')" :alt="dish[lang][0]" width="1024" height="1024" loading="lazy" />
        <div class="signature-head">
          <h3>{{ dish[lang][0] }}</h3>
          <span class="price">{{ price(dish.price) }}</span>
        </div>
        <p>{{ dish[lang][1] }}</p>
      </article>
    </div>
  </section>

  <section class="shell gallery">
    <div v-reveal class="gallery-head">
      <p class="kicker">{{ t('home2.galleryKicker') }}</p>
      <h2>{{ t('home2.galleryTitle') }}</h2>
    </div>
    <div class="gallery-grid">
      <button
        v-for="(g, i) in gallery"
        :key="g.image"
        v-reveal="(i % 3) * 90"
        type="button"
        class="gallery-item"
        :class="`g-${g.ratio}`"
        :aria-label="`${t('lightbox.open')}: ${g.caption[lang]}`"
        @click="lightboxIndex = i"
      >
        <img :src="photo(g.image)" :alt="g.alt[lang]" width="1024" height="1024" loading="lazy" />
        <span>{{ g.caption[lang] }}</span>
      </button>
    </div>
    <Lightbox :items="items" :index="lightboxIndex" @close="lightboxIndex = null" @change="lightboxIndex = $event" />
  </section>

  <section class="shell location">
    <div v-reveal class="location-copy">
      <p class="kicker">{{ t('home2.locKicker') }}</p>
      <h2>{{ t('home2.locTitle') }}</h2>
      <p class="lead">{{ t('home2.locText') }}</p>
      <p class="location-address">{{ t('home.address') }}</p>
    </div>
    <img v-reveal :src="photo('harbor')" :alt="locationAlt" width="1024" height="1024" loading="lazy" class="location-photo" />
  </section>

  <FaqSection />

  <section class="cta-band">
    <img :src="photo('terrace')" alt="" width="1024" height="576" loading="lazy" />
    <div class="cta-shade" />
    <div class="shell cta-copy">
      <h2>{{ t('home2.ctaTitle') }}</h2>
      <p>{{ t('home2.ctaText') }}</p>
      <RouterLink class="button cta-button" to="/book">{{ t('home2.ctaButton') }}</RouterLink>
    </div>
  </section>
</template>
