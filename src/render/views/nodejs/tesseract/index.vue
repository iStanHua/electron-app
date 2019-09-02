<template>
  <div class="content tesseract-page">
    <div class="section">
      <div class="section-title">OCR</div>
      <div class="section-content">
        <radio-group v-model="selectId">
          <radio v-for="(item, index) in list" :value="item.id" :key="index">{{item.name}}</radio>
        </radio-group>
        <upload @change="onUploadChange"></upload>
        <p>{{ msg }}</p>
        <pre v-if="text">{{ text }}</pre>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>