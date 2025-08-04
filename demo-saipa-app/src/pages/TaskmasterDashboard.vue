<template>
  <q-page class="q-pa-md">
    <q-card class="row justify-between items-center q-px-md q-py-md q-mb-md">
      <q-btn icon="chevron_left" color="black" flat @click="goBack()" round>بازگشت</q-btn>
      <div class="text-h6">داشبورد سرکارگر</div>
    </q-card>
    <div class="q-gutter-md q-mx-auto row justify-center">
      <q-btn
        v-for="item in items"
        :key="item.label"
        :label="item.label"
        :icon="item.icon"
        color="primary"
        class="q-pa-md col-5 col-sm-3 col-md-4"
        size="md"
        elevated
        rounded
        @click="handleClick(item)"
      />
    </div>
    <!-- مودال پایه -->

    <FullScreenModal
      v-model:modelValue="showModal"
      :persistent="true"
      :maximized="true"
      :title="currentTitle"
    >
      <component :is="currentComponent" />
    </FullScreenModal>
  </q-page>
</template>

<script setup>
import { ref, markRaw } from 'vue'
import FullScreenModal from 'components/FullScreenModal.vue'
import EnterExitSection from 'components/taskmaster/EnterExitSection.vue'
import DefectCountSection from 'src/components/taskmaster/DefectCountSection.vue'
import ElectricalIssueSection from 'src/components/taskmaster/ElectricalIssueSection.vue'
import FaultyCarsSection from 'src/components/taskmaster/FaultyCarsSection.vue'
import TopFiveSection from 'src/components/taskmaster/TopFiveSection.vue'
import DeliverVehicleSection from 'src/components/taskmaster/DeliverVehicleSection.vue'
import UnderReviewSection from 'src/components/taskmaster/UnderReviewSection.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.back()
}
const showModal = ref(false)
const items = [
  { label: 'ورود و خروج', icon: 'login', component: EnterExitSection },
  { label: 'تعداد ضایعات', icon: 'report_problem' },
  { label: 'ایرادات برقی', icon: 'bolt' },
  { label: 'تعداد ایرادات برقی', icon: 'car_repair' },
  { label: 'تاپ فایو', icon: 'star' },
  { label: 'تحویل ماشین', icon: 'local_shipping' },
  { label: 'تحت بررسی', icon: 'hourglass_top' },
]

const currentComponent = ref(null)
const currentTitle = ref(null)
function handleClick(item) {
  switch (item.label) {
    case 'ورود و خروج':
      currentComponent.value = markRaw(EnterExitSection)
      break
    case 'تعداد ضایعات':
      currentComponent.value = markRaw(DefectCountSection)
      break
    case 'ایرادات برقی':
      currentComponent.value = markRaw(ElectricalIssueSection)
      break
    case 'تعداد ایرادات برقی':
      currentComponent.value = markRaw(FaultyCarsSection)
      break
    case 'تاپ فایو':
      currentComponent.value = markRaw(TopFiveSection)
      break
    case 'تحویل ماشین':
      currentComponent.value = markRaw(DeliverVehicleSection)
      break
    case 'تحت بررسی':
      currentComponent.value = markRaw(UnderReviewSection)
      break
  }
  currentTitle.value = item.label
  showModal.value = true
}
</script>
