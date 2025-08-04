<template>
  <q-page class="q-pa-md">
    <div class="text-h6 text-primary q-mb-md text-center">داشبورد سرپرست</div>

    <q-card class="q-mb-md" v-for="item in items" :key="item.id" dir="rtl">
      <q-expansion-item
        expand-separator
        expand-icon="expand_more"
        :icon="item.icon || 'info'"
        :label="item.title"
        :caption="item.subtitle"
      >
        <q-card-section class="q-pa-none">
          <q-markup-table dense flat bordered class="q-mb-md">
            <thead class="custom-thead">
              <tr>
                <th v-for="col in item.columns" :key="col">{{ col }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in item.data" :key="row.id">
                <td v-for="col in item.columns" :key="col">{{ row[col] }}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
      </q-expansion-item>
    </q-card>
  </q-page>
</template>

<script setup>
const items = [
  {
    id: 1,
    title: 'ورود و خروج',
    subtitle: 'ثبت وضعیت حضور پرسنل',
    columns: ['نام', 'وضعیت'],
    data: [
      { id: 1, نام: 'علی رضایی', وضعیت: 'حضور به‌موقع' },
      { id: 2, نام: 'مهدی کریمی', وضعیت: 'تاخیر در حضور' },
    ],
  },
  {
    id: 2,
    title: 'تعداد ضایعات',
    subtitle: 'بررسی قطعات معیوب',
    columns: ['قطعه', 'مسئول', 'علت', 'تعداد'],
    data: [
      { id: 1, قطعه: 'درب عقب', مسئول: 'محمدی', علت: 'ضربه', تعداد: 2 },
      { id: 2, قطعه: 'گلگیر', مسئول: 'رضایی', علت: 'جوش ناقص', تعداد: 1 },
    ],
  },
  {
    id: 3,
    title: 'ایرادات برقی',
    subtitle: 'گزارش خرابی‌های الکتریکی',
    columns: ['شماره اتاق', 'ایراد'],
    data: [
      { id: 1, 'شماره اتاق': 'اتاق 3', ایراد: 'اتصال کوتاه' },
      { id: 2, 'شماره اتاق': 'اتاق 5', ایراد: 'خاموشی چراغ' },
    ],
  },
  {
    id: 4,
    title: 'ماشین‌های معیوب',
    subtitle: 'آمار روزانه خودروهای معیوب',
    columns: ['مدل', 'ایراد', 'تعداد'],
    data: [
      { id: 1, مدل: 'پراید', ایراد: 'ضربه به درب', تعداد: 1 },
      { id: 2, مدل: 'تیبا', ایراد: 'نقص فنی', تعداد: 2 },
    ],
  },
  {
    id: 5,
    title: 'تحویل ماشین',
    subtitle: 'ثبت و بررسی اطلاعات تحویل خودرو',
    columns: ['ساعت تحویل', 'تحویل‌دهنده', 'تحویل‌گیرنده', 'علت برگشتی', 'ساعت ارسال', 'خط‌خوردگی'],
    data: [
      {
        id: 1,
        'ساعت تحویل': '08:45',
        تحویل‌دهنده: 'عباسی (دپارتمان رنگ)',
        تحویل‌گیرنده: 'کاظمی',
        'علت برگشتی': 'رنگ پریدگی',
        'ساعت ارسال': '10:00',
        خط‌خوردگی: 'وجود دارد',
      },
    ],
  },
  {
    id: 6,
    title: 'تحت بررسی',
    subtitle: 'موارد بررسی‌شده توسط کارشناسان',
    columns: ['شماره اتاق', 'ایراد ماشین', 'جنس ضایعاتی', 'شرکت سازنده'],
    data: [
      {
        id: 1,
        'شماره اتاق': '401',
        'ایراد ماشین': 'صدای غیرعادی موتور',
        'جنس ضایعاتی': 'فلز سبک',
        'شرکت سازنده': 'ایران‌خودرو',
      },
    ],
  },
]
</script>

<style scoped>
.custom-thead {
  background-color: rgba(33, 150, 243, 0.2); /* primary با saturation کمتر */
  color: #1976d2; /* رنگ primary Quasar */
}
.custom-thead th {
  font-weight: bold;
  font-size: medium;
}
td,
th {
  text-align: center;
}
</style>
