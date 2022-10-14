<template>
  <div class="session-chunk">
    <div class="chunk-name" @click="toggleList">
      <span class="icon">
        <a-icon :type="close ? 'caret-right' : 'caret-down'" />
      </span>
      <slot name="title"></slot>
      
    </div>
    <div class="session-list" v-show="!close">
      <slot name="sessionList"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ToggleList",

    data() {
      return {
        close: true
      }
    },

    methods: {
      toggleList() {
        this.close = !this.close;
      }
    }
  }
</script>

<style scoped lang="less">
  .session-chunk {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }

    .chunk-name {
      color: #f5f5f5;
      font-size: 16px;
      cursor: pointer;

      .icon {
        font-size: 12px;
        vertical-align: middle;
        margin-right: 2px;
      }

      .session-cnt {
        color: #666;
        font-size: 14px;
      }
    }

    .session-list {
      padding: 8px 14px;
    }
  }
</style>