<script lang="ts" setup>
const data = reactive({
  name: "",
  content: "",
});
const handleSubmit = async () => {
  await $fetch("/api/jokes/new", {
    method: "POST",
    body: {
      name: data.name,
      content: data.content,
    },
  });
};

const handleError = () => {};
</script>

<template>
  <div>
    <NuxtErrorBoundary @error="handleError">
      <template #error="{ error }">
        <pre>
        Error: {{ error }}
      </pre
        >
      </template>
    </NuxtErrorBoundary>
    <p>Add your own hilarious joke</p>

    <form @submit.prevent="handleSubmit">
      <div>
        <label>
          Name:
          <input
            v-model="data.name"
            :aria-errormessage="
              actionData?.fieldErrors?.name ? 'name-error' : undefined
            "
            type="text"
            name="name"
          />
        </label>
      </div>
      <div>
        <label>
          Content: <textarea v-model="data.content" name="content" />
        </label>
      </div>
      <div>
        <button type="submit" class="button">Add</button>
      </div>
    </form>
  </div>
</template>
