<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <h3 class="pb-2 text-center">Thank you</h3>
        <p class="font-12 text-center">That’s all we need to start verifying your identity.</p>

        
        <div class="btn-div pt-4">
          <router-link to="/verified">
            <button class="main-btn">
              Submit for verification
            </button>
          </router-link>
        </div>
      </div>
  </div>
  <FooterCompVue/>
</template>


<script>

import NavBarVue from '../components/NavBar.vue';
import FooterCompVue from '../components/FooterComp.vue';
export default {
  
  name: 'ThankYou',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>