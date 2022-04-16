<template>
  <div class="login-container">
    <div class="tubiao">
      <img src="../assets/tubiao.png" alt="" />
    </div>
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
      class="login-form"
    >
      <h2 class="login-title">母线槽后台管理系统</h2>

      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "用户名3-5位", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "密码3-8位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // console.log(valid) 验证通过为true，有一个不通过就是false
        if (valid) {
          // 通过的逻辑
          this.$router.push("container");
        } else {
          console.log("验证失败");
          return false;
        }
      });
    },
  },
};
</script>

  <style acoped>
.login-form {
  width: 350px;
  margin: 210px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.6); /* 透明背景色 */
  border: 1px solid #eee;
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/1.png") no-repeat fixed;
  background-size: cover;
}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
}
.tubiao img {
  width: 148px;
  height: 145px;
  float: left;
}
</style> -->