<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import All_card from "./components/all_card.vue";
import Contact from "./components/contact.vue";
import Header from "./components/Header.vue";
import Footer from "./components/footer.vue";
import Arrow_Nav from "./components/arrow_nav.vue";
import Card from "./components/card.vue";
</script>

<template>

  <div class="lg:bg-hero-desktop bg-hero-mobile h-hero-bg-mobile lg:bg-cover lg:h-hero-bg-desktop w-full flex flex-col items-center">

    <Header/>

    <div class="textBox mt-12 w-11/12 lg:w-5/6">
      <h1 class="font-bold text-3xl lg:text-6xl tracking-normal lg:tracking-tighter text-center text-white">Découvrez nos formations sur étagère !</h1>
      <p class="font-normal mt-6 text-base text-center text-white">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>
    </div>

    <div class="flex flex-wrap lg:flex-nowrap w-5/6 bg-white h-48 lg:h-24 rounded-3xl relative top-5 py-8 px-6 lg:px-6 lg:py-6 lg:top-24 shadow-lg justify-center items-center">
      <div class="rounded-3xl h-14 py-4 bg-color-bg-search w-full lg:w-5/6">
        <input type="text" placeholder="Quelle formation recherchez-vous ?" class="ml-5 bg-color-bg-search w-5/6">
      </div>
      <div class="rounded-3xl mt-4 lg:mt-0 lg:ml-8 h-14 py-4 bg-color-bg-search w-full lg:w-1/6 pl-8 flex flex-row items-center justify-evenly cursor-pointer">
        <p>Filtre</p>
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.4998 7.53336C7.96604 7.53336 8.41313 7.39201 8.74365 7.13976L14.4839 2.75899C15.172 2.23379 15.172 1.38444 14.4839 0.860457C13.7973 0.335251 12.6844 0.335251 11.9978 0.860456L7.4998 4.29318L3.00343 0.860456C2.31684 0.33647 1.20233 0.33647 0.515742 0.860456C0.172447 1.12245 -6.02334e-08 1.46609 -8.09415e-08 1.80972C-1.0165e-07 2.15336 0.172447 2.497 0.515742 2.75899L6.25596 7.13976C6.58648 7.39201 7.03356 7.53336 7.4998 7.53336Z" fill="#0A0909"/>
        </svg>
      </div>
    </div>

  </div>

  <div class="flex justify-center mt-44 lg:mt-24 flex-col items-center">

      <div class="flex flex-col h-max w-11/12">
        <div class="flex flex-row justify-between">
          <h1 class="text-lg text-main-font font-bold">Les PLUS POPULAIRES 🔥</h1>
          <Arrow_Nav/>
        </div>
        <All_card class="hidden lg:flex"/>
        <Card class="lg:hidden block" imgURL="https://upeventlyxotira.com/assets/img/Article.jpg" CardTitle="Accueillir un.e collègue en situation de handicap" TextTitle="Management & Leadership" imgUrlIcon="https://images.emojiterra.com/google/android-nougat/512px/1f468-1f3eb.png"/>
      </div>

      <div class="flex w-11/12 flex-col h-max mt-10">
        <div class="flex flex-row justify-between">
          <h1 class="text-lg text-main-font font-bold">Toutes les formations 🚀</h1>
        </div>
        <All_card />
        <All_card />
        <All_card />
        <All_card />
        <div class="w-40 right-20 flex flex-wrap m-4">
          <div class="m-1 text-2xl text-red-600">1</div>
          <div class="m-1 text-gray-700">2</div>
          <div class="m-1 text-gray-700">3</div>
          <div class="m-1 text-gray-700">4</div>
          <div class="m-1 text-gray-700">...</div>
          <div class="m-1 text-gray-700">8</div>
        </div>
      </div>

      <Contact/>

  </div>
  <Footer/>
</template>
<style scoped>

</style>
