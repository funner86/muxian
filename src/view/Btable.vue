<template>
  <div>
    <div style="font-weight: 800">| 始端箱50个变量列表显示</div>
    <div style="box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.164)">
      <div :class="{ firstpage: isfirstpage }">
        <el-table :data="Bdata" stripe border>
          <el-table-column
            v-for="(col, idx) in Bigcols1"
            :prop="col.data"
            :label="col.label"
            :key="idx"
            align="center"
          >
          </el-table-column>
        </el-table>

        <el-table :data="Bdata" stripe border>
          <el-table-column
            v-for="(col, idx) in Bigcols2"
            :prop="col.data"
            :label="col.label"
            :key="idx"
            align="center"
          >
          </el-table-column>
        </el-table>
        <el-table :data="Bdata" stripe border>
          <el-table-column
            v-for="(col, idx) in Bigcols3"
            :prop="col.data"
            :label="col.label"
            :key="idx"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>

      <div :class="{ nextpage: isnextpage }">
        <!-- <el-table :data="BigData" stripe border>
          <el-table-column
            v-for="(col, idx) in Bigcols4"
            :prop="col"
            :label="col"
            :key="idx"
            align="center"
          >
          </el-table-column>
        </el-table>

        <el-table :data="BigData" stripe border>
          <el-table-column
            v-for="(col, idx) in Bigcols5"
            :prop="col"
            :label="col"
            :key="idx"
            align="center"
          >
          </el-table-column>
        </el-table>
        <el-table :data="BigData" stripe border>
          <el-table-column
            v-for="(col, idx) in Bigcols6"
            :prop="col"
            :label="col"
            :key="idx"
            align="center"
          >
          </el-table-column>
        </el-table> -->
      </div>
      <el-pagination
        style="text-align: center"
        background
        layout=" prev, pager, next"
        :total="20"
        @current-change="current_change"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentchange: 1,
      isfirstpage: false,
      isnextpage: true,
      // arr: [
      //   { name: "相电压a", num: "45" },
      //   { name: "相电压b", num: "56" },
      //   { name: "相电压c", num: "56" },
      // ],
      Bdata: [],
      BigData: [
        {
          A相电压: "43",
          B相电压: "24",
          C相电压: "12",
          平均相电压: "15",
          AB线电压: "11",
          BC线电压: "2",
          CA线电压: "13",
          平均线电压: "12",

          A相电流: "11",
          B相电流: "22",
          C相电流: "13",
          平均相电流: "15",
          三相有功功率: "12",
          三相无功功率: "14",
          三相视在功率: "52",
          总功率因数: "12",

          剩余电流IR: "15",
          零地电压: "24",
          环境湿度: "86",
          环境温度: "86",
          温度1: "86",
          温度2: "86",
          温度3: "86",
          温度4: "86",
          频率: "22",
          总基波有功功率: "32",
          总谐波有功功率: "12",
        },
      ],
      Bigcols1: [
        { data: "Ia", label: "A相电流" },
        { data: "Ib", label: "B相电流" },
        { data: "Ic", label: "c相电流" },
        { data: "Iapc", label: "平均相电流" },
        { data: "Inn", label: "平均线电流" },
        { data: "Ir", label: "剩余电流" },
        { data: "Pfw", label: "总基波有功功率" },
        { data: "Ph", label: "总谐波有功功率" },
      ],
      Bigcols2: [
        { data: "Ptp", label: "三相有功功率" },
        { data: "Qtp", label: "三相无功功率" },
        { data: "Stp", label: "三相视在功率" },
        { data: "Ua", label: "A相电压" },
        { data: "Ub", label: "B相电压" },
        { data: "Uc", label: "C相电压" },

        { data: "Ualv", label: "平均线电压" },
        { data: "Uapv", label: "平均相电压" },

        { data: "tem_1", label: "第一路温度" },
        { data: "tem_2", label: "第二路温度" },
      ],
      Bigcols3: [
        { data: "Uab", label: "线电压Uab" },
        { data: "Ubc", label: "线电压Ubc" },
        { data: "Uca", label: "线电压Uca" },
        { data: "Upen", label: "A相电流" },
        { data: "f", label: "频率" },
        { data: "fac_id", label: "设备编号" },
        { data: "pfs", label: "总功率因数" },
        { data: "tem_3", label: "第三路温度" },
        { data: "tem_4", label: "第四路温度" },
        { data: "tem_ch", label: "机箱温度" },
      ],
    };
  },
  mounted() {
    this.getdatas();
    setInterval(() => {
      this.getdatas();
    }, 5000);
  },
  methods: {
    dayin() {
      this.BigData.forEach(function (item, index) {
        for (let i in item) {
          item[i] = Math.floor(1 + Math.random() * 25);
        }
      });
    },
    current_change(currentchange) {
      console.log(currentchange);
      this.isfirstpage = !this.isfirstpage;
      this.isnextpage = !this.isnextpage;
    },
    getdatas() {
      this.$axios
        .get("http://39.100.106.64:8080/mxc/data.do?action=Detail")
        .then((response) => {
          let that = this;
          // let BB = [];
          // BB.splice(0, 0, response.data);
          that.Bdata = response.data;

          // for (let i in response.data) {
          //   // console.log(i + ":" + '"' + response.data[i] + '"');
          //   console.log(response.data[i]);
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.firstpage {
  display: none;
}
.nextpage {
  display: none;
}
</style>