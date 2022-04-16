<template>
  <el-container>
    <!-- 侧边栏菜单 -->
    <el-menu
      default-active=""
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      class="el-menu-side"
    >
      <el-menu-item index="container">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>

        <!-- <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group> -->
      </el-menu-item>

      <el-menu-item index="/history">
        <i class="el-icon-menu"></i>
        <span>历史数据</span>
      </el-menu-item>

      <el-menu-item index="/datachart">
        <i class="el-icon-document"></i>
        <span slot="title">图表显示</span>
      </el-menu-item>

      <el-menu-item index="/train">
        <i class="el-icon-guide"></i>
        <span slot="title">地图显示</span>
      </el-menu-item>

      <el-menu-item index="/nodeadd">
        <i class="el-icon-thumb"></i>
        <span slot="title">新增节点</span>
      </el-menu-item>

      <el-menu-item index="/">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>

    <!-- <el-main>
      <router-view></router-view>
    </el-main> -->
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.el-main {
  padding: 0;
}

.el-menu-side {
  width: 95%;
  padding-top: 20px;
  background-color: #333744;
  height: calc(93vh);
  border-top: 1px solid #fff;
}
</style>