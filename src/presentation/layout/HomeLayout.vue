<script setup lang="ts">
import FoooterClient from '@/presentation/pages/widgets/client/FoooterClient.vue'
import HeaderTopClient from '@/presentation/pages/widgets/client/HeaderTopClient.vue'
</script>

<template>
    <div class="d-flex flex-column min-vh-100">
        <header>
            <HeaderTopClient />
        </header>

        <main class="flex-grow-1 container py-4">
            <slot />
        </main>

        <footer class="bg-light mt-auto">
            <FoooterClient />
        </footer>
    </div>
</template>
