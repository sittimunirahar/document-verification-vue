<script setup lang="ts">

  let isDropdownOpen = false;
  const toggleDropdown = () => {
    isDropdownOpen = !isDropdownOpen
  }
  
// export default {
//   data () {
//     return {
//       isDropdownOpen: false
//     }
//   },
//   methods: {
//     toggleDropdown () {
//       this.isDropdownOpen = !this.isDropdownOpen
//     }
//   }
// }
</script>

<template>
  <div :class="$style.utilityNavigation">
    <div :class="$style.utilityNavigationChild" />
      <div :class="$style.utilityNavigationInner">
        <div :class="$style.atomsUtilityWrapper">
          <div :class="$style.atomsUtility9">

            <button @click="toggleDropdown" class="iconographyWrapper">
             <div :class="$style.atomsUtility11">
                <div :class="$style.image">
                  <div :class="$style.imageChild" />
                     <div :class="$style.gg">GG</div>
                  </div>
                  <div :class="$style.geraldGoh">Gerald Goh</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.2826 9.25506C15.9859 8.91498 15.5198 8.91498 15.2231 9.25506L12.0025 12.9474L8.78189 9.25506C8.48526 8.91498 8.01911 8.91498 7.72248 9.25506C7.42584 9.59514 7.42584 10.1296 7.72248 10.4696L11.4516 14.7449C11.7483 15.085 12.2144 15.085 12.511 14.7449L16.2402 10.4696C16.5792 10.1296 16.5792 9.59514 16.2826 9.25506Z" fill="#151F32"/>
                  </svg>
              </div>
            </button>
            
            <div :class="$style.atomsUtilityParent" v-show="isDropdownOpen">
                <div :class="$style.atomsUtility12">
                    <div :class="$style.image1">
                        <div :class="$style.imageChild" />
                        <div :class="$style.gg1">GG</div>
                    </div>
                    <div :class="$style.gwendolynGohParent">
                        <b :class="$style.yourProgress">Gerald Goh</b>
                        <div :class="$style.manager">Recipient</div>
                    </div>
                </div>
                <!-- <div :class="$style.frameItem" /> -->
                
                <div :class="$style.frameInner" />
                <button :class="$style.atomsUtility17">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.1667 2.00003H2.33333C2.13333 2.00003 2 2.13336 2 2.33336V13.6667C2 13.8667 2.13333 14 2.33333 14H10.1667C10.3667 14 10.5 13.8667 10.5 13.6667V9.83336C10.5 9.63336 10.3667 9.50003 10.1667 9.50003C9.96667 9.50003 9.83333 9.63336 9.83333 9.83336V13.3334H2.66667V2.6667H9.83333V6.1667C9.83333 6.3667 9.96667 6.50003 10.1667 6.50003C10.3667 6.50003 10.5 6.3667 10.5 6.1667V2.33336C10.5 2.13336 10.3333 2.00003 10.1667 2.00003Z" fill="#151F32"/>
                  <path d="M13.7334 8.13336C13.7667 8.06669 13.7667 7.96669 13.7334 7.86669C13.7 7.83336 13.7 7.80003 13.6667 7.76669L11.7667 5.86669C11.6334 5.73336 11.4334 5.73336 11.3 5.86669C11.1667 6.00003 11.1667 6.20003 11.3 6.33336L12.6 7.63336H7.73336C7.53336 7.63336 7.40002 7.76669 7.40002 7.96669C7.40002 8.16669 7.53336 8.30003 7.73336 8.30003H12.6L11.3 9.66669C11.1667 9.80003 11.1667 10 11.3 10.1334C11.4334 10.2667 11.6334 10.2667 11.7667 10.1334L13.6667 8.23336C13.6667 8.20003 13.7 8.16669 13.7334 8.13336Z" fill="#151F32"/>
                </svg>Log out
                </button>
              </div>
            </div>
          </div>
      </div> 
  </div> 
</template>

<style module>
  .iconography16 {
      position: relative;
      width: 24px;
      height: 24px;
      overflow: hidden;
      flex-shrink: 0;
  }

  .utilityNavigationChild {
        position: absolute;
        width: calc(100% + 1px);
        top: 63.5px;
        right: -0.5px;
        left: -0.5px;
        border-top: 1px solid #d0d2d6;
        box-sizing: border-box;
        height: 1px;
    }
    .imageChild {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        left: 0%;
        border-radius: 50%;
        background-color: #493df5;
    }
    .gg {
        position: absolute;
        width: 100%;
        top: 0%;
        left: 0%;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image {
        position: relative;
        width: 24px;
        height: 24px;
    }
    .geraldGoh {
        position: relative;
        line-height: 24px;
        color: #151f32;
    }
    .iconographyWrapper {
        display: flex;
        padding: 8px;
        align-items: center;
        gap: 8px;
        border-radius: 4px;
        border: 1px solid var(--primary-p-50, #493DF5);
        background: var(--neutral-n-10, #F3F4F5);
    }
    /* on show */
    .atomsUtility11 {
        display: flex;
        flex-direction: row;
        padding: 8px;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
    }
    .gg1 {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0%;
        left: 0%;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image1 {
        position: relative;
        width: 48px;
        height: 48px;
    }
    .manager {
        align-self: stretch;
        position: relative;
        font-size: 14px;
        line-height: 24px;
        color: #5b6270;
    }
    .gwendolynGohParent {
        width: 160px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        font-size: 16px;
        color: #151f32;
    }
    .atomsUtility12 {
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        padding: 12px;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
        text-align: center;
        font-size: 24px;
    }
    .frameItem {
        align-self: stretch;
        position: relative;
        border-top: 1px solid #e8e9eb;
        box-sizing: border-box;
        height: 1px;
        display: none;
    }
    .iconography27 {
        position: relative;
        width: 16px;
        height: 16px;
        overflow: hidden;
        flex-shrink: 0;
    }
    
    .atomsUtility13 {
        align-self: stretch;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        padding: 8px 12px;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
    }
    .atomsUtilityGroup {
        align-self: stretch;
        display: none;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        color: #151f32;
    }
    .frameInner {
        align-self: stretch;
        position: relative;
        border-top: 1px solid #e8e9eb;
        box-sizing: border-box;
        height: 1px;
    }
    .atomsUtility17 {
      display: flex;
      padding: 8px 12px;
      gap: 8px;
      align-self: stretch;
    }
    .atomsUtilityParent {
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        padding: 12px;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
        text-align: left;
    }
    .atomsUtility9 {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        gap: 8px;
    }
    .atomsUtilityWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
    .utilityNavigationInner {
        position: absolute;
        top: 12px;
        right: 32px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .utilityNavigation {
        /* position: absolute;
        top: 0px;
        left: 0px;
        background-color: #fff;
        width: 100%;
        height: 64px;
        text-align: center;
        font-size: 14px;*/
        color: #fff;
        font-family: 'Proxima Nova'; 
        width: 1380px;
        height: 64px;
        flex-shrink: 0;
    }
</style>
