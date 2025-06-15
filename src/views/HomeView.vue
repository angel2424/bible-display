<template>
  <main class="w-full min-h-screen pt-5">
    <div class="fixed bottom-8 right-8 bg-white inset-shadow-sm/40 shadow-black/20 w-fit z-50 rounded-full flex">
      <button @click="decreaseFontSize" class="py-2 px-5 cursor-pointer hover:bg-blue-700/15 text-xl rounded-l-full">-</button>
      <span class="h-full w-[4px] bg-gray-500"></span>
      <button @click="increaseFontSize" class="py-2 px-5 cursor-pointer hover:bg-blue-700/15 text-xl rounded-r-full">+</button>
    </div>
    <div class="max-w-[1600px] mx-auto pt-28">
      <div class="p-8 xl:fixed z-[9] bg-white w-full top-0 left-0">
        <header class="max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
          <div>
            <div class="flex items-center gap-4 mb-8">
              <img src="/public/favicon-dark.svg" alt="logo" class="w-12 h-12" />
              <h1 class="text-2xl font-black text-gray-700">Bible Display</h1>
            </div>
          </div>
          <form class="flex flex-col gap-4" @submit.prevent="getScripture">
            <div class="flex flex-col lg:flex-row gap-4 w-full xl:w-auto">

                  <BookDialog :oldTestament="store?.oldTestament" :newTestament="store?.newTestament" :selectedBook="store?.selectedBook" @selectBook="onSelectBook" @isOpen="onIsOpen" />

                  <NumberField v-model="store.selectedChapter">
                    <NumberFieldContent class="flex items-center">
                      <NumberFieldDecrement class="hover:text-blue-700"/>
                      <NumberFieldInput ref="chapterInputRef" />
                      <NumberFieldIncrement />
                    </NumberFieldContent>
                  </NumberField>
                  <div class="flex gap-3">
                    <input v-model="store.selectedVerse" type="text" placeholder="Or search keywords..." class="border border-gray-700 text-gray-700 py-2 px-4 rounded-xl flex-1" />
                    <button type="submit" :disabled="isFormEmpty" class="bg-gray-700 text-white p-2 rounded-full w-32 hover:bg-transparent hover:border hover:border-gray-700 hover:text-gray-700 transition-all ease-linear duration-200 cursor-pointer">Search</button>
                  </div>
                </div>
          </form>
        </header>
      </div>
      <div class="text-gray-600 hover:cursor-text mt-12 pb-36" v-if="!loading">
        <div v-if="isPassageVisible && store.passage.length > 0" class="px-8 flex flex-col gap-12">
            <p v-for="item in store.passage" :key="item?.id" class="font-bold tracking-normal hover:text-blue-600 transition-all ease-linear duration-150"
            :style="{fontSize: `${fontSize}rem`}">
                {{item?.number}} - {{ item?.verse }}
            </p>
        </div>
        <div v-else-if="store.passage?.vers" class="px-8 flex flex-col gap-12">
            <p v-for="item in store.passage?.vers" :key="item?.id" class="font-bold tracking-normal hover:text-blue-600 transition-all ease-linear duration-150"
            :style="{fontSize: `${fontSize}rem`}">
                {{item?.number}} - {{ item?.verse }}
            </p>
        </div>
        <div v-else class="px-8 flex flex-col gap-12">
          <p
            class="font-bold tracking-normal hover:text-blue-600 transition ease-linear duration-150"
            :style="{fontSize: `${fontSize}rem`}"
          >
            {{store.passage?.number}} {{ store.passage?.verse }}
          </p>
        </div>
      </div>
      <div v-else class="h-[calc(100vh-144px)] w-full flex flex-col gap-4 items-center justify-center">
        <div class="loader"></div>
        <p class="text-gray-600 font-semibold">Cargando...</p>
      </div>
    </div>
  </main>
</template>

<script>
import BookDialog from '../components/BookDialog.vue';
import { Label } from '@/components/ui/label'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
import setup from './hook';

export default {
  name: 'HomeView',
  components: {
    BookDialog,
    Label,
    NumberField,
    NumberFieldContent,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput
  },
  setup
};
</script>
