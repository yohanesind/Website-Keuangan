<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// This ref will hold the reference to the component's root element
const element = ref(null);
const isVisible = ref(false);

let observer;

// Set up the Intersection Observer when the component is mounted
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      // If the element is intersecting (visible in the viewport)
      if (entry.isIntersecting) {
        isVisible.value = true;
        // Stop observing the element once it's visible to save resources
        observer.unobserve(element.value);
      }
    },
    {
      // Trigger the callback when 10% of the element is visible
      threshold: 0.1,
    }
  );
  // Start observing the root element of this component
  observer.observe(element.value);
});

// Clean up the observer when the component is unmounted
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div ref="element" class="transition-opacity duration-700 ease-out transform" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'">
    <!-- The content passed to this component will be rendered here -->
    <slot></slot>
  </div>
</template>
