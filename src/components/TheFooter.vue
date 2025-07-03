<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <footer class="bg-slate-900 text-slate-400">
    <div class="container mx-auto px-6 lg:px-[15%] py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 class="text-lg font-bold text-white">Tracking Keuangan</h4>
          <p class="mt-4 text-sm">Aplikasi keuangan pribadi yang aman dan cerdas.</p>
          <p class="text-xs mt-4">© 2025 Yohanes Indra ®️<br />Certified Investment Consultant</p>
        </div>
        <div>
          <h5 class="font-semibold text-white tracking-wide">Navigasi</h5>
          <ul class="mt-4 space-y-3">
            <li><RouterLink to="/" class="hover:text-white">Home</RouterLink></li>
            <li><RouterLink to="/layanan-konsultasi" class="hover:text-white">Layanan Konsultasi</RouterLink></li>
          </ul>
        </div>
        <div>
          <h5 class="font-semibold text-white tracking-wide">Legal</h5>
          <ul class="mt-4 space-y-3">
            <li><a href="#" class="hover:text-white">Kebijakan Privasi</a></li>
            <li><a href="#" class="hover:text-white">Syarat & Ketentuan</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-semibold text-white tracking-wide">Kontak</h5>
          <ul class="mt-4 space-y-3">
            <li><a href="https://yohanesindra.com" target="_blank" class="hover:text-white">yohanesindra.com</a></li>
            <li><a href="https://wa.me/6285156216608" target="_blank" class="hover:text-white">WhatsApp: 0851-5621-6608</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
        <p>&copy; 2025 Tracking Keuangan. Dibuat dengan ❤️ untuk literasi finansial Indonesia.</p>
      </div>
    </div>
  </footer>
</template>
