<template>
  <div class="content dialog-page">
    <div class="section">
      <div class="section-title">对话框</div>
      <div class="section-content">
        <a class="btn" @click="onOpenFile">选择文件</a>
        <a class="btn" @click="onOpenDirectory">选择文件夹</a>
        <a class="btn" @click="onShowMessageBox">MessageBox</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>