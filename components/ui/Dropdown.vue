<template>
  <div
    class="flex flex-col items-start gap-3 min-[520px]:flex-row min-[520px]:items-center"
  >
    <h2 class="text-md">{{ title }} :</h2>
    <div class="relative z-[1]">
      <div
        class="border border-slate-500 bg-white py-1 px-3 flex items-center gap-3 cursor-pointer"
        @click="toggleList"
      >
        <h2>{{ listTitle }}</h2>
        <Icon
          name="bi:caret-down-fill"
          class="duration-300"
          :class="{ 'rotate-180': listOpen }"
        />
      </div>
      <ul
        class="absolute bg-white w-full top-full left-0 border border-slate-400 mt-[-2px] z-[-1] max-h-0 overflow-hidden duration-300"
        :class="{ 'max-h-[400px]': listOpen }"
      >
        <li
          class="border-b border-slate-400 p-1 pl-3 hover:bg-green-200 cursor-pointer duration-300"
          @click="ascendingFunc"
        >
          Ascending
        </li>
        <li
          class="p-1 pl-3 hover:bg-green-200 cursor-pointer duration-300"
          @click="descendingFunc"
        >
          Descending
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { title, listTitle, handleAscending, handleDescending } = defineProps([
  "title",
  "listTitle",
  "handleAscending",
  "handleDescending",
]);
const listOpen = ref(false);

const toggleList = () => {
  listOpen.value = !listOpen.value;
};

// HANDLE ASCENDING FUNCTION
const ascendingFunc = () => {
  handleAscending();
  listOpen.value = false;
};

// HANDLE DESCENDING FUNCTION
const descendingFunc = () => {
  handleDescending();
  listOpen.value = false;
};
</script>
