<template>
  <div class="box">
    <div class="min">
      <div class="left"><mapp /></div>
      <div class="item"><Ltable /></div>
    </div>

    <div class="bottom"><Btable /></div>
  </div>
</template>
<script>
import mapp from "../view/map.vue";
import Btable from "../view/Btable.vue";
import Ltable from "../view/Ltable.vue";

export default {
  components: { mapp, Btable, Ltable },
};
</script>
<style  scoped >
.box {
  display: flex;
  flex-direction: column;
}

.min {
  display: flex;
  align-items: center;
  margin: 5px 0px 10px 0px;
}
.left {
  width: 49%;
  margin-right: 30px;
  line-height: 30px;
}
.item {
  width: 49%;
  line-height: 40px;
}

.bottom {
  height: 50px;
  width: 100%;
}
</style>
