<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <div class="d-flex justify-content-center align-items-center">
          <img src="../assets/images/close-red.svg">
        </div>
        <h3 class="pt-4 pb-2 text-center">
          We’ve been unable to verify you
        </h3>
        <p class="font-12 text-center">
          At this time, we have been unable to verify you. 
          <br>
          You may restart this process to try again.
        </p>
       
        
        <div class="btn-div blk-btn-div pt-4">
          <router-link to="/">
            <button class="black-btn">
              Start again
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
  
  name: 'FailedView',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>