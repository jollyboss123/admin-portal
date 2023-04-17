<script setup lang="ts">
import { useThemeConfig } from '@core/composable/useThemeConfig';

const { theme } = useThemeConfig()

const authProviders = [
  {
    icon: 'mdi-google',
    color: '#db4437',
    colorInDark: '#db4437',
  },
]
</script>

<template>
  <VBtn
    v-for="link in authProviders"
    :key="link.icon"
    :icon="link.icon"
    variant="text"
    :color="theme === 'dark' ? link.colorInDark : link.color"
  />
</template>
