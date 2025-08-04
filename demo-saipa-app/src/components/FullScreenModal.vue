<template>
  <q-dialog
    v-model="internalModel"
    :maximized="maximized"
    persistent
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-white text-black column no-wrap no-scroll">
      <!-- Header -->
      <div class="q-pa-md row items-center justify-between bg-primary text-white">
        <div class="text-h6">{{ title }}</div>
        <q-btn dense flat icon="close" @click="$emit('update:modelValue', false)" />
      </div>

      <!-- Content -->
      <q-card class="q-pa-md scroll">
        <slot />
      </q-card>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: '',
  },
  maximized: {
    Type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['update:modelValue'])
const internalModel = ref(false)

watch(
  () => props.modelValue,
  (val) => {
    internalModel.value = val
  },
)
watch(
  () => internalModel,
  (val) => {
    emit('update:modelValue', val)
  },
)
</script>
