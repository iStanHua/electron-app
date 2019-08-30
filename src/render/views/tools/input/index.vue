<template>
    <div class="content input-page">
      <div class="section">
        <div class="section-title">基础用法</div>
        <div class="section-content">
          <input-box v-model="env" ref="inputRef" autofocus clearable placeholder="请输入"></input-box>
          <a class="btn" @click="hanldeFocus">焦点</a>
          <a class="btn" @click="$refs.inputRef.select()">选中</a>
        </div>
      </div>
      <div class="section">
        <div class="section-title">禁用状态</div>
        <div class="section-content">
          <input-box disabled></input-box>
        </div>
      </div>
      <div class="section">
        <div class="section-title">文本域</div>
        <div class="section-content">
          <input-box type="textarea" v-model="code"></input-box>
          <a class="btn" @click="hanldeRunCode">运行</a>
        </div>
      </div>
    </div>
  </template>
  <style lang="scss" src="./index.scss"></style>
  <script src="./index.js"></script>