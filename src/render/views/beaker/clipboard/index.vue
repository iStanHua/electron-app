<template>
  <div class="content clipboard-page">
    <div class="section">
      <div class="section-title">剪贴板</div>
      <div class="section-content">
        <input-box v-model="msg"></input-box>
        <a class="btn" @click="onCopy">copy</a>
        <input-box></input-box>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>