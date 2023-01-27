<script setup>
defineProps(["contact_tilte", "contact_text"]);
</script>

<template>
  <div class="flex justify-center flex-col px-3 py-5 lg:p-10 w-9/12 lg:w-4/6 h-300 mb-12 mt-14 lg:mt-24 rounded-3xl bg-purple-100 items-center text-center">
    <h4 class="text-gray-900 text-2xl lg:text-3xl font-bold">C’est votre dernier mot ?</h4>
    <h4 class="text-gray-600 text-base font-medium mt-2">Si vous n’avez pas trouvé ce que vous cherchez, <br />dites-le nous.</h4>
    <div class="flex flex-col lg:flex-row flex-wap mt-5 items-center justify-center w-full">
      <button class="py-6 lg:py-4 px-26 lg:px-0 font-semibold rounded-full h-10 w-full lg:w-3/12 flex items-center text-white bg-purple-600 justify-center">Je prends contact</button>
      <button class="mt-4 lg:ml-6 py-6 lg:py-4 px-0 font-semibold rounded-full h-10 w-full lg:w-4/12 flex items-center border-2 border-red-500 justify-center">Télécharger le catalogue</button>
    </div>
  </div>
</template>

<style scoped>

</style>
