<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore';
import CareerGoal from '../components/CareerGoal.vue'
import RecentDocument from '../components/RecentDocument.vue'

const store = useUserStore();
</script>

<template>
  <main class="content">
    <CareerGoal v-if="!store.isPersonal"/>
    <RecentDocument />
  </main>
</template>

<style>
.content {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
}
</style>