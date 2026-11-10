<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export interface LightboxItem {
  src: string
  alt: string
  caption: string
}

const props = defineProps<{ items: LightboxItem[]; index: number | null }>()
const emit = defineEmits<{ close: []; change: [index: number] }>()

const { t } = useI18n()
const panel = ref<HTMLElement | null>(null)
const open = computed(() => props.index !== null)
const current = computed(() => (props.index === null ? null : props.items[props.index]))

const go = (delta: number): void => {
  if (props.index === null) return
  emit('change', (props.index + delta + props.items.length) % props.items.length)
}
const onKey = (e: KeyboardEvent): void => {
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowRight') go(1)
  else if (e.key === 'ArrowLeft') go(-1)
}

watch(open, async (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    await nextTick()
    panel.value?.focus()
  } else {
    document.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <div v-if="open && current" class="lightbox" role="dialog" aria-modal="true" :aria-label="current.alt" @click.self="emit('close')">
    <div ref="panel" tabindex="-1" class="lightbox-stage" @click.self="emit('close')">
      <img :src="current.src" :alt="current.alt" />
      <p>{{ current.caption }}</p>
    </div>
    <button type="button" class="lightbox-btn lightbox-close" :aria-label="t('lightbox.close')" @click="emit('close')">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
    </button>
    <button v-if="items.length > 1" type="button" class="lightbox-btn lightbox-prev" :aria-label="t('lightbox.prev')" @click="go(-1)">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
    </button>
    <button v-if="items.length > 1" type="button" class="lightbox-btn lightbox-next" :aria-label="t('lightbox.next')" @click="go(1)">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
    </button>
  </div>
</template>
