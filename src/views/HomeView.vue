<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="hello" />
    Lang: <button @click="changeLang('es')">Es</button>
    <button @click="changeLang('en')">En</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    changeLang(lang: string) {
      this.$i18n.locale = lang;
    },
  },
});
</script>
