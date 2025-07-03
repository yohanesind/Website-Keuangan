<script setup>
// Import the animation component we just created
import FadeInSection from "@/components/FadeInSection.vue";
// Import all the necessary icons from the lucide-vue-next library
import { LayoutDashboard, Target, Landmark, BookOpenCheck, FileSpreadsheet, MessageSquarePlus, ShieldCheck, Lock } from "lucide-vue-next";
</script>

<template>
  <!-- The main container for the home page content -->
  <main>
    <!-- Hero Section -->
    <section class="hero-gradient py-20 md:py-32">
      <div class="container mx-auto px-6 lg:px-[15%] text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Ambil Kendali Penuh Atas
          <span class="primary-color">Keuangan Anda</span>
        </h1>
        <p class="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600">Lacak pengeluaran, rencanakan dana impian, dan lihat kekayaan Anda bertumbuh. Semua data 100% aman tersimpan di perangkat Anda, bukan di cloud.</p>
        <div class="mt-10">
          <a href="https://startlife.yohanesindra.com/" target="_blank" class="bg-primary text-white font-bold text-lg px-8 py-4 rounded-full inline-block cta-button"> Mulai Kelola Keuangan Sekarang </a>
        </div>
        <FadeInSection class="mt-16 max-w-5xl mx-auto">
          <img src="/DASHBOARD.png" alt="Tampilan Dasbor Aplikasi Keuangan" class="rounded-2xl ring-1 ring-slate-200 shadow-2xl" />
        </FadeInSection>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-white">
      <div class="container mx-auto px-6 lg:px-[15%]">
        <FadeInSection class="text-center max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Fitur Cerdas untuk Finansial Hebat</h2>
          <p class="mt-4 text-lg text-slate-600">Semua yang Anda butuhkan untuk menjadi manajer keuangan bagi diri sendiri.</p>
        </FadeInSection>
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <FadeInSection class="feature-card">
            <div class="bg-primary/10 text-primary-color w-14 h-14 rounded-2xl flex items-center justify-center">
              <LayoutDashboard class="w-7 h-7" />
            </div>
            <h3 class="mt-6 text-xl font-bold">Dasbor Visual</h3>
            <p class="mt-2 text-slate-600">Pahami kondisi keuangan Anda dalam sekejap melalui grafik pemasukan, pengeluaran, dan arus kas yang interaktif.</p>
          </FadeInSection>

          <!-- Feature 2 -->
          <FadeInSection class="feature-card">
            <div class="bg-primary/10 text-primary-color w-14 h-14 rounded-2xl flex items-center justify-center">
              <Target class="w-7 h-7" />
            </div>
            <h3 class="mt-6 text-xl font-bold">Perencana Dana Impian</h3>
            <p class="mt-2 text-slate-600">Wujudkan semua tujuan Anda, mulai dari liburan hingga dana pensiun, dengan kalkulator proyeksi investasi.</p>
          </FadeInSection>

          <!-- Feature 3 -->
          <FadeInSection class="feature-card">
            <div class="bg-primary/10 text-primary-color w-14 h-14 rounded-2xl flex items-center justify-center">
              <Landmark class="w-7 h-7" />
            </div>
            <h3 class="mt-6 text-xl font-bold">Lacak Kekayaan Bersih</h3>
            <p class="mt-2 text-slate-600">Pantau pertumbuhan aset (investasi, properti) dan liabilitas (cicilan, hutang) Anda secara terperinci.</p>
          </FadeInSection>

          <!-- Feature 4 -->
          <FadeInSection class="feature-card">
            <div class="bg-primary/10 text-primary-color w-14 h-14 rounded-2xl flex items-center justify-center">
              <BookOpenCheck class="w-7 h-7" />
            </div>
            <h3 class="mt-6 text-xl font-bold">Jurnal Transaksi Simpel</h3>
            <p class="mt-2 text-slate-600">Catat semua transaksi dengan mudah dan cepat. Kategorikan setiap pos agar analisis lebih akurat.</p>
          </FadeInSection>

          <!-- Feature 5 -->
          <FadeInSection class="feature-card">
            <div class="bg-primary/10 text-primary-color w-14 h-14 rounded-2xl flex items-center justify-center">
              <FileSpreadsheet class="w-7 h-7" />
            </div>
            <h3 class="mt-6 text-xl font-bold">Ekspor Data Fleksibel</h3>
            <p class="mt-2 text-slate-600">Miliki data Anda sepenuhnya. Ekspor laporan keuangan ke format CSV atau JSON kapan saja Anda butuhkan.</p>
          </FadeInSection>

          <!-- Feature 6 -->
          <FadeInSection class="feature-card">
            <div class="bg-primary/10 text-primary-color w-14 h-14 rounded-2xl flex items-center justify-center">
              <MessageSquarePlus class="w-7 h-7" />
            </div>
            <h3 class="mt-6 text-xl font-bold">Konsultasi Ahli</h3>
            <p class="mt-2 text-slate-600">Butuh saran lebih lanjut? Hubungi perencana keuangan bersertifikat langsung dari aplikasi untuk membahas strategi Anda.</p>
          </FadeInSection>
        </div>
      </div>
    </section>

    <!-- Privacy Section -->
    <section id="privacy" class="py-24">
      <div class="container mx-auto px-6 lg:px-[15%]">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <FadeInSection class="lg:w-1/2">
            <img src="/SECURITY.png" alt="Ilustrasi Privasi Data" class="rounded-2xl" />
          </FadeInSection>
          <FadeInSection class="lg:w-1/2 text-center lg:text-left">
            <span class="font-bold primary-color">PRIVASI UTAMA</span>
            <h2 class="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Data Anda Milik Anda. Titik.</h2>
            <p class="mt-6 text-lg text-slate-600">
              Kami percaya data keuangan adalah hal yang sangat pribadi. Oleh karena itu, aplikasi ini dirancang agar <strong>semua data Anda disimpan secara eksklusif di perangkat Anda sendiri</strong>. Kami tidak memiliki akses, tidak
              menyimpan di server, dan tidak akan pernah menjual data Anda.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-start gap-4">
                <ShieldCheck class="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 class="font-semibold text-lg">100% Offline & Lokal</h4>
                  <p class="text-slate-600">Data tidak pernah meninggalkan ponsel atau komputer Anda, memberikan Anda kendali dan ketenangan pikiran.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <Lock class="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 class="font-semibold text-lg">Tanpa Pelacakan</h4>
                  <p class="text-slate-600">Aplikasi ini tidak mengandung pelacak iklan atau analitik pihak ketiga. Fokus kami hanya pada fungsionalitas.</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24">
      <div class="container mx-auto px-6 lg:px-[15%]">
        <FadeInSection class="bg-primary text-white rounded-3xl p-12 md:p-20 text-center">
          <h2 class="text-3xl md:text-5xl font-bold">Siap Memulai Perjalanan Finansial Anda?</h2>
          <p class="mt-6 max-w-2xl mx-auto text-lg text-indigo-200">Hentikan kebiasaan boros dan mulailah membangun kekayaan. Dapatkan akses ke semua fitur canggih untuk masa depan keuangan yang lebih cerah.</p>
          <div class="mt-10">
            <a href="https://startlife.yohanesindra.com/" target="_blank" class="bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-full inline-block transition hover:bg-indigo-50"> Dapatkan Akses Sekarang </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  </main>
</template>
