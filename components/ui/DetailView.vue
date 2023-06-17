<template>
  <tr>
    <td colspan="5" class="p-0">
      <div>
        <div
          class="border-r border-l border-slate-400 min-[400px]:p-5 p-2"
          :class="{ 'border-b': product.id % 5 === 0 }"
        >
          <h2
            class="text-center text-md border-b border-slate-400 border-dashed max-w-[700px] mx-auto pb-2"
          >
            View Details
          </h2>
          <table class="min-[800px]:w-[700px] w-full mx-auto inner-table mt-5">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{{ product.title }}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td>$ {{ product.price }}</td>
              </tr>
              <tr>
                <th>Rating:</th>
                <td>{{ product.rating }}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td>{{ product.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </td>
  </tr>
</template>
<script setup>
const { product } = defineProps(["product"]);
</script>
