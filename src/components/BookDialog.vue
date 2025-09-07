<script>
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default {
  name: 'BookDialog',
  components: {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    Button,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
  },
  props: {
    oldTestament: {
      type: Array,
      required: true,
    },
    newTestament: {
      type: Array,
      required: true,
    },
    selectedBook: {
      type: Object,
      required: true,
    },
  },
}
</script>


<template>
  <Dialog @update:open='(val) => $emit("isOpen", val)'>
    <DialogTrigger as-child>
      <Button class="py-5 px-20 cursor-pointer !border-grey-700 !bg-blue-600" type="button">
        {{selectedBook?.name}}
      </Button>
    </DialogTrigger>
    <DialogContent class="w-full !max-w-5xl px-10 py-12">
      <DialogHeader>
        <DialogTitle class="text-2xl hidden">Selecciona un libro</DialogTitle>
        <DialogDescription>
          Selecciona un libro para ver sus capítulos
        </DialogDescription>
      </DialogHeader>
      <Tabs :default-value="selectedBook?.testament">
        <TabsList>
          <TabsTrigger value="oldTestament" class="cursor-pointer">
            Antiguo Testamento
          </TabsTrigger>
          <TabsTrigger value="newTestament" class="cursor-pointer">
            Nuevo Testamento
          </TabsTrigger>
        </TabsList>
        <TabsContent value="oldTestament">
          <div class="grid grid-cols-1 grid-flow-col sm:grid-cols-2 md:grid-cols-4 grid-rows-8 gap-2 mt-8">
            <DialogClose
              as-child
              v-for="book in oldTestament"
              :key="book.id"
            >
              <Button
                variant='ghost'
                :class="['cursor-pointer', book?.name === selectedBook?.name && '!bg-blue-600 !opacity-90 !text-white']" :disabled="book?.name === selectedBook?.name"
                @click="$emit('selectBook', {
                  testament: 'oldTestament',
                  ...book
                })"
              >
                <p>{{ book.name }}</p>
              </Button>
            </DialogClose>
          </div>
        </TabsContent>
        <TabsContent value="newTestament">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-8">
            <DialogClose
              as-child
              v-for="book in newTestament"
              :key="book.id"
            >
              <Button
                variant='ghost'
                :class="['cursor-pointer', book?.name === selectedBook.name && '!bg-blue-600 !opacity-90 !text-white']"
                :disabled="book?.name === selectedBook?.name"
                @click="$emit('selectBook', {
                  testament: 'newTestament',
                  ...book
                })"
              >
                <p>{{ book.name }}</p>
              </Button>
            </DialogClose>
          </div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  </Dialog>
</template>
