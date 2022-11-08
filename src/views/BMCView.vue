<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <h3>Verify your identity</h3>
        <p class="font-12">It should take a few minutes.</p>

        <div class="pt-4">
          <b class="font-14">Use your device to:</b>
        </div>
        
        <div class="btn-div">
            <button class="main-btn">Choose document</button>
        </div>
      </div>
  </div>
  <FooterCompVue/>
</template>


<script>

import NavBarVue from '../components/NavBar.vue';
import FooterCompVue from '../components/FooterComp.vue';
export default {
  
  name: 'BMCView',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>