<template>
  <div class="side-nav side-width" :class="{ 'active': sideBarToggle }">
    <ul class="tabs">
      <li>q</li>
      <li>q</li>
      <li>q</li>
      <li>q</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    sideBarToggle () {
      return this.$store.getters.sideBar.toggle
    }
  }
}
</script>

<style scoped>
.side-nav {
    background: yellow;
    box-shadow: 0 20px 40px 0 rgba(127, 143, 164, 0.36);
}

.tabs {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

@media only screen and (max-width: 414px) {
    .side-nav {
        display: fixed;
        height: calc(100% - 7.5vh);
        opacity: 0;
        box-shadow: none;
    }
    .side-nav.active {
        opacity: 1;
    }
}

@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1600px) {
}
</style>
