<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <h3 class="text-center">Allow camera access</h3>
        <p class="font-12 pt-2 text-center">When prompted, you must enable camera access to continue</p>
        <div class="text-center">
          <!-- <img src="../assets/images/camera.svg"> -->
          <lord-icon
            src="https://cdn.lordicon.com/vixtkkbk.json"
            trigger="hover"
            colors="primary:#121331,secondary:#0796d0"
            style="width:250px;height:250px">
          </lord-icon>

          <p class="font-12 text-center">We cannot verify you without using your camera</p>
        </div>
        <div class="btn-div pt-5"> 
          <!-- <router-link> -->
              <button class="main-btn" @click="handleCamera()">
                Enable Camera
              </button>
            <!-- </router-link> -->
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
export default {
  
  name: 'CamAccess',
  components: {
      NavBarVue,
      FooterCompVue
  },
  methods: {
    handleCamera() {
      const checked = localStorage.getItem("checked")
      console.log("checked", typeof checked);
      if (checked == "passport") {
        this.$router.push({name: "upload-passport"})
      } else if (checked == "residence") {
        this.$router.push({name: "uploadLicense"})
      } else {
        this.$router.push({name: "upload-permit"})
      }
    }
  }
}
</script>

<style scoped>
</style>