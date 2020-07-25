<template>
  <div>
    <p>都市リスト</p>
    <div v-if="cityList">
      <div v-for="(val, key) in cityList" :key="key">
        <router-link :to="/city/ + val.name">{{ val.name }}</router-link>
      </div>
    </div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      cityList: null
    };
  },
  mounted() {
    const countryName = this.$route.params.countryName;
    axios.get("/api/citylist/" + countryName).then(res => {
      this.cityList = res.data;
    });
  }
};
</script>
