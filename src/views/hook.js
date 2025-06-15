import { computed, nextTick, ref } from 'vue'
import useStore from '../stores/index'

export default function useHook() {
    const store = useStore()
    const isPassageVisible = computed(() => store.passage !== null)
    const fontSize = ref(3)
    const loading = ref(false)
    const isFormEmpty = computed(() => {
        return store.selectedBook === '' || store.selectedChapter === ''
    })
    const chapterInputRef = ref(null)

    const apiUrl = import.meta.env.VITE_BIBLE_API_URL


    async function getScripture() {
      loading.value = true
      store.passage = null
        try {
            const response = await fetch(`${apiUrl}read/rv1960/${store.selectedBook.abrev}/${store.selectedChapter}${store.selectedVerse ? `/${store.selectedVerse}` : ''}`)
            if (!response.ok) {
                loading.value = false
                console.log(response)
                throw new Error(`HTTP error! status: ${response.error}`)
            }
            loading.value = false
            store.passage = await response.json()
        } catch (err) {
            loading.value = false
            console.error('Error fetching scripture:', err)
            store.passage = null
        }
    }

    function increaseFontSize() {
        fontSize.value++
    }

    function decreaseFontSize() {
      if (fontSize.value <= 1) {
        return
      }
      fontSize.value--
    }

    function onSelectBook(val) {
      store.selectedBook = val
    }

    function onIsOpen(isOpen) {
      if(!isOpen) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            // chapterInputRef.value?.focus()
            console.log(chapterInputRef)
          })
        }, 300)
      }
    }

    return {
        getScripture,
        store,
        isPassageVisible,
        isFormEmpty,
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        onSelectBook,
        loading,
        onIsOpen,
        chapterInputRef
    }
}
