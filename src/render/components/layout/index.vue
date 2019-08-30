<template>
  <div role="page" class="page">
    <div class="nav-aside">
      <div class="nav-content">
        <div role="nav" class="nav-view">
          <div class="nav-item" v-for="(item, index) in navList" :key="index" :title="item.name"
            :class="{'nav-active':item.name===route}" @click="navItemClick(index)">
            <i class="icon" :class="['i-'+item.name]"></i>
          </div>
        </div>
      </div>
      <!-- <div class="nav-footer">
          <div class="nav-item">
            <i class="icon i-other" title="other"></i>
            <span>other</span>
          </div>
        </div> -->
    </div>
    <div role="main" v-if="childNavList.length" class="main">
      <header-layer></header-layer>
      <div class="main-content">
        <div role="nav" class="nav-view">
          <div class="nav-item" v-for="(item, index) in childNavList" :key="index"
            :class="{'nav-active':item.name===currentRoute}" @click="childItemClick(index)">{{item.name}}</div>
        </div>
        <router-view />
      </div>
    </div>
    <router-view v-else />
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>