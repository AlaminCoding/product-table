<template>
  <div class="flex justify-center">
    <ul
      class="flex flex-wrap justify-around bg-white border border-slate-400 mt-3"
    >
      <li>
        <NuxtLink
          :to="`/products?page=${pageNum - 1}`"
          class="block py-2 px-4 cursor-pointer hover:bg-green-200 duration-300"
          :class="{ 'pointer-events-none opacity-20': pageNum === 1 }"
        >
          <Icon name="bi:chevron-left" />
        </NuxtLink>
      </li>
      <li v-for="(num, idx) in pageCountArr" :key="'page-number-' + idx">
        <NuxtLink
          class="block py-2 px-4 cursor-pointer hover:bg-green-600 hover:text-white duration-300"
          :class="{ 'bg-green-600 text-white': idx + 1 === pageNum }"
          :to="`/products?page=${num}`"
        >
          {{ num }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="`/products?page=${pageNum + 1}`"
          class="block py-2 px-4 cursor-pointer hover:bg-green-200 duration-300"
          :class="{ 'pointer-events-none opacity-20': pageNum === 20 }"
        >
          <Icon name="bi:chevron-right" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { total } = useProducts();
const route = useRoute();
const pageNum = computed(() => parseInt(route.query.page));

// TOTAL PAGE COUNT AND CREATE ARRAY OF PAGE NUMBER
const pageCount = total.value / 5;
const pageCountArr = [...Array(pageCount + 1).keys()].slice(1);
</script>
