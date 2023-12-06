<template>
  <div>
    <div class="scroles">
      <NavbarHorizontal />
      <NavbarVertical />
    </div>
  </div>
</template>

<script>
import NavbarVertical from "@/components/navbar/navbarVertical.vue";
import NavbarHorizontal from "@/components/navbar/navbarHorizontal.vue";

export default {
  name: "FrontedNavbar",
  components: {
    NavbarVertical,
    NavbarHorizontal,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.scroles {
  overflow: none;
}
</style>
