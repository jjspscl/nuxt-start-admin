<template>
  <nav>
    <div class="nav">
      <div class="logo side-width" :class="{ 'active': sideBarToggle }">
        <div v-if="sideBarToggle">
          Logo long
        </div>
        <div v-else>
          Logo
        </div>
      </div>
      <div class="items">
        <div class="toggler">
          <ion-icon name="menu-outline" size="large" @click="toggleSideBar" />
        </div>
        <div class="search">
          <input type="text" placeholder="Search...">
          <ion-icon name="search-outline" size="large" />
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="toggler">
        Toggler
      </div>
      <div class="items">
        <div>
          <ion-icon name="mail-outline" size="large" />
          <ion-icon v-if="false" name="mail-unread-outline" size="large" />
        </div>
        <div>
          <ion-icon name="notifications-outline" size="large" />
          <ion-icon v-if="false" name="notifications" size="large" />
        </div>
        <div class="user">
          User
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    sideBarToggle () {
      return this.$store.getters.sideBar.toggle
    }
  },
  methods: {
    toggleSideBar () {
      this.$store.commit('toggleSideBar')
    }
  }
}
</script>

<style scoped>
nav {
    position: fixed;
    width: 100vw;
    min-height: 7.5vh;
    display: flex;
    justify-content: space-between;
    background: white;
}

.nav {
    display: flex;
}

.nav .logo {
    display: flex;
    align-items: center;
    border: 1px solid #f2f2f2;
}

.nav .logo > div {
  margin: 0 auto;
}

.nav .items {
    display: flex;
}

.nav .items .toggler {
    min-width: 7.5vh;
    min-height: 7.5vh;
    display: flex;
    align-items: center;
    border: 1px solid #f2f2f2;
}

.nav .items .toggler .md {
    margin: 0 auto;
    cursor: pointer;
}

.nav .items .search{
    display: flex;
    align-items: center;
    padding: 0 15px;
    border: 1px solid #f2f2f2;
}

.nav .items .search input {
    min-width: 50vw;
    height: 100%;
    border: none;
    background-color: none;
    background-color: transparent;
}

.menu {
    display: flex;
}

.menu .toggler {
    display: none;
}
.menu .items {
    display: flex;
}

.menu .items div {
    display: flex;
    align-items: center;
    border: 1px solid #f2f2f2;
    padding: 15px;
}

@media only screen and (max-width: 414px) {
    nav {
      bottom: 0;
    }
    .nav .logo {
        display: none;
    }

    .menu .toggler {
        display: block;
    }

    .menu .items {
        display: none;
    }
}

@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1600px) {
}
</style>
