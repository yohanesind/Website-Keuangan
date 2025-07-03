<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
// Mengimpor ikon yang dibutuhkan dari pustaka lucide-vue-next
import { Menu, X } from "lucide-vue-next";

const route = useRoute();
// State untuk melacak apakah menu mobile sedang terbuka atau tertutup
const isMenuOpen = ref(false);

// Fungsi untuk memeriksa apakah link navigasi sedang aktif
const isActive = (path) => {
  return route.path === path;
};
</script>

<template>
  <!-- Elemen header utama, dibuat sticky di bagian atas -->
  <header class="bg-white/80 backdrop-blur-lg sticky top-0 z-30 border-b border-slate-200/80">
    <div class="container mx-auto px-6 lg:px-[15%] py-4 flex justify-between items-center">
      <!-- Logo, selalu terlihat -->
      <RouterLink to="/" class="flex items-center gap-3">
        <img src="/icon-192x192.png" alt="Logo Aplikasi" class="w-9 h-9 rounded-full" />
      </RouterLink>

      <!-- Navigasi versi Desktop (tersembunyi di mobile) -->
      <nav class="hidden md:flex items-center gap-8">
        <RouterLink to="/" class="font-medium" :class="isActive('/') ? 'primary-color font-bold' : 'text-slate-600 hover:text-primary-color'">Home</RouterLink>
        <RouterLink to="/layanan-konsultasi" class="font-medium" :class="isActive('/layanan-konsultasi') ? 'primary-color font-bold' : 'text-slate-600 hover:text-primary-color'">Layanan Konsultasi</RouterLink>
      </nav>

      <!-- Tombol CTA versi Desktop (tersembunyi di mobile) -->
      <a href="https://startlife.yohanesindra.com/" target="_blank" class="hidden md:block bg-primary text-white font-semibold px-5 py-2.5 rounded-full cta-button"> Masuk Aplikasi </a>

      <!-- Tombol Menu Mobile (hanya terlihat di mobile) -->
      <div class="md:hidden">
        <button @click="isMenuOpen = true" class="p-2 -mr-2">
          <Menu class="w-7 h-7 text-slate-800" />
        </button>
      </div>
    </div>
  </header>

  <!-- Panel Menu Mobile & Lapisan Latar Belakang -->

  <!-- Lapisan latar belakang transparan saat menu terbuka -->
  <div v-if="isMenuOpen" @click="isMenuOpen = false" class="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"></div>

  <!-- Panel menu yang muncul dari kanan -->
  <nav class="md:hidden fixed top-0 right-0 h-full bg-white w-72 shadow-xl transform transition-transform duration-300 ease-in-out z-50 p-6 flex flex-col" :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">
    <!-- Tombol 'X' untuk menutup menu -->
    <div class="flex justify-end mb-6">
      <button @click="isMenuOpen = false" class="p-2 -m-2">
        <X class="w-7 h-7 text-slate-500 hover:text-slate-800" />
      </button>
    </div>

    <!-- Link Menu -->
    <div class="flex flex-col">
      <RouterLink to="/" @click="isMenuOpen = false" class="block py-3 text-lg font-medium" :class="isActive('/') ? 'primary-color' : 'text-slate-700'">Home</RouterLink>
      <RouterLink to="/layanan-konsultasi" @click="isMenuOpen = false" class="block py-3 text-lg font-medium" :class="isActive('/layanan-konsultasi') ? 'primary-color' : 'text-slate-700'">Layanan Konsultasi</RouterLink>
      <a href="https://startlife.yohanesindra.com/" target="_blank" class="mt-6 block bg-primary text-white text-center font-semibold px-5 py-3 rounded-full cta-button"> Masuk Aplikasi </a>
    </div>
  </nav>
</template>
