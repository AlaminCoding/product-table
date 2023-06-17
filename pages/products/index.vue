<template>
  <section class="mt-5 pb-5">
    <h2 class="text-lg">Products Page</h2>
    <Filter />
    <Table />
    <Pagination />
  </section>
</template>

<script setup>
import Filter from "~/components/blocks/Filter.vue";
import Table from "~/components/blocks/Table.vue";
import Pagination from "~/components/blocks/Pagination.vue";

const route = useRoute();
const pageNum = computed(() => parseInt(route.query.page) - 1);

// RETRIVE FUNCTIONS AND VARIABLES FROM COMPOSABLES
const { fetchAllProduct, fetchSingleProduct, filterBy, filterType } =
  useProducts();

// FETCH ALL PRODUCT FROM INITIAL LOAD
fetchAllProduct(pageNum.value * 5, filterBy.value, filterType.value);

// FETCH ALL PRODUCT IF ROUTE CHANGES
watch(route, (newRoute, oldRoute) => {
  if (newRoute) {
    fetchAllProduct(pageNum.value * 5, filterBy.value, filterType.value);
    setTimeout(() => {
      fetchSingleProduct(null);
    }, 500);
  }
});
</script>
