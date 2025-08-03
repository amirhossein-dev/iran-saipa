<template>
  <q-page class="q-pa-md">
    <div class="text-h6 text-primary q-mb-md text-center">داشبورد سرپرست</div>

    <q-card class="q-mb-md" v-for="item in items" :key="item.id">
      <q-item clickable @click="onItemClick(item)">
        <q-item-section avatar>
          <q-icon :name="item.icon" color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.subtitle }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chevron_left" />
        </q-item-section>
      </q-item>
    </q-card>
  </q-page>
</template>

<script setup>
const items = [
  {
    id: 1,
    title: 'وضعیت شیفت‌ها',
    subtitle: 'نمایش و ویرایش برنامه شیفت‌ها',
    icon: 'schedule',
  },
  {
    id: 2,
    title: 'گزارش عملکرد',
    subtitle: 'بررسی گزارش‌های روزانه',
    icon: 'assessment',
  },
  {
    id: 3,
    title: 'درخواست‌ها',
    subtitle: 'مدیریت درخواست‌های کارکنان',
    icon: 'inbox',
  },
]

const onItemClick = (item) => {
  console.log('کلیک شد روی:', item.title)
  // بعداً مسیر به صفحه مربوطه اضافه خواهد شد
}
</script>
