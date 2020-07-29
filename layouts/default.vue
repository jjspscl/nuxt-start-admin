<template>
  <div id="main">
    <TopNav />
    <main class="content">
      <SideNav />
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TopNav from '@/components/topnav/TopNav.vue'
import SideNav from '@/components/sidenav/SideNav.vue'
export default {
  components: {
    TopNav, SideNav
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  display: flex;
  flex-direction: row;
  background: #F3F6FD;
  min-height: 100vh;
  padding-top: 7.5vh;
  padding-bottom: 0;
}

.side-width {
  width: 7.5vh !important;
  transition: all 200ms linear;
}

.side-width.active {
  width: 12vw !important;
}

@media only screen and (max-width: 414px) {
  .content {
    padding-bottom: 7.5vh;
    padding-top: 0;
  }
  .side-width {
    position: absolute;
  }
  .side-width.active {
    width: 100vw !important;
  }
}

@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1600px) {
}
</style>
