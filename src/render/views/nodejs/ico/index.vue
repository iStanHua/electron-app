<template>
  <div class="content ico-page">
    <div class="section">
      <div class="section-title">png转ico</div>
      <div class="section-content">
        <radio-group v-model="selectIndex">
          <radio v-for="(item, index) in list" :value="item" :key="index">{{ item+'x'+item }}</radio>
        </radio-group>
        <upload @change="onUploadChange"></upload>
        <p>{{ msg }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>