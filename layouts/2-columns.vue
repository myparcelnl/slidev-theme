<template>
  <div class="slidev-layout 2-columns">
    <div class="grid grid-cols-2 gap-4">
      <slot />
      <slot name="right" />
    </div>
  </div>
</template>

<script setup></script>
