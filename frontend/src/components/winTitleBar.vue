<template>
  <div class="win-title-bar-warpper">
    <div class="win-title-bar">
      <div class="win-title-left">
        <div class="logo">
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <img src="@/assets/logo.png" alt="">
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0" @click="toBookList">
                <span>首页</span>
              </a-menu-item>
              <a-menu-item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">
                3rd menu item
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          
        </div>
      </div>
      <div class="win-btn">
        <div class="item devtool" @click="openDevTool" v-if="isDevEnv">
          DevTool
        </div>
        <div class="item" @click="minWin" title="最小化窗口">
          <span class="iconfont icon-minus-bold"></span>
        </div>
        <template>
          <div class="item" @click="unmaximize" title="还原窗口" v-if="isMaxWin">
            <span class="iconfont icon-24gl-minimize2"></span>
          </div>
          <div class="item" @click="maxWin" title="最大化窗口" v-else>
            <span class="iconfont icon-max"></span>
          </div>
        </template>
        
        <div class="item close" @click="closeWinConfirm" title="退出程序">
          <span class="iconfont icon-close"></span>
        </div>
      </div>
    </div>
    <a-modal
      class="model"
      title="提示"
      :visible="modelVisiable"
      ok-text="确定"
      cancel-text="取消"
      @ok="closeWin"
      @cancel="cancel"
    >
      确定要退出程序？
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "win-title-bar",
  components: {

  },
  props: {
  },
  data() {
    return {
      modelVisiable: false,

      isMaxWin: null,

      isDevEnv: process.env.NODE_ENV == "development",

      isIndexPage: false,

      map: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA", "KeyB", "KeyA"],
      index: 0,

      maxWinWidth: 0,
      maxWinHeight: 0
    }
  },

  methods: {
    addDevEnvBonusScene(e) {
      let code = e.code;
      if (code == this.map[this.index]) {
        this.index++;
        if (this.index == this.map.length - 1) {
          this.isDevEnv = true;
        }
      } else {
        this.index = 0;
      }
    },

    openDevTool() {
      this.$native.openDevTool();
    },

    minWin() {
      this.$native.minWin();
    },

    maxWin() {
      this.$native.maximize();
      this.isMaxWin = true;
    },
    unmaximize() {
      this.$native.unmaximize();
    },

    closeWinConfirm() {
      this.modelVisiable = true;
    },

    closeWin() {
      this.$native.closeApp();
    },

    cancel() {
      this.modelVisiable = false;
    },

    toBookList() {
      this.$router.replace("/");
    }
  },

  created() {
    if (this.mode == "full") {
      let currentPath = this.$route.path;
      if (currentPath == "/" || currentPath == this.$router.indexPath || currentPath == "/device-reg-page") {
        this.isIndexPage = true;
      }
    }

    window.addEventListener("keyup", this.addDevEnvBonusScene);

    // this.isMaxWin = this.$native.getLastIsMaxWin();
    // if (this.isMaxWin) {
    //   this.$native.maximize();
    // }
    this.maxWinWidth = window.screen.availWidth;
    this.maxWinHeight = window.screen.availHeight;
    let lastCW = Number(localStorage.getItem("lastCW"));
    let lastCH = Number(localStorage.getItem("lastCH"));
    if (lastCW == this.maxWinWidth && lastCH == this.maxWinHeight) {
      // 全屏
      this.maxWin();
    }

    window.addResizeEvent("r1", () => {
      let lastCW = Number(localStorage.getItem("lastCW"));
      let lastCH = Number(localStorage.getItem("lastCH"));
      if (lastCW == this.maxWinWidth && lastCH == this.maxWinHeight) {
        // 全屏
        this.isMaxWin = true;
      } else {
        this.isMaxWin = false;
      }
    })
  },

  beforeDestory() {
    window.removeEventListener("keyup", this.addDevEnvBonusScene);
  }
}
</script>

<style lang="less" scoped>
  // @import url('~@/assets/layout/common.less');
  .win-title-bar-warpper {
    height: 36px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    -webkit-app-region: drag;
  }
  .win-title-bar {
    height: 100%;
    width: 100%;
    
    background: #3C3C3C;
    
    display: flex;
    justify-content: space-between;
    

    // img {
    //   width: 3rem;
    //   height: 3rem;
    // }
    .win-title-left {
      padding-left: 10px;
      display: flex;
      align-items: center;
      -webkit-app-region: no-drag;
      .logo {
        width: 20px;
        height: 20px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .win-btn {
      display: flex;
      -webkit-app-region: no-drag;
      height: 100%;
      line-height: 36px;

      .item {
        cursor: pointer;
        color: #fff;
        padding: 0 12px;

        &:hover {
          background-color: #505050;
        }

        &.close:hover {
          background-color: #D71526;
        }
      }
    }
  }
</style>