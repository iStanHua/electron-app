<template>
  <div class="content gif-page">
    <div class="section">
      <div class="section-title">提取gif帧</div>
      <div class="section-content">
        <upload @change="onUploadChange"></upload>
        <p>{{ msg }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>