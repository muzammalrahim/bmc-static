<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="front-doc-main text-center">
        <p class="font-14 pb-3">Keep your face in frame</p>

        <div class="doc-area-img">
          <div class="text-center">
            <img src="../assets/images/boy-pic.svg">
          </div>  
        </div>
        
        <div class="btn-div pt-4">
          <router-link to="/thankyou">
            <button class="main-btn">
              Capture
            </button>
          </router-link>
        </div>
        <div class="back-btn text-center pt-4" @click="$router.go(-1)">
          <img src="../assets/images/arrow-left.svg" alt="">
          <button class="gray-btn">Back to previous</button>
        </div>
      </div>
  </div>
  <FooterCompVue/>
</template>


<script>

import NavBarVue from '../components/NavBar.vue';
import FooterCompVue from '../components/FooterComp.vue';
import LoaderComVue from '../components/LoaderCom.vue';
export default {
  
  name: 'FaceFrame',
  components: {
      NavBarVue,
      FooterCompVue,
      LoaderComVue
  },
}
</script>

<style scoped>
</style>