<template>
  <q-item clickable tag="a" target="_blank" rel="noopener noreferrer" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="primary" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
})

const { title, caption, link, icon } = props
</script>
