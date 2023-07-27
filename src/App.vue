<script setup lang="ts">
import { useUserStore } from './stores/UserStore';
import HomePage from './views/HomePage.vue';
import LoginView from './views/LoginView.vue';

const store = useUserStore();
</script>

<template>
  <div class="app">
    <HomePage v-if="store.isLoggedIn" />
    <LoginView v-else />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  font-size: 28px;
}
</style>
