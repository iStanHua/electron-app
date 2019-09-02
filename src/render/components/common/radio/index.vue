<template>
  <div class="radio" :class="{'radio-checked':isChecked,'radio-disabled':disabled}" @click="onChange">
    <div class="mark"></div>
    <div class="text">
      <template v-if="label">{{label}}</template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>