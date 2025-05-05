<!-- pages/index.vue -->
<template>
    <main class="bg-gradient-to-r from-[#9bafd9] to-[#103783] w-full min-h-screen py-12">
      <div class="max-w-[1600px] mx-auto">
        <div class="p-8">
            <form class="flex flex-col gap-4 mb-8">
                <div class="flex gap-4">
                    <select v-model="store.selectedBook" class="border border-white text-white p-2 rounded">
                      <option v-for="book in store.books" :key="book.abrev" :value="book.abrev">{{ book.name }}</option>
                    </select>

                    <input v-model="store.selectedChapter" type="number" min="1" placeholder="Chapter" class="border border-white text-white p-2 rounded w-24" />

                    <input v-model="store.selectedVerse" type="text" placeholder="Or search keywords..." class="border border-white text-white p-2 rounded" />
                    <button type="button" @click="getScripture" class="bg-white text-blue-600 p-2 rounded w-32 hover:bg-transparent hover:border hover:border-white hover:text-white transition ease-linear duration-200 cursor-pointer">Search</button>
                  </div>
            </form>
        </div>
        <div class="text-white hover:cursor-none mt-12 pb-36">
          <div v-if="isPassageVisible && store.passage.length > 0" class="px-8 flex flex-col gap-12">
              <p v-for="item in store.passage" :key="item?.id" class="text-5xl font-bold tracking-normal leading-16 hover:text-amber-300 transition ease-linear duration-150">
                  {{item?.number}} - {{ item?.verse }}
              </p>
          </div>
          <div v-else class="px-8 flex flex-col gap-12">
            <p
              class="text-5xl font-bold tracking-normal leading-16 hover:text-amber-300 transition ease-linear duration-150"
            >
              {{store.passage.number}} {{ store.passage?.verse }}
            </p>
          </div>
        </div>
      </div>
    </main>
</template>

<script lang="ts">
import setup from './hook'

export default {
    name: 'IndexPage',
    setup
}
</script>
