<script setup lang="ts">
import logo from '@/assets/images/Atomsglobal.svg';
import icon1 from '@/assets/images/1.svg';
</script>

<template>
  <div :class="$style.globalNavigation">
    <div :class="$style.atomsGlobalParent">
    <div :class="$style.atomsGlobal11">
        <img alt="" :src="logo" />
    </div>
        <div :class="$style.atomsGlobal6">
            <img :class="$style.iconography16" alt="" src="@/assets/images/1.svg" />
        </div>
        <div :class="$style.atomsGlobal7">
            <img :class="$style.iconography16" alt="" src="@/assets/images/2.svg" />
        </div>
        <div :class="$style.atomsGlobal7">
            <img :class="$style.iconography16" alt="" src="@/assets/images/3.svg" />
        </div>
        <div :class="$style.atomsGlobal7">
            <img :class="$style.iconography16" alt="" src="@/assets/images/4.svg" />
        </div>
        <div :class="$style.atomsGlobal7">
            <img :class="$style.iconography16" alt="" src="@/assets/images/5.svg" />
        </div>
    </div>
  </div>
</template>

<style module>
    .globalNavigationChild {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        left: 0%;
        /* background-color: #151f32; */
    }
    .iconography16 {
        position: relative;
        width: 24px;
        height: 24px;
        overflow: hidden;
        flex-shrink: 0;
    }
    .atomsGlobalParent {
        /* position: absolute;
        top: 96px;
        left: calc(50% - 30px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px; */
        width: 60px;
        height: 1048px;
        flex-shrink: 0;
        background-color: #151f32;
    }
    .atomsGlobalParent > div {
        display: flex;
        padding: 18px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        gap:10px;
    }
    .globalNavigation1 {
        /* position: absolute;
        height: 100%;
        width: 100%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        left: 0%; */
    }
    .globalNavigation {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 60px;
        height: 1048px;
    }

</style>
