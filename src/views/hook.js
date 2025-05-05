import { computed } from 'vue'
import useStore from '../stores/index'

export default function useHook() {
    const store = useStore()
    const isPassageVisible = computed(() => store.passage !== null)

    const apiUrl = import.meta.env.VITE_BIBLE_API_URL


    async function getScripture() {
        const res = await fetch(`${apiUrl}read/rv1960/${store.selectedBook}/${store.selectedChapter}/${store.selectedVerse}`)
        const data = await res.json()
        store.passage = data
    }

    return {
        getScripture,
        store,
        isPassageVisible
    }
}
