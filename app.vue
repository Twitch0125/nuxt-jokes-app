<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  link: [
    { rel: "stylesheet", href: "/styles/global.css" },
    {
      rel: "stylesheet",
      media: "print, (min-width: 640px)",
      href: "/styles/global-medium.css",
    },
    {
      rel: "stylesheet",
      media: "screen and min-width(1024px)",
      href: "/styles/global-large.css",
    },
  ],
});
</script>
