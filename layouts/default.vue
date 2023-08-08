<template>
  <div class="slidev-layout">
    <slot />

    <div
      v-if="$slots.footer"
      class="slidev-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
