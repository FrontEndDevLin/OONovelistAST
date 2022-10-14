<template>
  <div class="page-warpper">
    <div class="container">
      <div class="oper-bar">
        <div class="add-book" @click="openAddModal">
          <span class="icon">
            <a-icon type="file-add" />
          </span>
          <span>新建</span>
        </div>
      </div>
      <div class="book-list">
        <div class="book-item" v-for="oBook of bookList" :key="oBook.id">
          <div class="item-left">
            <div class="book-name" @click="toEditor">{{ oBook.bookName }}</div>
            <div class="detail">
              <span class="detail1">草稿箱(0)</span> 
              <span>已完成(0)</span> 
            </div>
          </div>
          <div class="item-right">
            <div class="oper-btns">
              <span class="btn edit" @click="openEditModal(oBook)">编辑</span>
              <span class="btn del" @click="openDelConfirmModal(oBook)">删除</span>
            </div>
          </div>
        </div>

        <div v-if="!bookList.length">一切的一切，从新建一本小说开始</div>
      </div>
    </div>

    <a-modal
      v-model="mVisible" 
      :title="mTitle" 
      ok-text="确认" 
      cancel-text="取消" 
      @ok="handleOKModal"
    >
      <a-input placeholder="请输入书名" v-model="bookName"></a-input>
    </a-modal>
  </div>
</template>

<script>
  import { Modal } from 'ant-design-vue';

  const MODAL_MODE = {
    ADD: 1,
    EDIT: 2
  };

  export default {
    name: "Index",
    data() {
      return {
        mVisible: false,
        mTitle: "",
        mMode: 0,

        bookList: [],

        bookName: "",
        oldBookName: ""
      }
    },

    async created() {
      this.bookList = await this.$native.getBookList();
    },

    methods: {
      openAddModal() {
        this.mTitle = "新建";
        this.mVisible = true;
        this.mMode = MODAL_MODE.ADD;
      },
      openEditModal() {
        this.mTitle = "编辑";
        this.mVisible = true;
        // this.oldBookName = "...";
        this.mMode = MODAL_MODE.EDIT;
      },

      async handleOKModal() {
        switch (this.mMode) {
          case MODAL_MODE.ADD: {
            if (this.bookName) {
              // 新建小说逻辑
              let succ = await this.$native.addBook(this.bookName);

              if (succ) {
                this.mVisible = false;
                this.mMode = 0;
                this.bookName = "";

                this.$message.success("新建成功");

                this.bookList = await this.$native.getBookList();
              }
            }
          } break;
          case MODAL_MODE.EDIT: {
            // 需要对比两个名字是否相同, 相同则不写文件
            if (this.bookName) {
              // 编辑小说逻辑
              console.log(this.bookName)

              this.mVisible = false;
              this.mMode = 0;
              this.bookName = "";
            }
          } break;
        }
      },

      openDelConfirmModal() {
        Modal.confirm({
          title: "提示",
          content: "是否确认删除该项，删除后将无法恢复",
          onOk: () => {
            console.log("删除！")
          },
          okText: "确认",
          cancelText: "取消",
          onCancel() {
            Modal.destroyAll();
          },
        });
      },

      toEditor() {
        this.$router.replace("/editor")
      }
    }
  }
</script>

<style lang="less" scoped>
  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: #ccc;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #999;
  }
  .page-warpper {
    padding-top: 36px;
    height: 100vh;
    overflow: auto;

    .container {
      padding: 40px 60px;
    }

    .oper-bar {
      margin-bottom: 12px;
      .add-book {
        color: #40a9ff;
        font-size: 16px;
        cursor: pointer;

        .icon {
          margin-right: 8px;
        }
      }
    }

    .book-list {
      .book-item {
        border-bottom: 1px solid #ccc;
        padding: 6px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        cursor: default;

        .item-left {
          .book-name {
            font-size: 16px;
            cursor: pointer;
            color: #40a9ff;
          }
  
          .detail {
            font-size: 12px;
            color: #999;

            .detail1 {
              margin-right: 6px;
            }
          }
        }

        .item-right {
          .oper-btns {
            .btn {
              margin-left: 6px;
              cursor: pointer;

              &.edit {
                color: #666;
              }

              &.del {
                color: #D71526;
              }
            }
          }
        }
      }
    }
  }
</style>