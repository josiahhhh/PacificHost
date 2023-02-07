<script setup lang="ts">
// This component handles fatal errors
// https://nuxt.com/docs/getting-started/error-handling#rendering-an-error-page
const props = defineProps<{
    error: any;
}>();
const message = computed(() => String(props.error?.message || ""));
const is404 = computed(
    () => props.error?.statusCode === 404 || message.value.includes("404")
);
</script>

<template>
    <NuxtLayout>
        <div class="flex min-h-screen items-center justify-center text-center">
            <div class="space-y-4">
                <p class="text-3xl font-semibold">
                    {{ is404? "Page Not Found": "Error" }}}
                </p>
                <p class="text-xl text-gray-500">
                    {{ is404? "The page you are looking for does not exist.": message }}
                </p>

            </div>
        </div>
    </NuxtLayout>
</template>