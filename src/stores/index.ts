import { ref } from 'vue'
import { defineStore } from 'pinia'
import books from '../assets/json/books.js'

export default defineStore('bible', () => {
    const selectedBook = ref(books[0].abrev)
    const selectedChapter = ref(1)
    const selectedVerse = ref(null)
    const passage = ref(null)

  return {
    selectedBook,
    selectedChapter,
    selectedVerse,
    passage,
    books
  }
})
