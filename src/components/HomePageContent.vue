<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore';
import CareerGoal from '../components/CareerGoal.vue'
import RecentDocument from '../components/RecentDocument.vue'

const store = useUserStore();
</script>

<template>
  <CareerGoal v-if="!store.isPersonal"/>
  <RecentDocument />
</template>