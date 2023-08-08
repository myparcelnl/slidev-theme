<template>
  <div class="gap-4 grid grid-cols-3 h-full slidev-layout w-full">
    <div
      class="col-span-2 default image-right"
      v-bind="$attrs">
      <slot />
    </div>
    <div class="my-14">
      <img
        :class="imageClass"
        :src="image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  image: string;
  imageClass?: string;
}>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
