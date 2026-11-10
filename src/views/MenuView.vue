<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { categories, diets, menu, type Diet } from '@/data/menu'
import { categoryPhotos, photo } from '@/data/content'

const { t, locale } = useI18n()
const filters = ref<Diet[]>([])
const filtered = computed(() => categories.map(id => ({
  id,
  dishes: menu.filter(dish => dish.category === id && filters.value.every(diet => dish.diets.includes(diet))),
})).filter(category => category.dishes.length > 0))
const scrollTo = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
}
const price = (amount: number) => new Intl.NumberFormat(locale.value, { style: 'currency', currency: 'EUR' }).format(amount)
</script>

<template>
  <div class="shell page">
    <header class="page-intro">
      <h1>{{ t('menu.title') }}</h1>
      <p>{{ t('menu.intro') }}</p>
    </header>
    <fieldset class="filter-strip">
      <legend>{{ t('menu.filters') }}</legend>
      <div class="flex flex-wrap items-center gap-2">
        <label v-for="diet in diets" :key="diet" class="filter">
          <input v-model="filters" type="checkbox" :value="diet" />
          <span>{{ t(`menu.diet.${diet}`) }}</span>
        </label>
        <button v-if="filters.length" type="button" class="text-link" @click="filters = []">{{ t('menu.clear') }}</button>
      </div>
    </fieldset>
    <nav v-if="filtered.length" class="menu-index" :aria-label="t('menu.categories')">
      <button v-for="category in filtered" :key="category.id" type="button" @click="scrollTo(category.id)">{{ t(`menu.category.${category.id}`) }}</button>
    </nav>
    <div class="menu-grid">
      <section v-for="category in filtered" :id="category.id" :key="category.id" class="menu-section">
        <img v-if="categoryPhotos[category.id]" :src="photo(categoryPhotos[category.id]!)" alt="" width="1024" height="1024" loading="lazy" class="menu-photo" />
        <h2>{{ t(`menu.category.${category.id}`) }}</h2>
        <ul>
          <li v-for="dish in category.dishes" :key="dish.id" class="menu-dish">
            <div>
              <h3>{{ dish[locale === 'en' ? 'en' : 'el'][0] }}</h3>
              <p>{{ dish[locale === 'en' ? 'en' : 'el'][1] }}</p>
            </div>
            <span class="price">{{ price(dish.price) }}</span>
          </li>
        </ul>
      </section>
    </div>
    <p v-if="!filtered.length" class="notice" role="status">{{ t('menu.empty') }}</p>
    <p class="allergen-note">{{ t('menu.allergens') }}</p>
  </div>
</template>
