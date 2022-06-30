<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>新創三槍</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
          <router-link to="/one" class="navbar-item">
            <span class="icon"><i class="fa-solid fa-circle-info fa-beat-fade" style="--fa-animation-duration: 1.25s;"></i></span>
            <span>新創地圖</span>
          </router-link>
          <router-link to="/two" class="navbar-item">
            <span class="icon"><i class="fa-solid fa-triangle-exclamation fa-fade"></i></span>
            <span>關鍵搜尋</span>
          </router-link>
          <router-link to="/three" class="navbar-item">
            <span class="icon"><i class="fa-solid fa-cog fa-spin"></i></span>
            <span>實體分析</span>
          </router-link>

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log in</router-link>
  
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022 by 新創公道伯</p>
    </footer>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    }
  },

}

</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
