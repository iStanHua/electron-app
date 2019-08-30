<template>
  <div class="header">
    <div class="header-inner"></div>
    <i class="icon i-minimize" @click="onMinimize"></i>
    <i class="icon" :class="[isMaximize?'i-reduce':'i-maximize']" @click="onMaximize"></i>
    <i class="icon i-close" @click="onClose"></i>
  </div>
</template>
<style lang="scss" src="./header.scss"></style>
<script src="./header.js"></script>