<template>
  <div :class="$style.careerGoalParent">
    <h4 :class="$style.careerGoal">Career Goal</h4>
    <div :class="$style.yourProgressParent">
        <b :class="$style.yourProgress">Your Progress</b>
        <div :class="$style.backgroundParent">
            <img :class="$style.backgroundIcon" alt="" src="Background.svg" />
            <img :class="$style.progressBarIcon" alt="" src="Progress bar.svg" />
            <b :class="$style.b">35%</b>
        </div>
        <div :class="$style.iWantToBecomeAParent">
            <div :class="$style.yourProgress">I want to become a</div>
            <b :class="$style.taxManager">Tax Manager</b>
        </div>
        <div :class="$style.button">
            <b :class="$style.label">View Insights</b>
        </div>
    </div>
  </div>
</template>

<style module>
  .careerGoal {
    flex: 1;
    position: relative;
    line-height: 32px;
  }

  .careerGoalParent {
      align-self: stretch;
      width: 260px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 16px;
  }

  .yourProgressParent {
        align-self: stretch;
        flex: 1;
        border-radius: 6px;
        background-color: #fff;
        border: 1px solid #d0d2d6;
        display: flex;
        flex-direction: column;
        padding: 32px 40px;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
        text-align: center;
        font-size: 14px;
        color: #5b6270;
        font-family: 'Proxima Nova';
    }

  .yourProgress {
        align-self: stretch;
        position: relative;
        line-height: 24px;
    }
    .backgroundIcon {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        left: 0%;
        max-width: 100%;
        overflow: hidden;
        max-height: 100%;
    }
    .progressBarIcon {
        position: absolute;
        height: 85.3%;
        width: 53.5%;
        top: 0%;
        right: 0%;
        bottom: 14.7%;
        left: 46.5%;
        max-width: 100%;
        overflow: hidden;
        max-height: 100%;
    }
    .b {
        position: absolute;
        top: calc(50% - 22px);
        left: calc(50% - 28px);
        line-height: 44px;
    }
    .backgroundParent {
        position: relative;
        width: 180px;
        height: 180px;
        text-align: left;
        font-size: 28px;
        color: #2b22b5;
        font-family: 'Pulp Display';
    }
    .taxManager {
        align-self: stretch;
        position: relative;
        font-size: 20px;
        line-height: 32px;
        font-family: 'Pulp Display';
    }
    .iWantToBecomeAParent {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        color: #000;
    }
    .label {
        position: relative;
        line-height: 24px;
    }
    .button {
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: left;
        color: #493df5;
    }
</style>