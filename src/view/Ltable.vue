<template>
  <div class="ltable">
    <div style="height: 30px; line-height: 30px; font-weight: 800">
      | 各节点变量列表显示
    </div>
    <el-table
      :data="LittleDates"
      height="380"
      stripe
      border
      style="box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.164)"
      :row-style="rowStyle"
    >
      <el-table-column
        v-for="(col, idx) in Littlecols"
        :prop="col.data"
        :label="col.label"
        :key="idx"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      LittleDate: [
        {
          节点: "节点1",
          A相温度: "12℃",
          B相温度: "24℃",
          C相温度: "31℃",
          N相温度: "44℃",
        },
        {
          节点: "节点2",
          A相温度: "3℃",
          B相温度: "45℃",
          C相温度: "31℃",
          N相温度: "14℃",
        },
        {
          节点: "节点3",
          A相温度: "28℃",
          B相温度: "22℃",
          C相温度: "23℃",
          N相温度: "24℃",
        },
        {
          节点: "节点4",
          A相温度: "12℃",
          B相温度: "25℃",
          C相温度: "37℃",
          N相温度: "34℃",
        },
        {
          节点: "节点5",
          A相温度: "15℃",
          B相温度: "42℃",
          C相温度: "23℃",
          N相温度: "32℃",
        },
        {
          节点: "节点6",
          A相温度: "32℃",
          B相温度: "14℃",
          C相温度: "23℃",
          N相温度: "14℃",
        },
        {
          节点: "节点7",
          A相温度: "11℃",
          B相温度: "23℃",
          C相温度: "24℃",
          N相温度: "35℃",
        },
        {
          节点: "节点8",
          A相温度: "14℃",
          B相温度: "22℃",
          C相温度: "14℃",
          N相温度: "28℃",
        },
        {
          节点: "节点9",
          A相温度: "21℃",
          B相温度: "24℃",
          C相温度: "23℃",
          N相温度: "27℃",
        },
        {
          节点: "节点10",
          A相温度: "32℃",
          B相温度: "22℃",
          C相温度: "13℃",
          N相温度: "19℃",
        },
        {
          节点: "节点11",
          A相温度: "21℃",
          B相温度: "24℃",
          C相温度: "23℃",
          N相温度: "19℃",
        },
        {
          节点: "节点12",
          A相温度: "32℃",
          B相温度: "42℃",
          C相温度: "32℃",
          N相温度: "14℃",
        },
        {
          节点: "节点13",
          A相温度: "16℃",
          B相温度: "12℃",
          C相温度: "12℃",
          N相温度: "14℃",
        },
      ],
      LittleDates: [],
      Littlecols: [
        { data: "node_id", label: "ID" },
        { data: "tem_A", label: "A相温度(℃)" },
        { data: "tem_B", label: "B相温度(℃)" },
        { data: "tem_C", label: "C相温度(℃)" },
        { data: "tem_N", label: "D相温度(℃)" },
      ],
    };
  },
  mounted() {
    this.getdata();
    setInterval(() => {
      this.getdata();
    }, 1000);
  },

  methods: {
    getdata() {
      this.$axios
        .get("http://39.100.106.64:8080/mxc/node.do?action=Tem")
        .then((response) => {
          let that = this;
          that.LittleDates = response.data;
          // this.LittleDate.forEach(function (item, index) {
          //   for (let i in item) {
          //     console.log(item);
          //     console.log(item[i]);
          //     // item.A相温度 = tempA + "℃";
          //     // item.B相温度 = Math.floor(1 + Math.random() * 25) + "℃";
          //     // item.C相温度 = Math.floor(1 + Math.random() * 25) + "℃";
          //     // item.N相温度 = Math.floor(1 + Math.random() * 25) + "℃";
          //   }
          // });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    dayin() {},
    rowStyle({ row, rowIndex }) {
      let stylejson = {};
      if (rowIndex) {
        stylejson.height = "53px";
        return stylejson;
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
</style>