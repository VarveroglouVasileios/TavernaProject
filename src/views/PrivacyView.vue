<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Static legal text. The HTML in each section is written here, never built from user input.
const content = {
  "el": {
    "title": "Απόρρητο και cookies",
    "updated": "Τελευταία ενημέρωση: Νοέμβριος 2026",
    "sections": [
      [
        "Τι είναι αυτό το site",
        "Το Taverna Meltemi είναι <strong>demo concept</strong>: μια φανταστική επιχείρηση που έφτιαξε ο Βασίλειος Βαρβέρογλου για να δείχνει πώς μπορεί να δουλέψει μια ιστοσελίδα. Δεν είναι πραγματική επιχείρηση και δεν δέχεται πραγματικές κρατήσεις."
      ],
      [
        "Cookies",
        "Δεν χρησιμοποιούμε cookies. Δεν υπάρχουν εργαλεία στατιστικών, διαφήμισης ή παρακολούθησης, και γι’ αυτό δεν εμφανίζουμε banner συγκατάθεσης."
      ],
      [
        "Τι αποθηκεύεται στη συσκευή σας",
        "Για να δουλεύει το demo, ο browser σας αποθηκεύει τοπικά (localStorage): οι κρατήσεις τραπεζιού που κάνετε στο demo (όνομα, τηλέφωνο, email, σχόλια, ώρα) και η γλώσσα που διαλέξατε. Τα κλειδιά είναι: <code>taverna-meltemi-reservations</code>, <code>taverna-meltemi-locale</code>. Τα δεδομένα μένουν στη συσκευή σας, δεν στέλνονται σε κανέναν server και δεν τα βλέπουμε. Με το «Επαναφορά demo» στη σελίδα «Διαχείριση» επανέρχονται τα αρχικά δοκιμαστικά δεδομένα, και μπορείτε να τα σβήσετε πλήρως από τα δεδομένα ιστότοπου του browser σας."
      ],
      [
        "Τι πληκτρολογείτε στις φόρμες",
        "Οι φόρμες είναι δοκιμαστικές. Μη γράφετε πραγματικά προσωπικά στοιχεία: χρησιμοποιήστε φανταστικά. Ό,τι γράψετε μένει μόνο στον browser σας."
      ],
      [
        "Γραμματοσειρές και εικόνες",
        "Οι γραμματοσειρές και οι εικόνες φιλοξενούνται στο ίδιο το site, χωρίς κλήσεις σε τρίτους (π.χ. Google Fonts). Οι φωτογραφίες είναι δημιουργημένες με AI και ενδεικτικές."
      ],
      [
        "Φιλοξενία",
        "Το site φιλοξενείται στο GitHub Pages. Ο πάροχος μπορεί να καταγράφει τεχνικά δεδομένα σύνδεσης, όπως η διεύθυνση IP, σύμφωνα με τη <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" rel=\"noopener\" class=\"underline underline-offset-4\">δική του πολιτική απορρήτου</a>."
      ],
      [
        "Επικοινωνία",
        "Για ερωτήσεις: <a href=\"https://varveroglouvasileios.github.io/\" rel=\"noopener\" class=\"underline underline-offset-4\">https://varveroglouvasileios.github.io/</a>."
      ]
    ],
    "note": "Αυτό είναι κείμενο demo. Σε πραγματικό site, η πολιτική απορρήτου προσαρμόζεται στα δεδομένα που συλλέγονται (φόρμες, στατιστικά, πληρωμές) και πρέπει να ελέγχεται από νομικό ή DPO.",
    "back": "Πίσω στην αρχική"
  },
  "en": {
    "title": "Privacy and cookies",
    "updated": "Last updated: November 2026",
    "sections": [
      [
        "What this site is",
        "Taverna Meltemi is a <strong>demo concept</strong>: a fictional business built by Vasileios Varveroglou to show how a website can work. It is not a real business and it does not accept real reservations."
      ],
      [
        "Cookies",
        "We do not use cookies. There are no analytics, advertising or tracking tools, so there is no consent banner."
      ],
      [
        "What is stored on your device",
        "To make the demo work, your browser stores locally (localStorage): the table reservations you make in the demo (name, phone, email, notes, time) and the language you chose. The keys are: <code>taverna-meltemi-reservations</code>, <code>taverna-meltemi-locale</code>. The data stays on your device, is not sent to any server and we cannot see it. “Reset demo” on the Διαχείριση page restores the original sample data, and you can erase everything from your browser’s site data."
      ],
      [
        "What you type in forms",
        "The forms are for trying out. Do not enter real personal details: use made-up ones. Whatever you type stays only in your browser."
      ],
      [
        "Fonts and images",
        "Fonts and images are hosted on the site itself, with no calls to third parties (for example Google Fonts). Photos are AI-generated and illustrative."
      ],
      [
        "Hosting",
        "The site is hosted on GitHub Pages. The provider may log technical connection data such as your IP address, as described in <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" rel=\"noopener\" class=\"underline underline-offset-4\">its own privacy statement</a>."
      ],
      [
        "Contact",
        "Questions: <a href=\"https://varveroglouvasileios.github.io/\" rel=\"noopener\" class=\"underline underline-offset-4\">https://varveroglouvasileios.github.io/</a>."
      ]
    ],
    "note": "This is demo text. On a real site, the privacy policy is tailored to the data collected (forms, analytics, payments) and should be reviewed by a lawyer or DPO.",
    "back": "Back to home"
  }
} as const
const { locale } = useI18n()
const c = computed(() => content[locale.value === 'en' ? 'en' : 'el'])
</script>

<template>
  <div class="shell">
    <article class="mx-auto max-w-2xl py-12" aria-labelledby="privacy-title">
      <h1 id="privacy-title" class="text-4xl">{{ c.title }}</h1>
      <p class="mt-2 text-sm opacity-70">{{ c.updated }}</p>
      <section v-for="s in c.sections" :key="s[0]" class="mt-8">
        <h2 class="text-2xl">{{ s[0] }}</h2>
        <p class="mt-2 text-lg leading-relaxed" v-html="s[1]"></p>
      </section>
      <p class="mt-10 rounded border border-current/30 p-4 text-base opacity-80">{{ c.note }}</p>
      <p class="mt-8"><RouterLink to="/" class="underline underline-offset-4">{{ c.back }}</RouterLink></p>
    </article>
  </div>
</template>
