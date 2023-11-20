<template>
  <div
    :class="{
      'gap-4 grid-cols-3': image,
    }"
    :style="style"
    class="grid h-full outro slidev-layout w-full">
    <div
      :class="{
        'col-span-2 default image-right': image,
      }"
      v-bind="$attrs">
      <slot />
    </div>

    <div
      v-if="image"
      class="my-14">
      <img
        :class="imageClass"
        :src="image" />
    </div>

    <div
      v-if="$slots.footer"
      class="col-span-full slidev-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
import {handleBackground} from '../utils/handleBackground.ts';

const props = defineProps({
  image: {
    type: String,
    default: null,
  },
  imageClass: {
    type: String,
    default: null,
  },
  background: {
    type: String,
    default: '/public/slide-bg.jpeg',
  },
});

const style = computed(() => handleBackground(props.background, true));
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
