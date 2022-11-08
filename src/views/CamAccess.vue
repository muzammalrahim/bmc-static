<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <h3 class="text-center">Allow camera access</h3>
        <p class="font-12 pt-2 text-center">When prompted, you must enable camera access to continue</p>
        <div class="text-center">
          <img src="../assets/images/camera.png">
          <p class="font-12 text-center">We cannot verify you without using your camera</p>
        </div>
        <div class="btn-div pt-5">
            <button class="main-btn">Enable camera</button>
        </div>
      </div>
  </div>
  <FooterCompVue/>
</template>


<script>

import NavBarVue from '../components/NavBar.vue';
import FooterCompVue from '../components/FooterComp.vue';
export default {
  
  name: 'CamAccess',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>