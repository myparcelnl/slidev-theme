<template>
  <div class="slidev-layout bullets">
    <slot />

    <div v-if="$slots.footer" class="slidev-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup></script>
