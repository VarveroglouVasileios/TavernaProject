<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { faqs, quickFacts, type FactIcon } from '@/data/content'

const { t, locale } = useI18n()
const lang = computed(() => (locale.value === 'en' ? 'en' : 'el'))
const openIndex = ref<number | null>(0)
const toggle = (i: number): void => {
  openIndex.value = openIndex.value === i ? null : i
}

const paths: Record<FactIcon, string> = {
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  timer: 'M9 2h6M12 6v6l3 2M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  users: 'M16 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 20v-1a3 3 0 0 0-2-2.8M16 5.2a3 3 0 0 1 0 5.6',
  card: 'M3 6h18v12H3zM3 10h18M7 15h3',
}
</script>

<template>
  <section class="shell faq" aria-labelledby="faq-title">
    <div v-reveal class="faq-head">
      <p class="kicker">{{ t('faq.kicker') }}</p>
      <h2 id="faq-title">{{ t('faq.title') }}</h2>
      <p class="lead">{{ t('faq.lead') }}</p>
    </div>

    <ul v-reveal class="quick-facts">
      <li v-for="f in quickFacts" :key="f.label.en">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[f.icon]" /></svg>
        <p class="fact-value">{{ f.value[lang] }}</p>
        <p class="fact-label">{{ f.label[lang] }}</p>
      </li>
    </ul>

    <div class="faq-layout">
      <ul class="faq-list">
        <li v-for="(f, i) in faqs" :key="f.q.en">
          <h3>
            <button type="button" :aria-expanded="openIndex === i" :aria-controls="`faq-panel-${i}`" @click="toggle(i)">
              <span class="faq-q" :class="{ on: openIndex === i }">{{ f.q[lang] }}</span>
              <span class="faq-plus" :class="{ on: openIndex === i }" aria-hidden="true">+</span>
            </button>
          </h3>
          <div :id="`faq-panel-${i}`" class="faq-panel" :class="{ open: openIndex === i }" role="region">
            <div><p>{{ f.a[lang] }}</p></div>
          </div>
        </li>
      </ul>
      <aside class="faq-card">
        <h3>{{ t('faq.noAnswerTitle') }}</h3>
        <p>{{ t('faq.noAnswerText') }}</p>
        <p class="faq-mail-label">{{ t('faq.emailLabel') }}</p>
        <p class="faq-mail">taverna@meltemi.example</p>
        <RouterLink class="button faq-cta" to="/book">{{ t('faq.cta') }}</RouterLink>
      </aside>
    </div>
  </section>
</template>
