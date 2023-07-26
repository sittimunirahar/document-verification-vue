<template>
<div :class="$style.frameDiv">
  <div :class="$style.frameParent1">
    <div :class="$style.recentDocumentsParent">
        <h4 :class="$style.recentDocuments">Recent Documents</h4>
        <div :class="$style.button1">
            <b :class="$style.label">View All Documents</b>
        </div>
    </div>
    <div :class="$style.frameParent2">
        <div :class="$style.frameParent3">
            <div :class="$style.documentNameWrapper">
                <b :class="$style.documentName">Document Name</b>
            </div>
            <div :class="$style.frameWrapper1">
                <div :class="$style.frameParent4">
                    <div :class="$style.iconographyWrapper">
                        <img :class="$style.iconography16" alt="" src="Iconography.svg" />
                    </div>
                    <b :class="$style.degreeInInformation1">Degree in Information Systems</b>
                </div>
            </div>
            <div :class="$style.frameWrapper1">
                <div :class="$style.frameParent4">
                    <div :class="$style.iconographyWrapper">
                        <img :class="$style.iconography16" alt="" src="Iconography.svg" />
                    </div>
                    <b :class="$style.degreeInInformation1">Graduate Certificate in Legal Tech - Innovator</b>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<style module>
    .frameParent1 {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
    }

    .frameDiv {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 32px;
        /* font-size: 20px; */
    }

    .frameWrapper1 {
        align-self: stretch;
        background-color: #fff;
        box-shadow: 0px 1px 0px #d0d2d6;
        display: flex;
        flex-direction: column;
        padding: 20px 16px;
        align-items: flex-start;
        justify-content: center;
    }

    .recentDocuments {
        flex: 1;
        position: relative;
        line-height: 32px;
    }
    .button1 {
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #493df5;
        font-family: 'Proxima Nova';
    }
    .recentDocumentsParent {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
    }
    .documentName {
        position: relative;
        line-height: 24px;
        display: inline-block;
        width: 212px;
    }
    .documentNameWrapper {
        align-self: stretch;
        background-color: #fff;
        box-shadow: 0px 1px 0px #d0d2d6;
        display: flex;
        flex-direction: column;
        padding: 0px 16px 20px;
        align-items: flex-start;
        justify-content: center;
        color: #5b6270;
    }
    
    .degreeInInformation1 {
        position: relative;
        line-height: 24px;
        display: inline-block;
        width: 390px;
        flex-shrink: 0;
    }
    .frameParent4 {
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
    }
    .frameParent3 {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1px;
    }
    .receivedOn {
        position: relative;
        line-height: 24px;
        display: inline-block;
        width: 84px;
    }
    .receivedOnWrapper {
        background-color: #fff;
        box-shadow: 0px 1px 0px #d0d2d6;
        display: flex;
        flex-direction: column;
        padding: 0px 16px 20px;
        align-items: flex-start;
        justify-content: center;
        color: #5b6270;
    }
    .jun2021Wrapper {
        background-color: #fff;
        box-shadow: 0px 1px 0px #d0d2d6;
        display: flex;
        flex-direction: column;
        padding: 20px 16px;
        align-items: flex-start;
        justify-content: center;
    }
    .frameParent9 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1px;
    }
    .frameChild {
        align-self: stretch;
        background-color: #fff;
        box-shadow: 0px 1px 0px #d0d2d6;
    }
    .kebabSolid5 {
        align-self: stretch;
        flex: 1;
        position: relative;
        max-width: 100%;
        overflow: hidden;
        max-height: 100%;
    }
    .button2 {
        border-radius: 6px;
        width: 40px;
        height: 40px;
        display: flex;
        flex-direction: column;
        padding: 8px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    }
    .buttonWrapper {
        background-color: #fff;
        box-shadow: 0px 1px 0px #d0d2d6;
        display: flex;
        flex-direction: column;
        padding: 12px 8px;
        align-items: flex-start;
        justify-content: center;
    }
    .frameParent2 {
        align-self: stretch;
        border-radius: 6px;
        background-color: #fff;
        border: 1px solid #d0d2d6;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        padding: 32px 24px;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 14px;
        color: #151f32;
        font-family: 'Proxima Nova';
    }

</style>