<!-- src/components/taskmaster/TopFiveSection.vue -->
<template>
  <q-card class="q-pa-md q-gutter-md">
    <!-- فیلد ورود نکته -->
    <q-input
      v-model="newNote"
      label="نکته‌ی روز"
      placeholder="مثلاً: قطعه‌ی X نیاز به چک نهایی داشت..."
      outlined
      dense
      autogrow
      @keyup.enter="addNote"
    />

    <!-- دکمه افزودن -->
    <div class="row justify-end">
      <q-btn
        label="افزودن"
        color="primary"
        icon="add_circle"
        @click="addNote"
        :disable="!newNote.trim()"
      />
    </div>

    <!-- لیست نکات -->
    <q-separator />

    <div v-if="notes.length" class="q-mt-md">
      <div class="text-subtitle2 q-mb-sm">نکات ثبت‌شده:</div>
      <q-list bordered separator>
        <q-item v-for="(note, index) in notes" :key="index">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white" size="28px">{{ index + 1 }}</q-avatar>
          </q-item-section>
          <q-item-section>
            <span class="text-body2" style="word-break: break-all">
              {{ note }}
            </span>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div v-else class="text-grey q-mt-md text-caption text-center">هنوز نکته‌ای ثبت نشده است.</div>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const newNote = ref('')
const notes = ref([])

function addNote() {
  if (!newNote.value.trim()) return

  notes.value.unshift(newNote.value.trim())
  $q.notify({
    type: 'positive',
    message: 'نکته ثبت شد.',
  })
  newNote.value = ''
}
</script>
