---
theme: ./
layout: intro
---

# Presentation title

Presentation subtitle

<div class="absolute bottom-10">
  <span class="font-700">
    Author and Date
  </span>
</div>

---

# Slide Title

Default layout, with some `inline code`.

```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script
  lang="ts"
  setup>
import {defineProps} from 'vue';

defineProps<{
  title: string
}>();
</script>
```

- Bullet 1 with `code`
- Bullet 2 with **bold**
- Bullet 3 with *italic*
- Bullet 4 with ~~strikethrough~~
- Bullet 5 with <span class="text-red-500">
  custom</span> <span class="text-blue-500">color</span>

---
layout: image-right
image: 'https://source.unsplash.com/collection/4966472/1920x1080'
---

# Slide Title

## Slide Subtitle

* Slide bullet text

---
layout: section
---

# Section Title

---
layout: image
image: 'https://source.unsplash.com/collection/4966472/1920x1080'
---

---
layout: center
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---
layout: outro
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
