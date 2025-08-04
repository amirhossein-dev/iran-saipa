<template>
  <q-layout view="lHh Lpr lFf">
    <transition name="splash" appear v-if="showSplash">
      <q-page-container>
        <SplashCover />
      </q-page-container>
    </transition>
    <div v-else>
      <q-header elevated>
        <q-toolbar>
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>Iran-saipa App</q-toolbar-title>

          <div>Version D</div>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
        <q-list>
          <q-item-label header> ارتباط با سازنده </q-item-label>

          <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
        </q-list>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import SplashCover from 'src/pages/SplashCover.vue'
const showSplash = ref(true)
onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 1)
})
const linksList = [
  {
    title: 'ایمیل',
    caption: 'dev.saffarnia@gmail.com',
    icon: 'email',
    link: 'mailto:dev.saffarnia@gmail.com',
  },
  {
    title: 'لینکدین',
    caption: 'Amirhossein در LinkedIn',
    icon: 'link',
    link: 'https://www.linkedin.com/in/amir-hossein-saffarnia-6276aa239/',
  },
  {
    title: 'تلفن',
    caption: '+98 993 669 3328',
    icon: 'phone',
    link: 'tel:+989936693328',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style scoped>
.splash-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.splash-enter-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.splash-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.splash-leave-from {
  opacity: 1;
}
.splash-leave-active {
  transition: opacity 0.6s ease;
}
.splash-leave-to {
  opacity: 0;
  transform: 1s ease;
}
</style>
