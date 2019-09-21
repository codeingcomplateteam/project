<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>

</template>

<style>
  @import './assets/plugins/switcher/css/color0.css';
  @import './assets/plugins/switcher/css/switcher.css';
  @import './assets/plugins/switcher/css/color1.css';
  @import './assets/plugins/switcher/css/color2.css';
  @import './assets/plugins/switcher/css/color3.css';
  @import './assets/plugins/iview/css/iview.css';
  @import './assets/plugins/iview/css/skin/style2.css';
  /* @import './assets/css/master.css';  */


/* @import './assets/css/bootstrap.css'; */
@import './assets/css/theme.css';
@import './assets/css/custom.css';
@import './assets/css/inner.css';
@import './assets/css/shop.css'; 
@import './assets/css/blog.css'; 
@import './assets/css/responsive.css'; 
@import './assets/css/animate.css';
@import './assets/css/debugging.css';





</style>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    'Navbar': Navbar
  }
}
</script>
