<template>
  <span><!-- Authentication loaded --></span>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
};
</script>
