<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <h3 class="">Upload Driver’s License</h3>
        <div class="d-flex pb-3">
            <div class="col-5 pt-2">
                <div class="border height d-flex justify-content-center align-items-center">
                  <img src="../assets/images/Upload.png">
                </div>
                <p class="text-center pt-1 font-8">Driver’s License Front</p>
            </div>
            <div class="col-2 pt-2"></div>
            <div class="col-5 pt-2">
              <div class="border height d-flex justify-content-center align-items-center">
                  <img src="../assets/images/Upload.png">
                </div>
              <p class="text-center pt-1 font-8">Driver’s License Back</p>
            </div>
        </div>
        <div class=" border">
          <ul class="ins-list">
            <li class="pb-1">
              <span>
                <img src="../assets/images/tick.png">
              </span>
              <p class="font-8">Files accepted: JPEG/JPG/PNG (Max size: 10 MB) </p>
            </li>
            <li class="pb-1">
              <span>
                <img src="../assets/images/tick.png">
              </span>
              <p class="font-8">Make sure your details are clear and unobstructed </p>
            </li>
            <li class="pb-1">
              <span>
                <img src="../assets/images/tick.png">
              </span>
              <p class="font-8">Document must be valid</p>
            </li>
          </ul>
        </div>
        <div class="btn-div pt-3"> 
            <button class="main-btn">
              <!-- <router-link to="/personal-info">Enable Camera</router-link> -->
              Continue
            </button>
        </div>
      </div>
  </div>
  <FooterCompVue/>
</template>


<script>

import NavBarVue from '../components/NavBar.vue';
import FooterCompVue from '../components/FooterComp.vue';
export default {
  
  name: 'UploadLicense',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
.height{
  height: 25vh;
}
</style>