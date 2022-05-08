<script lang="ts" setup>
const { data: jokes } = await useFetch("/api/jokes");
</script>

<template>
  <div>
    <Head>
      <Link rel="stylesheet" href="/styles/jokes.css" />
    </Head>
    <header class="jokes-header">
      <div class="container">
        <h1 class="home-link">
          <NuxtLink to="/" title="Remix Jokes" aria-label="Remix Jokes">
            <span class="logo">🤪</span>
            <span class="logo-medium">J🤪KES</span>
          </NuxtLink>
        </h1>
      </div>
    </header>
    <main class="jokes-main">
      <div class="container">
        <div class="jokes-list">
          <NuxtLink to="/jokes">Get a random joke</NuxtLink>
          <p>Here are a few more jokes to check out:</p>
          <ul>
            <li v-for="joke in jokes">
              <NuxtLink :to="`/jokes/${joke.id}`">{{ joke.name }}</NuxtLink>
            </li>
          </ul>
          <NuxtLink to="/jokes/new" class="button"> Add your own </NuxtLink>
        </div>
        <div class="jokes-outlet">
          <NuxtPage />
        </div>
      </div>
    </main>
  </div>
</template>
