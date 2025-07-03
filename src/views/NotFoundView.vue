<script setup>
// Import komponen yang diperlukan
import { RouterLink } from "vue-router";
import { AlertTriangle } from "lucide-vue-next";
</script>

<template>
  <main class="flex items-center justify-center min-h-screen bg-slate-50 text-center px-6">
    <div>
      <AlertTriangle class="mx-auto h-16 w-16 text-yellow-500" />
      <h1 class="mt-4 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Halaman Tidak Ditemukan</h1>
      <p class="mt-4 text-lg text-slate-600">Maaf, kami tidak dapat menemukan halaman yang Anda cari.</p>
      <div class="mt-10">
        <RouterLink to="/" class="bg-primary text-white font-bold text-lg px-8 py-4 rounded-full inline-block cta-button"> Kembali ke Beranda </RouterLink>
      </div>
    </div>
  </main>
</template>
