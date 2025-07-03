<script setup>
import { ref } from "vue";
import { ChevronDown } from "lucide-vue-next";

// Define the props that this component accepts
defineProps({
  question: String,
});

// A reactive variable to track the open/closed state of the FAQ item
const isOpen = ref(false);
</script>

<template>
  <div class="bg-slate-50 border border-slate-200 rounded-lg">
    <!-- The clickable question area that toggles the state -->
    <div @click="isOpen = !isOpen" class="flex justify-between items-center cursor-pointer p-6">
      <h3 class="font-semibold text-slate-800">{{ question }}</h3>
      <!-- The chevron icon rotates based on the open/closed state -->
      <ChevronDown class="w-5 h-5 text-slate-500 transition-transform duration-300" :class="{ 'rotate-180': isOpen }" />
    </div>
    <!-- The answer container that expands/collapses -->
    <div class="overflow-hidden transition-all duration-500 ease-in-out" :class="isOpen ? 'max-h-40' : 'max-h-0'">
      <div class="text-slate-600 px-6 pb-6 text-sm">
        <!-- The answer content is passed in via a slot -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>
