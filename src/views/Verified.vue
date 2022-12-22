<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <div class="d-flex justify-content-center align-items-center">
          <img src="../assets/images/radioTick.svg">
        </div>
        <h3 class="pt-4 pb-2 text-center">We’ve verified your identity</h3>
        <p class="font-12 text-center">We have generated a Blockchain Made 
          <br>
          Certificate (BMC) as proof of verification.
        </p>
        <div class="d-flex justify-content-center align-items-center">
          <img src="../assets/images/qrcode.svg">
        </div>
        
        <div class="btn-div pt-4">
          <router-link to="/failed">
            <button class="main-btn">
              Download BMC
            </button>
          </router-link>
        </div>

        <div class="btn-div pt-4">
          <router-link to="/pdf">
            <button class="main-btn">
              PDF-BMC
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