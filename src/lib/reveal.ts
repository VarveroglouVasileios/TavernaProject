import type { Directive } from 'vue'

/** v-reveal: fades and lifts an element in once, when it scrolls into view. */
let observer: IntersectionObserver | null = null

const getObserver = (): IntersectionObserver | null => {
  if (typeof IntersectionObserver === 'undefined') return null
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
  }
  return observer
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    const io = getObserver()
    if (io) io.observe(el)
    else el.classList.add('reveal-in')
  },
}
