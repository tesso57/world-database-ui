<template>
  <div>
    <button @click="sendGet">get</button>
    <button @click="sendPost">post</button>
    <button @click="sendPut">put</button>
    <button @click="sendDelete">delete</button>
    <button @click="sendGetTest">test</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Axios",
  methods: {
    sendGet() {
      axios.get("#");
    },
    sendPost() {
      axios.post("#", {
        traQID: "to-hutohu",
        grade: 16
      });
    },
    sendPut() {
      axios.put("#", {
        testData: { string: "string", number: 1 }
      });
    },
    sendDelete() {
      axios.delete("#", {
        data: { po: 1 }
      });
    },
    sendGetTest() {
      axios.get("/api/country");
    }
  }
};
</script>
