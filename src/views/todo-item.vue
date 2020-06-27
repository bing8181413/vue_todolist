<template>
    <li class="item">
        <span>{{index+1}}:</span>
        <span>{{content}}</span>
        <p @click="deleteItem">删除</p>
    </li>
</template>

<script>
    export default {
      props: ["content", "index"],
      data() {
        return {};
      },
      methods: {
        deleteItem() {
          let duration = 1200;
          this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
            confirmButtonText: "确定",
            showCancelButton: false,
            showInput: true,
            type: "error"
          })
            .then(() => {
              this.$store.commit("del", this.index);
              this.$message({
                type: "success",
                duration,
                message: "删除成功!"
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                duration,
                message: "已取消删除"
              });
            });
        }
      }
    };
</script>

<style lang="scss" scoped>
    .item {
      margin: 0 auto;
      width: 19rem;
      line-height: 2rem;
      font-size: 1rem;
      display: flex;
      span {
        text-align: left;
      }
      span + span {
        width: 75%;
        padding-left: 1rem;
      }
      p {
        padding-left: 0.5rem;
        &:hover {
          color: red;
          cursor: pointer;
        }
      }
    }
</style>