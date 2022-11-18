<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="front-doc-main text-center">
        <p class="font-14 pb-3">Make sure your details are clear and unobstructed</p>

        <div class="pt-4">
            <img class="userf-img" src="../assets/images/CaptureArea.svg">
        </div>
        
        <div class="btn-div pt-4">
          <router-link to="/face-frame">
            <button class="main-btn">
              Submit Photo
            </button>
          </router-link>
        </div>
        <div class="btn-div pt-4">
          <router-link to="#">
            <button class="light-btn">
              Retake Photo
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
  
  name: 'FrontPicture',
  components: {
      NavBarVue,
      FooterCompVue,
      LoaderComVue
  },
}
</script>

<style scoped>
</style>