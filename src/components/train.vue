<template>
  <div>
    <button @click="getdata()">获取数据</button>
    <button @click="getdata2()">获取数据2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "hello world",
    };
  },
  methods: {
    getdata() {
      this.$axios
        .get(
          "http://39.100.106.64:8080/mxc/node.do?action=List&start=2021-01-01&end=2022-02-28&node_id=01"
        )

        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getdata2() {
      this.$axios
        .get("http://39.100.106.64:8080/mxc/data.do?action=Detail")
        // .get("http://39.100.106.64:8080/mxc/node.do?action=Tem")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>