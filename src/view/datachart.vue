<template>
  <div>
    <div class="header">
      <div class="endPointSelect">
        <el-col :offset="0">
          <el-select
            v-model="valuename"
            value-key=""
            placeholder="选择节点"
            clearable
            filterable
            @change="select"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
      </div>
      <div class="datePicker">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="inquire">
        <el-button type="primary" icon="el-icon-search" @click="getData()"
          >查询</el-button
        >
      </div>
    </div>

    <div class="chart">
      <el-col :span="24">
        <div
          id="chartline"
          style="margin: 120px auto 0; width: 95%; height: 75vh"
        ></div>
      </el-col>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "datachart",
  data() {
    return {
      nodePoint: [],
      value1: "",
      chartline: null,
      options: [
        {
          index: 1,
          value: "选项1",
          label: "节点1",
        },
        {
          index: 8,
          value: "选项2",
          label: "节点8",
        },
      ],
      valuename: "",
      item: {},
      nodearr: [
        [100, 50, 90, 10, 49, 24, 53, 35],
        [90, 60, 80, 35, 70, 63, 23, 46],
        [80, 70, 100, 41, 80, 34, 53, 24],
      ],
      nodearr2: [142, 564, 165, 4156, 8654, 864, 864],

      xdata: [],
      adata: [],
      bdata: [],
      cdata: [],
      ddata: [],
    };
  },

  mounted() {
    this.drawShape(this.xdata);
  },
  methods: {
    select(value) {
      this.item = this.options.find((item) => {
        return item.value === value;
      });
      console.log(this.item.value);
      this.nodePoint = this.item.index;
    },
    selectvalue() {
      // this.valuename = this.$refs.select.value;
      this.drawShape(this.valuename);
    },
    drawShape() {
      this.chartline = echarts.init(document.getElementById("chartline"));
      this.chartline.setOption({
        title: {
          text: "节点温度",
          x: 90,
        },
        tooltip: {
          show: true, // 是否显示
          trigger: "axis", // 触发类型，默认数据触发，见下图，可选为：'item' | 'axis'
        },
        legend: {
          data: ["温度A", "温度B", "温度C", "温度D"], //图例
        },

        xAxis: {
          name: "日期",
          type: "category",
          boundaryGap: false,
          data: this.xdata,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "温度A",
            type: "line",
            data: this.adata,
          },
          {
            name: "温度B",
            type: "line",
            data: this.bdata,
          },
          {
            name: "温度C",
            type: "line",
            data: this.cdata,
          },
          {
            name: "温度D",
            type: "line",
            data: this.ddata,
          },
        ],
      });
    },
    getData() {
      var moment = require("moment");
      let time = this.value1;
      let startime = this.moment(time[0]).format("YYYY-MM-DD");
      let endtime = this.moment(time[1]).format("YYYY-MM-DD");
      const startDate = moment(startime);
      const endDate = moment(endtime);
      const allYearMonth = []; // 接收所有年份和月份的数组
      while (endDate + 1 > startDate) {
        allYearMonth.push(startDate.format("YYYY-MM-DD"));
        startDate.add(1, "day");
      }
      // console.log("所有年份和月份------>", allYearMonth);
      this.xdata = [];
      for (var k in allYearMonth) {
        this.xdata.push(allYearMonth[k]);
        console.log(this.xdata);
      }

      this.$axios
        .post(
          "http://39.100.106.64:8080/mxc/node.do?action=List" +
            "&start=" +
            startime +
            "&end=" +
            endtime +
            "&node_id=0" +
            this.nodePoint
        )
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            this.adata = response.data[i].tem_A;
            this.bdata = response.data[i].tem_B;
            this.cdata = response.data[i].tem_C;
            this.ddata = response.data[i].tem_N;
          }
          this.drawShape();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.header {
  /* margin-top: 35px; */
  position: relative;
}
.endPointSelect {
  width: 180px;
  height: 36px;
  position: absolute;
  top: 35px;
  right: 490px;
}
.datePicker {
  height: 36px;
  position: absolute;
  top: 35px;
  right: 128px;
}
.inquire {
  border-radius: 2px;
  width: 81px;
  height: 36px;
  position: absolute;
  top: 35px;
  right: 35px;
}
.tlock {
  width: 100%;
  position: relative;
}
.title {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-45%);
  overflow: hidden;
}
.nodecol {
  margin-right: 5px;
  overflow: hidden;
}
.btncol {
  margin-left: 5px;
}
.chart {
  margin-top: 25px;
}
</style>