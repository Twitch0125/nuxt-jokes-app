<script lang="ts" setup>
import type { JokeidGetResponse } from "~/server/jokes/[jokeId].get";

const { params } = useRoute();
const { data: joke } = await useFetch<JokeidGetResponse>(
  `/api/jokes/${params.jokeId}`
);
</script>

<template>
  <div>
    <p>Here's your hilarious joke:</p>
    <p>
      {{ joke.content }}
    </p>
  </div>
</template>
