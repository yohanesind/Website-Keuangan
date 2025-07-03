<script setup>
import { ref, computed, watch, nextTick } from "vue";
import FadeInSection from "./FadeInSection.vue";

// State for calculator inputs, using ref for reactivity
const savings = ref(10);
const debt = ref(20);
const protection = ref(30);

// State for calculator results
const score = ref(null);
const level = ref("");
const message = ref("");
const colorClass = ref("");
const showResult = ref(false);

// A computed property to display text based on the protection slider's value
const protectionText = computed(() => {
  if (protection.value < 25) return "Minim";
  if (protection.value < 75) return "Cukup";
  return "Sangat Aman";
});

// A computed property to generate the WhatsApp link dynamically based on the score
const whatsappLink = computed(() => {
  if (score.value === null) return "#"; // Return a placeholder if score is not calculated yet
  const waMessage = `Halo Pak Yohanes, saya baru coba Financial Check-up di website Anda. Skor saya adalah ${score.value} (Level: ${level.value}). Bisa bantu saya untuk memperbaikinya?`;
  const encodedMessage = encodeURIComponent(waMessage);
  return `https://wa.me/6285156216608?text=${encodedMessage}`;
});

const resultSection = ref(null);

// Watch for changes in showResult to scroll to the results smoothly
watch(showResult, (newValue) => {
  if (newValue) {
    // nextTick ensures the DOM is updated before trying to scroll
    nextTick(() => {
      resultSection.value?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});

// Function to handle form submission and calculate the financial score
function calculateScore() {
  const s = parseInt(savings.value);
  const d = parseInt(debt.value);
  const p = parseInt(protection.value);

  // Calculate the score based on a weighted formula
  const calculatedScore = Math.round(s * 0.5 + (100 - d) * 0.3 + p * 0.2);
  score.value = calculatedScore;

  // Determine the user's financial level and message based on the score
  if (calculatedScore >= 75) {
    level.value = "AMAN JAYA";
    message.value = "Selamat! Kondisi keuanganmu sudah di jalur yang benar. Tapi, selalu ada ruang untuk optimasi. Yuk, ngobrol biar makin cuan!";
    colorClass.value = "text-green-500";
  } else if (calculatedScore >= 50) {
    level.value = "CUKUP WASPADA";
    message.value = "Kamu sudah berusaha, tapi ada beberapa area bocor yang perlu ditambal. Ini saat yang tepat untuk membuat rencana yang lebih solid.";
    colorClass.value = "text-yellow-500";
  } else {
    level.value = "PERLU BANTUAN SEGERA";
    message.value = "Jangan panik! Banyak orang di posisi ini. Justru ini pertanda kamu harus bertindak sekarang. Langkah pertama adalah yang terpenting.";
    colorClass.value = "text-red-500";
  }
  showResult.value = true; // Make the result section visible
}
</script>

<template>
  <div>
    <!-- INTERACTIVE CALCULATOR -->
    <div class="max-w-2xl mt-12 mx-auto">
      <div class="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200">
        <h3 class="text-xl font-bold text-center text-slate-800 mb-6">Cek Kesehatan Keuanganmu</h3>
        <form @submit.prevent="calculateScore" class="space-y-6">
          <div>
            <label for="savings" class="block font-semibold mb-2">1. Dari total pemasukan, berapa persen yang bisa kamu tabung & investasikan?</label>
            <input type="range" id="savings" v-model="savings" min="0" max="100" class="w-full" />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>Gak ada sisa</span>
              <span class="font-bold text-lg primary-color">{{ savings }}%</span>
              <span>Banyak</span>
            </div>
          </div>
          <div>
            <label for="debt" class="block font-semibold mb-2">2. Seberapa besar cicilan utang konsumtif (kartu kredit, paylater) dari pemasukanmu?</label>
            <input type="range" id="debt" v-model="debt" min="0" max="100" class="w-full" />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>Aman terkendali</span>
              <span class="font-bold text-lg primary-color">{{ debt }}%</span>
              <span>Gali lubang tutup lubang</span>
            </div>
          </div>
          <div>
            <label for="protection" class="block font-semibold mb-2">3. Sudah punya proteksi (asuransi kesehatan/jiwa) yang cukup untuk keluarga?</label>
            <input type="range" id="protection" v-model="protection" min="0" max="100" class="w-full" />
            <div class="flex justify-between text-xs text-slate-500 mt-1">
              <span>Belum kepikiran</span>
              <span class="font-bold text-lg primary-color">{{ protectionText }}</span>
              <span>Sangat Terlindungi</span>
            </div>
          </div>
          <div class="pt-4">
            <button type="submit" class="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg text-lg cta-button">Lihat Skor Saya!</button>
          </div>
        </form>
      </div>
    </div>

    <!-- RESULT SECTION (conditionally rendered) -->
    <div v-if="showResult" ref="resultSection">
      <FadeInSection class="py-16 md:py-20 bg-slate-50">
        <div class="container mx-auto px-6 lg:px-[15%]">
          <div class="text-center max-w-2xl mx-auto">
            <h2 class="text-2xl font-bold text-slate-800">Skor Kesehatan Keuanganmu:</h2>
            <div class="my-4 text-7xl md:text-8xl font-extrabold" :class="colorClass">{{ score }}</div>
            <div class="text-xl font-bold mb-4">{{ level }}</div>
            <p class="text-slate-600 mb-8">{{ message }}</p>
            <a :href="whatsappLink" target="_blank" class="inline-block bg-primary text-white font-bold py-4 px-8 rounded-lg text-lg cta-button"> Ngobrolin Hasilnya, Yuk! (Gratis) </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  </div>
</template>
