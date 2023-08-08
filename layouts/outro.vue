<template>
  <div
    :style="style"
    class="outro slidev-layout">
    <div class="my-auto">
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="slidev-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
import {handleBackground} from '../utils/handleBackground.ts';

const props = defineProps({
  background: {
    type: String,
    default: '/img/slide-bg.jpeg',
  },
});

const style = computed(() => handleBackground(props.background, true));
</script>
