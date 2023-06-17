<template>
  <tbody>
    <tr
      class="table-row"
      :class="{ 'bg-green-100': activeProduct?.id === product.id }"
    >
      <td>{{ index + 1 + pageNum * 5 }}</td>
      <td>{{ product.title }}</td>
      <td>{{ product.rating }}</td>
      <td class="whitespace-nowrap">$ {{ product.price }}</td>
      <td>
        <Button :dataId="product.id" />
      </td>
    </tr>
    <DetailView v-if="activeProduct?.id === product.id" :product="product" />
  </tbody>
</template>

<script setup>
import Button from "~/components/ui/Button.vue";
import DetailView from "~/components/ui/DetailView.vue";
const { product, index } = defineProps(["product", "index"]);
const { activeProduct } = useProducts();
const route = useRoute();
const pageNum = computed(() => parseInt(route.query.page) - 1);
</script>
