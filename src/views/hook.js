import { computed, ref } from 'vue'
import useStore from '../stores/index'

export default function useHook() {
    const store = useStore()
    const isPassageVisible = computed(() => store.passage !== null)
    const fontSize = ref(3)
    const isFormEmpty = computed(() => {
        return store.selectedBook === '' || store.selectedChapter === ''
    })

    const apiUrl = import.meta.env.VITE_BIBLE_API_URL


    async function getScripture() {
        try {
            const response = await fetch(`${apiUrl}read/rv1960/${store.selectedBook}/${store.selectedChapter}${store.selectedVerse ? `/${store.selectedVerse}` : ''}`)
            if (!response.ok) {
              console.log(response)
                throw new Error(`HTTP error! status: ${response.error}`)
            }
            store.passage = await response.json()
        } catch (err) {
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

    return {
        getScripture,
        store,
        isPassageVisible,
        isFormEmpty,
        fontSize,
        increaseFontSize,
        decreaseFontSize
    }
}
