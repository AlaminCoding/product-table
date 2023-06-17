<template>
  <button class="table-btn hidden min-[440px]:block" @click="productToggle">
    {{ activeProduct?.id === dataId ? "Hide" : "Show" }}
  </button>
  <button class="table-btn block min-[440px]:hidden" @click="productToggle">
    <Icon name="bi:eye-slash-fill" v-if="activeProduct?.id === dataId" />
    <Icon name="bi:eye-fill" v-else />
  </button>
</template>

<script setup>
const { dataId } = defineProps(["dataId"]);
const { activeProduct, fetchSingleProduct } = useProducts();

// HIDE AND SHOW TOGGLE FOR DETAILS PRODUCT VIEW
const productToggle = () => {
  if (activeProduct.value) {
    if (activeProduct.value.id === dataId) {
      fetchSingleProduct(null);
    } else {
      fetchSingleProduct(dataId);
    }
  } else {
    fetchSingleProduct(dataId);
  }
};
</script>
