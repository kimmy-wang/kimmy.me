<script setup lang="ts">
import IconGithub from "~icons/feather/github"
import IconDevTo from "~icons/feather/edit"
import { UmamiSession } from "@/interface"
import { numberFormatter } from "@/functions"

const data = ref<UmamiSession>({ count: 0 })

onMounted(async () => {
  const res = await $fetch<UmamiSession>("/api/umami")
  res ? (data.value = res) : ""
})
</script>

<template>
  <footer class="mt-6 md:mt-12 w-full flex flex-col md:flex-row justify-between">
    <div class="flex space-x-3 md:space-x-4 text-dark-900 dark:text-light-900">
      <a href="https://github.com/see" aria-label="Github/see" target="_blank"
        ><IconGithub class="w-5 md:w-6 h-auto fill-current"
      /></a>
      <a href="https://dev.to/see" aria-label="Devto/see" target="_blank"
        ><IconDevTo class="w-5 md:w-6 h-auto fill-current"
      /></a>

      <span class="md:!ml-8 text-sm md:text-base"> &copy; Kimmy 2022 </span>
    </div>

    <ClientOnly>
      <p class="text-gray-300">{{ numberFormatter(data.count) }} visitors</p>
    </ClientOnly>
  </footer>
</template>
