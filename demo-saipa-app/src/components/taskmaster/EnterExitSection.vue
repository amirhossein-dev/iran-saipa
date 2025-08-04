<template>
  <div class="q-pa-md">
    <div class="text-h6 q-mb-md">لیست کارمندان</div>
    <q-list bordered separator>
      <q-expansion-item
        v-for="(person, index) in people"
        :key="person.id"
        ref="expansions"
        expand-icon="arrow_drop_down"
        icon="person"
        :label="`${person.firstName} ${person.lastName}`"
        header-class="bg-grey-2 text-dark"
        expand-separator
      >
        <div class="q-gutter-sm q-pa-sm">
          <q-btn
            label="حضور به‌موقع"
            color="positive"
            icon="check_circle"
            class="full-width"
            @click="handleSelect(index)"
          />
          <q-btn
            label="تاخیر در حضور"
            color="negative"
            icon="schedule"
            class="full-width"
            @click="handleSelect(index)"
          />
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const people = [
  { id: 1, firstName: 'علی', lastName: 'احمدی' },
  { id: 2, firstName: 'زهرا', lastName: 'کریمی' },
  { id: 3, firstName: 'حسن', lastName: 'محمدی' },
  { id: 3, firstName: 'علیرضا', lastName: 'رضایی' },
  { id: 3, firstName: 'جواد', lastName: 'محبوبی' },
  { id: 3, firstName: 'محمدجواد', lastName: 'حدادی' },
  { id: 3, firstName: 'عبدالله', lastName: 'ذاکری' },
]

const expansions = ref([])

function handleSelect(index) {
  if (expansions.value[index]) {
    expansions.value[index].hide()
  }

  $q.notify({
    message: 'گزارش شما ثبت شد.',
    color: 'green-4',
    textColor: 'white',
    icon: 'check_circle',
    position: 'top',
    timeout: 500,
  })
}
</script>
