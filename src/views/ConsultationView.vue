<script setup>
// Import all the necessary components for this view
import FadeInSection from "@/components/FadeInSection.vue";
import FinancialCalculator from "@/components/FinancialCalculator.vue";
import FaqItem from "@/components/FaqItem.vue";
</script>

<template>
  <main>
    <!-- HERO & GAMIFICATION SECTION -->
    <section id="hero" class="py-16 md:py-20 hero-gradient">
      <div class="container mx-auto px-6 lg:px-[15%]">
        <FadeInSection class="text-center">
          <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">Kepala isinya cicilan, masa depan anak, & kesehatan orang tua?</h1>
          <p class="mt-4 text-xl md:text-2xl primary-color font-semibold">Yuk, kita beresin bareng.</p>
          <p class="mt-6 max-w-2xl mx-auto text-slate-600">Saya tahu rasanya, karena saya juga generasi sandwich. Coba deh, cek kondisi keuanganmu dalam 1 menit dengan kalkulator di bawah ini.</p>
        </FadeInSection>

        <FadeInSection>
          <!-- Embed the interactive calculator component -->
          <FinancialCalculator />
        </FadeInSection>
      </div>
    </section>

    <!-- ABOUT ME SECTION -->
    <section id="tentang-saya" class="py-16 md:py-20 bg-white overflow-hidden">
      <div class="container mx-auto px-6 lg:px-[15%]">
        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <FadeInSection class="md:w-1/3">
            <img src="/Profil.jpg" alt="Foto Yohanes Indra" class="rounded-2xl shadow-xl w-full" />
          </FadeInSection>
          <FadeInSection class="md:w-2/3">
            <h2 class="text-3xl font-bold text-slate-900">Kenalan dulu, yuk! Saya Yohanes Indra.</h2>
            <p class="mt-4 text-lg primary-color font-semibold">Teman seperjuanganmu yang kebetulan Certified Investment Consultant.</p>
            <p class="mt-4 text-slate-600 leading-relaxed">
              Saya BUKAN konsultan di menara gading. Saya <strong class="text-slate-800">NGALAMIN sendiri</strong> gimana rasanya jadi generasi sandwich. Pusingnya, cemasnya, bingungnya—semua itu yang mendorong saya untuk membantu orang
              lain.
            </p>
            <p class="mt-4 text-slate-600 leading-relaxed">
              Dengan sertifikasi dari <strong class="text-slate-800">IARFC</strong> dan sebagai member <strong class="text-slate-800">wealthiest.id</strong>, saya siap jadi teman diskusimu untuk menerjemahkan kerumitan finansial jadi
              langkah praktis.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section id="layanan" class="py-16 md:py-20 bg-slate-50">
      <div class="container mx-auto px-6 lg:px-[15%]">
        <FadeInSection class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900">Gimana Saya Bisa Bantu?</h2>
          <p class="mt-3 text-slate-600 max-w-xl mx-auto">Kita bisa mulai dari yang paling kamu butuhin. Santai aja, bisa bayar per sesi (beli putus) atau pendampingan.</p>
        </FadeInSection>
        <div class="grid md:grid-cols-2 gap-8">
          <FadeInSection class="feature-card">
            <h3 class="font-semibold text-xl mb-3 text-slate-800">Bedah Polis Asuransi</h3>
            <p class="text-slate-600">Udah punya asuransi tapi ragu? Atau mau beli tapi bingung? Kita bedah bareng biar proteksimu maksimal, preminya pas.</p>
          </FadeInSection>
          <FadeInSection class="feature-card">
            <h3 class="font-semibold text-xl mb-3 text-slate-800">Bikin Peta Keuangan</h3>
            <p class="text-slate-600">Biar gak bingung lagi, kita buat peta yang jelas: dana darurat, dana pendidikan, sampai dana pensiun. Kamu jadi tahu prioritasmu.</p>
          </FadeInSection>
          <FadeInSection class="feature-card">
            <h3 class="font-semibold text-xl mb-3 text-slate-800">Sesi Edukasi Keuangan</h3>
            <p class="text-slate-600">Mau adain seminar buat kantor atau komunitas? Bisa banget. Materinya praktis, bahasanya gampang dimengerti, dan dijamin seru.</p>
          </FadeInSection>
          <FadeInSection class="feature-card">
            <h3 class="font-semibold text-xl mb-3 text-slate-800">Bookplan (Rencana Terstruktur)</h3>
            <p class="text-slate-600">Buat kamu yang suka hal rapi, kita buat rencana keuangan dalam sebuah buku panduan personal yang bisa kamu pegang.</p>
          </FadeInSection>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section id="faq" class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-6 lg:px-[15%]">
        <div class="max-w-3xl mx-auto">
          <FadeInSection class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-900">Yang Sering Ditanyain</h2>
          </FadeInSection>
          <FadeInSection class="space-y-4">
            <!-- Use the FaqItem component for each question -->
            <FaqItem question="Nanti saya 'dijuali' produk aneh-aneh, ya?">
              Sama sekali nggak. Saya konsultan independen. Saya dibayar untuk kasih nasihat terbaik buat kamu, bukan buat jualan produk titipan. Rekomendasi saya murni buat kepentinganmu.
            </FaqItem>
            <FaqItem question="Data keuangan saya aman, kan?"> Aman 100%. Kerahasiaan data klien itu nomor satu dan saya terikat kode etik profesi yang ketat. Anggap aja ini brankas pribadimu. </FaqItem>
            <FaqItem question="Mahal nggak sih biayanya?">
              Tergantung kebutuhan. Ada opsi "beli putus" untuk satu sesi, ada juga pendampingan. Fleksibel kok. Anggap ini investasi buat ketenangan pikiranmu. Kita bisa obrolin ini di sesi gratis pertama.
            </FaqItem>
          </FadeInSection>
        </div>
      </div>
    </section>

    <!-- FINAL CTA SECTION -->
    <section class="py-24 bg-slate-50">
      <div class="container mx-auto px-6 lg:px-[15%]">
        <FadeInSection class="bg-primary text-white rounded-3xl p-12 md:p-20 text-center">
          <h2 class="text-3xl md:text-5xl font-bold">Siap Memulai Perjalanan Finansial Anda?</h2>
          <p class="mt-6 max-w-2xl mx-auto text-lg text-indigo-200">Satu obrolan singkat bisa jadi awal dari pikiran yang jauh lebih tenang. Gak ada ruginya, malah bisa jadi ini keputusan finansial terbaikmu tahun ini.</p>
          <div class="mt-10">
            <a
              href="https://wa.me/6285156216608?text=Halo%20Pak%20Yohanes,%20saya%20mau%20coba%20ngobrol%20gratis%20dong."
              target="_blank"
              class="bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-full inline-block transition hover:bg-indigo-50"
            >
              Ngobrol Gratis Sekarang!
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  </main>
</template>
