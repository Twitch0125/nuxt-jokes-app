<script lang="ts" setup>
import type { RandomJokeGetResponse } from "~~/server/api/jokes/random.get";

const {
  data: joke,
  pending,
  error,
  refresh,
} = await useFetch<RandomJokeGetResponse>("/api/jokes/random");
</script>

<template>
  <div>
    <p>Here's a random joke:</p>
    <template v-if="!pending && !error">
      <template v-if="joke">
        <p>{{ joke.content }}</p>
        <NuxtLink> "{{ joke.name }}" </NuxtLink>
      </template>
    </template>
  </div>
</template>
