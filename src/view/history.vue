<template>
  <div class="container">
    <div class="item post row1">
      <div class="collserv">
        <div class="datecol">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>

        <div class="btncol">
          <el-button type="primary" icon="el-icon-search" @click="getdata()"
            >查询</el-button
          >
          <!-- <el-button type="primary" size="default" @click="ceshi"
            >添加行测试</el-button
          > -->
        </div>
      </div>
    </div>

    <div class="item post row2">
      <el-table
        :data="newData"
        border
        style="width: 100%"
        :header-cell-style="rowStyle"
      >
        <el-table-column prop="datetime" label="日期" align="center">
        </el-table-column>
        <el-table-column prop="Stp" label="节点" align="center">
        </el-table-column>
        <el-table-column prop="Qtp" label="temp1" align="center">
        </el-table-column>
        <el-table-column prop="Ptp" label="Temp2" align="center">
        </el-table-column>
        <el-table-column prop="Ph" label="Temp3" align="center">
        </el-table-column>
        <el-table-column prop="Pfw" label="Temp4" align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newData: [],
      value1: ""
    };
  },
  methods: {
    getdata() {
      let time = this.value1;
      let startime = this.moment(time[0]).format("YYYY-MM-DD");
      let endtime = this.moment(time[1]).format("YYYY-MM-DD");
      console.log(startime);
      console.log(endtime);
      this.$axios
        .post(
          "http://39.100.106.64:8080/mxc/data.do?action=Power" +
            "&start=" +
            startime +
            "&end=" +
            endtime
        )

        .then(response => {
          this.newData = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    rowStyle({ row, rowIndex }) {
      console.log(rowIndex); //表头行下标
      return "background:#F3F4F7;color:#555;font-weight:800;font-size:20px";
    },
    ceshi() {
      console.log(this.tableData);
      this.tableData.push({
        date: "2016-05-555",
        name: "节点1",
        Temp1: "25",
        Temp2: "25",
        Temp3: "25",
        Temp4: "25"
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  align-items: auto;
  align-content: start;
}
.item {
  width: 100%;
  flex: 0 1 auto;
  margin: 1px;
}

.row1 {
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid blue;
}
.row2 {
  margin-top: 20px;
}
.collserv {
  display: flex;
  flex-direction: row;
  margin-left: 50%;
  transform: translateX(-30%);
  overflow: hidden;
}
.btncol {
  margin-left: 5px;
}
</style>
