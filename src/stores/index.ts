import { ref } from 'vue'
import { defineStore } from 'pinia'
import books from '../assets/json/books.js'

export default defineStore('bible', () => {
    const selectedBook = ref({
      testament: 'oldTestament',
      ...books[0]
    })
    const selectedChapter = ref(1)
    const selectedVerse = ref(null)
    const passage = ref(null)
    const oldTestament = ref(books.slice(0, 39))
    const newTestament = ref(books.slice(39, 66))

  return {
    selectedBook,
    selectedChapter,
    selectedVerse,
    passage,
    oldTestament,
    newTestament
  }
})
