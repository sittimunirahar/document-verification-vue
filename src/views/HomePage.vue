<script setup lang="ts">
  import TopNavigation from '../components/TopNavigation.vue'
  import MainNavigation from '../components/MainNavigation.vue'
  import HomePageContent from '../components/HomePageContent.vue'
</script>

<template>
  <main>
    <TopNavigation />
    <MainNavigation />
    <HomePageContent />
  </main>
</template>

<style scoped>
  .frameParent {
      position: absolute;
      height: 100%;
      top: 0px;
      bottom: 0px;
      left: 60px;
      /* background-color: #151f32;
      width: 1380px; */
    }

    .contentParent {
      display: flex;
      align-items: flex-start;
      gap: 32px;
      align-self: stretch;
    }
    
    .greeting {
        position: relative;
        line-height: 44px;
        display: flex;
        align-items: center;
        width: 1316px;
    }

    .homepageDescription {
        align-self: stretch;
        position: relative;
        font-size: 16px;
        line-height: 24px;
        font-family: 'Proxima Nova';
        color: #5b6270;
    }

    .greetingParent {
        width: 1092px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
    }

    .frameGroup {
        position: absolute;
        top: 48px;
        left: 144px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 56px;
    }

    .frameWrapper {
        position: absolute;
        height: calc(100% - 64px);
        top: 64px;
        bottom: 0px;
        left: 0px;
        border-radius: 0px 0px 0px 15px;
        width: 1380px;
        overflow: hidden;
    }
    
</style>