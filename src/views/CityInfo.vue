<template>
  <div>
    <div v-if="cityInfo">{{ cityInfo }}</div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Info",
  data() {
    return {
      cityInfo: null
    };
  },
  mounted() {
    const cityName = this.$route.params.cityName;
    axios.get("/api/cities/" + cityName).then(res => {
      this.cityInfo = res.data;
    });
  }
};
</script>
