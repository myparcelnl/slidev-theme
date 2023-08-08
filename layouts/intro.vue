<template>
  <div
    :class="{
      'grid-cols-3': image,
      'grid-flow-col': !image,
    }"
    :style="style"
    class="gap-4 grid h-full intro slidev-layout w-full">
    <div
      :class="{
        'col-span-2': image,
      }"
      class="my-auto"
      v-bind="$attrs">
      <slot>
        <h1 v-text="heading" />
        <h2 v-text="subheading" />
      </slot>
    </div>

    <div
      v-if="image"
      class="my-auto">
      <img
        :class="imageClass"
        :src="image" />
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

  image: {
    type: String,
    default: null,
  },

  imageClass: {
    type: String,
    default: null,
  },

  subheading: {
    type: String,
    default: null,
  },

  heading: {
    type: String,
    default: null,
  },
});

const style = computed(() => handleBackground(props.background, true));
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
