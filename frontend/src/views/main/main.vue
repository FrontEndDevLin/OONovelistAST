<template>
  <div class="page-warpper">
    <div class="page">
      <div class="header">
        <div class="nav-bar">
          <span class="icon">
            <a-icon type="file-text" />
          </span>
          <span class="bookname">bookName</span>
          <span class="split">/</span>
          <span class="scrollname">第一卷</span>
          <span class="split">/</span>
          <span>sessionName</span>
        </div>
        <div class="oper-bar">
          <a-button type="primary">保存</a-button>
        </div>
      </div>
      <div class="container-outer">
        <div class="container">
          <div class="sider">
            <div class="search-bar">
              <div class="search-view">
                <span class="icon">
                  <a-icon type="search" />
                </span>
                <input type="text" placeholder="搜索章节">
              </div>
            </div>
            <div class="add-session-bar">
              <div class="add-session">
                <span class="icon">
                  <a-icon type="file-add" />
                </span>
                <span>新建章节</span>
              </div>
            </div>
            <div class="split-bar">
              <div class="split-line"></div>
            </div>
            <div class="session-container">
              <ToggleList>
                <template slot="title">
                  <span>草稿箱</span>
                  <span class="session-cnt">（共11章）</span>
                </template>
                <div slot="sessionList" class="session-list-warpper">
                  <div class="session-item">
                    <div class="session-name">第一章</div>
                    <div class="detail">
                      <span class="save-time">
                        10-10 17:29
                      </span>
                      <span>789</span>字
                    </div>
                  </div>
                  <div class="session-item">
                    <div class="session-name">第二章</div>
                    <div class="detail">
                      <span class="save-time">
                        10-10 17:29
                      </span>
                      <span>789</span>字
                    </div>
                  </div>
                  <div class="session-item">
                    <div class="session-name">第三章</div>
                    <div class="detail">
                      <span class="save-time">
                        10-10 17:29
                      </span>
                      <span>789</span>字
                    </div>
                  </div>
                </div>
              </ToggleList>

              <ToggleList>
                <template slot="title">
                  <span>已完成</span>
                  <span class="session-cnt">（共2卷，共11章）</span>
                </template>
                <template slot="sessionList">
                  <ToggleList>
                    <template slot="title">
                      <span>第一卷</span>
                      <span class="session-cnt">（共11章）</span>
                    </template>
                    <div slot="sessionList" class="session-list-warpper">
                      <div class="session-item">
                        <div class="session-name">第一章</div>
                        <div class="detail">
                          <span class="save-time">
                            10-10 17:29
                          </span>
                          <span>789</span>字
                        </div>
                      </div>
                      <div class="session-item">
                        <div class="session-name">第二章</div>
                        <div class="detail">
                          <span class="save-time">
                            10-10 17:29
                          </span>
                          <span>789</span>字
                        </div>
                      </div>
                    </div>
                  </ToggleList>
                  <ToggleList>
                    <template slot="title">
                      <span>第二卷</span>
                      <span class="session-cnt">（共11章）</span>
                    </template>
                    <div slot="sessionList" class="session-list-warpper">
                      <div class="session-item">
                        <div class="session-name">第三章</div>
                        <div class="detail">
                          <span class="save-time">
                            10-10 17:29
                          </span>
                          <span>789</span>字
                        </div>
                      </div>
                    </div>
                  </ToggleList>
                </template>
              </ToggleList>

              <ToggleList>
                <template slot="title">
                  <span>回收站</span>
                  <span class="session-cnt">（共0章）</span>
                </template>
                <div slot="sessionList" class="session-list-warpper">
                </div>
              </ToggleList>
            </div>
          </div>
          <div class="editor">
            <Editor />
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="left-bar">
          <div class="left-item font-cnt">
            本章字数：<span>4444</span>
          </div>
        </div>
        <div class="right-bar">
          <div class="right-item theme">
            Theme
            <span>
              <a-icon type="codepen" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Editor from "@/components/editor";
  import ToggleList from "@/components/toggleList";

  export default {
    name: "MainView",
    components: {
      Editor,
      ToggleList
    }
    /**
     * 数据格式
     * 在AppData/Local/ 里面创建一个数据库文件 global.json(记录所有创建的小说, { id, 小说名 })
     * 新建小说的时候，创建一个文件夹(文件夹名用id), 记录到global.json里，文件夹里再创建一个数据库文件 db.json
     * db.json结构
     * {
     *  scroll: [
     *  {
     *    id: "fasdfasdfasfd",
     *    scrollName: "第一卷"
     *  }
     *  ...
     * ],
     *  sessionList: [
     *   {
     *     id: "fasdfasdfsaf",  --> 对应txt文件名
     *     scroll: "fasdfasdfasfd",  --> 对应卷id
     *     name: "第一章 桃园结义"
     *   }
     *  ]
     * }
     */
  }
</script>

<style scoped lang="less">
  .page-warpper {
    padding-top: 36px;
    height: 100vh;
  }
  .page {
    height: 100%;
    position: relative;
    width: 100%;
    // top: 0;
    .header {
      height: 60px;
      border-bottom: 1px solid #444;
      background-color: #252526;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      position: relative;
      z-index: 1;

      .nav-bar {
        font-size: 20px;
        color: #f5f5f5;

        .icon {
          margin-right: 10px;
        }

        .bookname {
          color: #999;
        }
        .scrollname {
          color: #999;
        }
        
        .split {
          margin: 0 10px;
          color: #666;
          font-size: 24px;
        }
      }
    }
    .container-outer {
      // display: ;
      padding-top: 60px;
      padding-bottom: 40px;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
  
      .container {
        height: 100%;
        display: flex;
        background-color: #1E1E1E;
        
        .sider {
          width: 300px;
          height: 100%;
          border-right: 1px solid #444;
          background-color: #252526;
          padding: 16px 0;

          .search-bar {
            padding: 0 20px;
            margin-bottom: 16px;
            .search-view {
              background-color: #333;
              border-radius: 4px;
              padding: 8px 6px;

              .icon {
                color: #666;
                margin-right: 6px;
              }
              
              input {
                background-color: transparent;
                padding: 0;
                border: 0;
                outline: 0;
                color: #f5f5f5;
              }
            }
          }

          .add-session-bar {
            padding: 0 20px;
            margin-bottom: 16px;

            .add-session {
              color: #999;
              font-size: 16px;

              .icon {
                margin-right: 8px;
              }
            }
          }

          .split-bar {
            padding: 0 20px;
            margin-bottom: 16px;

            .split-line {
              height: 1px;
              background-color: #444;
            }
          }

          .session-container {
            padding: 0 20px;

            .session-list-warpper {
              .session-item {
                color: #999;
                margin-bottom: 10px;
                cursor: pointer;

                &:last-child {
                  margin-bottom: 0;
                }

                .session-name {
                  font-size: 16px;
                  margin-bottom: 2px;
                }
                .detail {
                  font-size: 12px;

                  .save-time {
                    margin-right: 10px;
                  }
                }
              }
            }
          }
        }

        .editor {
          width: 800px;
          height: 100%;
        }
      }
    }

    .footer {
      height: 40px;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      border-top: 1px solid #444;
      background-color: #252526;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      .left-item {
        &.font-cnt {
          color: #f5f5f5;
          font-size: 12px;
        }
      }

      .right-item {
        &.theme {
          color: #666;
          cursor: pointer;
        }
      }
    }
  }

</style>