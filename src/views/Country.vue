<template>
  <div>
    <div v-if="countryInfo">
      <div v-for="(val, key) in countryInfo" :key="key">
        <!-- <p>{{ val.name }}</p> -->
        <router-link :to="/citylist/ + val.name">
          {{ val.name }}
        </router-link>
      </div>
    </div>
    <div v-else>国が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Country",
  data() {
    return {
      countryInfo: null
    };
  },
  mounted() {
    axios.get("/api/country").then(res => {
      this.countryInfo = res.data;
    });
  }
};
</script>
