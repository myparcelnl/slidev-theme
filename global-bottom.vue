<template>
  <footer
    v-if="showFooter"
    class="absolute bg-moss bottom-0 px-2 right-0 rounded-tl-lg shadow-lg z-10">
    <small class="text-white">✋🏿✋🏼ga ik te snel? ✋🏻✋🏾✋🏽</small>
  </footer>

  <div class="absolute bg-goldfish bottom-0 h-1 left-0 right-0 shadow-lg z-2"></div>
</template>

<script lang="ts" setup>
import {computed, inject} from 'vue';
import {injectionSlidevContext} from '@slidev/client/constants.ts';

const context = inject(injectionSlidevContext);

const showFooter = computed(() => {
  const layout = context?.nav?.currentLayout;

  if (!layout) {
    return false;
  }

  return !['intro', 'outro'].includes(layout);
});
</script>
