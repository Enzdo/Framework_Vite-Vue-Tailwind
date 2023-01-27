<script setup>
defineProps(["CardTitle", "imgUrlIcon", "TextTitle", "imgURL"]);
</script>

<template>
  <div class="rounded-md shadow-lg bg-white max-w-xs mr-6 mt-6">
    <a href="#">
      <img class="rounded-t-md w-384 h-280" v-bind:src="imgURL" alt="" />
    </a>
    <div class="p-6">
      <p class="text-gray-500 text-xs text-main-font font-medium mb-2">
        {{ TextTitle }}
      </p>
      <h5 class="text-gray-900 text-2xl text-main-font font-bold mb-2">
        {{ TextTitle }}
      </h5>
      <div class="flex flex-wrap">
        <button class="rounded-full h-8 w-8 flex items-center justify-center border-2 border-red-500 mr-1">
          <img class="w-4 h-4" :src="imgUrlIcon" alt=""/>
        </button>
        <button class="rounded-full h-8 w-8 flex items-center justify-center border-2 border-red-500 mr-1">
          <img class="w-4 h-4" :src="imgUrlIcon" alt=""/>
        </button>
        <button class="rounded-full h-8 w-8 flex items-center justify-center border-2 border-red-500 mr-1">
          <img class="w-4 h-4" :src="imgUrlIcon" alt=""/>
        </button>
      </div>
    </div>
  </div>
</template>
