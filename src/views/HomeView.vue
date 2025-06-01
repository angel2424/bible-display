<template>
  <main class="bg-gradient-to-r from-[#9bafd9] to-[#103783] w-full min-h-screen pt-5">
    <div class="absolute bottom-8 right-8 bg-white w-fit z-50 rounded-full flex">
      <button @click="decreaseFontSize" class="py-2 px-5 cursor-pointer hover:bg-blue-700/15 text-xl">-</button>
      <span class="h-full w-[4px] bg-gray-500"></span>
      <button @click="increaseFontSize" class="py-2 px-5 cursor-pointer hover:bg-blue-700/15 text-xl">+</button>
    </div>
    <div class="max-w-[1600px] mx-auto">
      <div class="p-8">
          <!-- <div>
            <div class="flex items-center gap-4 mb-8">
              <img src="/public/favicon-white.svg" alt="logo" class="w-12 h-12" />
              <h1 class="text-2xl font-bold text-white">Bible Display</h1>
            </div>
          </div> -->
          <form class="flex flex-col gap-4 mb-8" @submit.prevent="getScripture">
            <div class="flex flex-col lg:flex-row gap-4">
                <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select v-model="store.selectedBook" class="border border-white text-white py-2 px-4 rounded-xl col-start-1 row-start-1 w-full appearance-none pr-7 pl-3.5 text-base sm:text-sm/6">
                    <option v-for="book in store?.books" :key="book.abrev" :value="book.abrev">{{ book.name }}</option>
                  </select>
                  <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="#fff" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </div>

                  <input v-model="store.selectedChapter" type="number" min="1" placeholder="Chapter" class="border border-white text-white py-2 px-4 w-full lg:w-24 rounded-xl" />

                  <div class="flex gap-3">
                    <input v-model="store.selectedVerse" type="text" placeholder="Or search keywords..." class="border border-white text-white p-2 rounded-xl flex-1" />
                    <button type="submit" :disabled="isFormEmpty" class="bg-white text-blue-600 p-2 rounded w-32 hover:bg-transparent hover:border hover:border-white hover:text-white transition-all ease-linear duration-200 cursor-pointer">Search</button>
                  </div>
                </div>
          </form>
      </div>
      <div class="text-white hover:cursor-none mt-12 pb-36">
        <div v-if="isPassageVisible && store.passage.length > 0" class="px-8 flex flex-col gap-12">
            <p v-for="item in store.passage" :key="item?.id" class="font-bold tracking-normal hover:text-amber-300 transition-all ease-linear duration-150"
            :style="{fontSize: `${fontSize}rem`}">
                {{item?.number}} - {{ item?.verse }}
            </p>
        </div>
        <div v-else-if="store.passage?.vers" class="px-8 flex flex-col gap-12">
            <p v-for="item in store.passage?.vers" :key="item?.id" class="font-bold tracking-normal hover:text-amber-300 transition-all ease-linear duration-150"
            :style="{fontSize: `${fontSize}rem`}">
                {{item?.number}} - {{ item?.verse }}
            </p>
        </div>
        <div v-else class="px-8 flex flex-col gap-12">
          <p
            class="font-bold tracking-normal hover:text-amber-300 transition ease-linear duration-150"
            :style="{fontSize: `${fontSize}rem`}"
          >
            {{store.passage?.number}} {{ store.passage?.verse }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import setup from './hook';

export default {
  name: 'HomeView',
  setup
};
</script>
