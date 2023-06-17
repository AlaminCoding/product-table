<template>
  <section>
    <table class="w-full mt-5 bg-white">
      <thead>
        <HeadingRow />
      </thead>
      <DataRow
        v-for="(product, index) in products"
        :key="product.id"
        :product="product"
        :index="index"
      />
    </table>
  </section>
</template>

<script setup>
import HeadingRow from "../ui/HeadingRow.vue";
import DataRow from "../ui/DataRow.vue";
const { products } = useProducts();
</script>
