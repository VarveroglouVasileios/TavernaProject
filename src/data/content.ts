interface L {
  el: string
  en: string
}
const l = (el: string, en: string): L => ({ el, en })

export const photo = (name: string): string => `${import.meta.env.BASE_URL}images/${name}.webp`

/** Photos are AI-generated and illustrative. */
export const gallery = [
  { image: 'terrace', alt: l('Η βεράντα πάνω στη θάλασσα με τα καρώ τραπεζομάντιλα', 'The terrace over the sea with checkered tablecloths'), caption: l('Η βεράντα, λίγο πριν το βραδινό', 'The terrace, just before dinner'), ratio: 'wide' },
  { image: 'meze', alt: l('Μεζέδες στο τραπέζι: τζατζίκι, χωριάτικη, φάβα, κολοκυθάκια', 'Meze on the table: tzatziki, village salad, fava, courgettes'), caption: l('Μεζέδες για να μοιραστείτε', 'Meze to share'), ratio: 'square' },
  { image: 'grill', alt: l('Σουβλάκια στα κάρβουνα με πατάτες και πίτα', 'Charcoal-grilled skewers with potatoes and pita'), caption: l('Απευθείας από τα κάρβουνα', 'Straight off the charcoal'), ratio: 'tall' },
  { image: 'interior', alt: l('Το εσωτερικό με πέτρα, δοκάρια και χάλκινα σκεύη', 'The interior with stone, beams and copper pots'), caption: l('Μέσα, όταν φυσάει', 'Inside, when the wind picks up'), ratio: 'square' },
  { image: 'fish', alt: l('Τσιπούρα σχάρας με λεμόνι', 'Grilled sea bream with lemon'), caption: l('Ψάρι της ημέρας', 'Fish of the day'), ratio: 'square' },
  { image: 'dessert', alt: l('Πορτοκαλόπιτα με γιαούρτι και λευκό κρασί στο ηλιοβασίλεμα', 'Orange pie with yoghurt and white wine at sunset'), caption: l('Γλυκό με ηλιοβασίλεμα', 'Dessert with a sunset'), ratio: 'wide' },
] as const

export const dishPhotos: Record<string, string> = { 'sea-bream': 'fish', moussaka: 'moussaka', pork: 'grill' }

export const categoryPhotos: Partial<Record<string, string>> = {
  starters: 'meze', grill: 'grill', fish: 'fish', cooked: 'moussaka', desserts: 'dessert',
}

export type FactIcon = 'clock' | 'timer' | 'users' | 'card'

export const quickFacts: { icon: FactIcon; value: L; label: L }[] = [
  { icon: 'clock', value: l('13:00–23:30', '1–11:30 pm'), label: l('Ανοιχτά κάθε μέρα', 'Open every day') },
  { icon: 'timer', value: l('90 λεπτά', '90 minutes'), label: l('Διάρκεια κράτησης τραπεζιού', 'Table booking length') },
  { icon: 'users', value: l('έως 10 άτομα', 'up to 10 guests'), label: l('Κράτηση online', 'Online booking') },
  { icon: 'card', value: l('Στο τραπέζι', 'At the table'), label: l('Πληρωμή με μετρητά ή κάρτα', 'Cash or card') },
]

export const faqs: { q: L; a: L }[] = [
  {
    q: l('Πρέπει να κάνω κράτηση;', 'Do I need to book?'),
    a: l('Δεν είναι υποχρεωτικό, αλλά τα βράδια του καλοκαιριού γεμίζουμε νωρίς. Η κράτηση κρατά το τραπέζι σας για 90 λεπτά.', 'It is not required, but on summer evenings we fill up early. A booking holds your table for 90 minutes.'),
  },
  {
    q: l('Για πόσα άτομα μπορώ να κλείσω;', 'How many guests can I book for?'),
    a: l('Έως 10 άτομα online. Για μεγαλύτερες παρέες επικοινωνήστε μαζί μας και θα ενώσουμε τραπέζια.', 'Up to 10 guests online. For larger groups get in touch and we will join tables.'),
  },
  {
    q: l('Μπορώ να αλλάξω ή να ακυρώσω;', 'Can I change or cancel?'),
    a: l('Ναι. Ενημερώστε μας όσο νωρίτερα γίνεται, ώστε να δώσουμε το τραπέζι σε κάποιον που περιμένει.', 'Yes. Let us know as early as you can, so we can give the table to someone waiting.'),
  },
  {
    q: l('Έχετε επιλογές για vegetarian, νηστίσιμα ή χωρίς γλουτένη;', 'Do you have vegetarian, lenten or gluten-free options?'),
    a: l('Ναι, φαίνονται στο μενού με φίλτρα. Για αλλεργίες, πείτε το στο προσωπικό πριν παραγγείλετε.', 'Yes, they are marked in the menu with filters. For allergies, tell our staff before ordering.'),
  },
  {
    q: l('Δέχεστε παιδιά και κατοικίδια;', 'Do you welcome children and pets?'),
    a: l('Τα παιδιά είναι ευπρόσδεκτα και έχουμε παιδικές καρέκλες. Κατοικίδια δεχόμαστε στη βεράντα, με λουρί.', 'Children are welcome and we have high chairs. Pets are welcome on the terrace, on a lead.'),
  },
  {
    q: l('Πού παρκάρω;', 'Where do I park?'),
    a: l('Στην πλατεία, εκατό μέτρα πάνω από την ταβέρνα. Είναι δωρεάν.', 'In the square, a hundred metres above the taverna. It is free.'),
  },
  {
    q: l('Ποια ώρα να κλείσω για να προλάβω το ηλιοβασίλεμα;', 'What time should I book to catch the sunset?'),
    a: l('Τον Ιούλιο ο ήλιος δύει γύρω στις 20:30. Κλείστε για τις 19:30 και θα προλάβετε το καλύτερο φως.', 'In July the sun sets around 8:30 pm. Book for 7:30 pm and you will catch the best light.'),
  },
]
