<template>
  <div class="flex justify-end items-center gap-10 mt-5">
    <Dropdown
      title="Price"
      :listTitle="priceListTitle"
      :handleAscending="priceAscending"
      :handleDescending="priceDescending"
    />
    <Dropdown
      title="Rating"
      :listTitle="ratingListTitle"
      :handleAscending="ratingAscending"
      :handleDescending="ratingDescending"
    />
  </div>
</template>
<script setup>
import Dropdown from "../ui/Dropdown.vue";

const { fetchAllProduct } = useProducts();

const route = useRoute();
const pageNum = computed(() => parseInt(route.query.page) - 1);

// DEFAULT LIST TITLES FOR FILTER DROPDOWN
const priceListTitle = ref("Filter by price");
const ratingListTitle = ref("Filter by rating");

// FUNCTIONS FOR ASCENDING AND DESCENDING BY PRICE AND RATING
const priceAscending = () => {
  fetchAllProduct(pageNum.value * 5, "price", "ascending");
  ratingListTitle.value = "Filter by rating";
  priceListTitle.value = "Ascending";
};
const priceDescending = () => {
  fetchAllProduct(pageNum.value * 5, "price", "descending");
  ratingListTitle.value = "Filter by rating";
  priceListTitle.value = "Descending";
};
const ratingAscending = () => {
  fetchAllProduct(pageNum.value * 5, "rating", "ascending");
  priceListTitle.value = "Filter by price";
  ratingListTitle.value = "Ascending";
};
const ratingDescending = () => {
  fetchAllProduct(pageNum.value * 5, "rating", "descending");
  priceListTitle.value = "Filter by price";
  ratingListTitle.value = "Descending";
};
</script>
