<template>
  <div class="content home-page">
    <div class="grid-layout">
      <div class="grid-nav">
        <loading :show.sync="loadingShow"></loading>
      </div>
      <div class="grid-content">
        <div class="circle-view">
          <div class="circle-list">
            <div class="circle-item">1</div>
            <div class="circle-item">2</div>
            <div class="circle-item">3</div>
            <div class="circle-item">4</div>
            <div class="circle-item">5</div>
            <div class="circle-item">6</div>
            <div class="circle-item">7</div>
            <div class="circle-item">8</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>