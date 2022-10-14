<template>
  <div class="editor-outer">
    <div class="editor">
      <div class="session-outer">
        <div class="session" contenteditable="true">
          第一章: xxx
        </div>
      </div>
      <div class="workplace" contenteditable="true" spellcheck="true">
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Editor",

  }
</script>

<style scoped lang="less">
  .editor-outer {
    width: 100%;
    height: 100%;
    background: #1E1E1E;
    padding: 20px 40px;

    .editor {
      width: 100%;
      height: 100%;
      background-color: #333;
      // padding: 20px;
      display: flex;
      flex-direction: column;
      

      color: #f5f5f5;

      .session-outer {
        padding: 30px 40px 0 40px;
        .session {
          font-size: 24px;
          border-bottom: 1px solid #444;
          outline: none;
          padding-bottom: 10px;
        }
      }

      .workplace {
        padding: 30px 40px 30px 40px;
        // padding-top: 10px;
        outline: none;
        flex: 1;
        text-indent: 2em;
        position: relative;
        overflow: auto;
        font-size: 18px;
        line-height: 26px;

        // div {
        //   margin-bottom: 10px;
        // }
      }
    }
  }
</style>