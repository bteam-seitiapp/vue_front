<template>
  <div>
    <!-- </div> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld class="map" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.anime-menu {
  float: left;
  z-index: 2;
  transform: translateX(0);
}
.map {
  z-index: 1;
}
</style>