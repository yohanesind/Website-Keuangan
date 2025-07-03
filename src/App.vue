<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style>
/* Gaya global bisa diletakkan di sini jika perlu */
.hero-gradient {
  background: linear-gradient(145deg, #f0f4ff 0%, #f8fafc 100%);
}
.primary-color {
  color: #170bff;
}
.cta-button {
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);
}
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(79, 70, 229, 0.3);
}
.feature-card {
  background-color: rgb(255, 255, 255);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  border: 1px solid #e5e7eb;
}
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
</style>
