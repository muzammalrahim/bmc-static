<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <h3 class="text-center">Upload Residence Permit</h3>
        <div class=" pb-3 d-flex justify-content-center pt-2">
            <div class="pt-2 ">
                <div class="border height d-flex justify-content-center align-items-center">
                  <img src="../assets/images/Upload.svg">
                </div>
                <p class="text-center pt-1 font-8">Passport Page</p>
            </div>
        </div>
        <div class=" border">
          <ul class="ins-list ps-2">
            <li class="pb-1">
              <span>
                <img src="../assets/images/tick.svg">
              </span>
              <p class="font-8">Files accepted: JPEG/JPG/PNG (Max size: 10 MB) </p>
            </li>
            <li class="pb-1">
              <span>
                <img src="../assets/images/tick.svg">
              </span>
              <p class="font-8">Make sure your details are clear and unobstructed </p>
            </li>
            <li class="pb-1">
              <span>
                <img src="../assets/images/tick.svg">
              </span>
              <p class="font-8">Document must be valid</p>
            </li>
          </ul>
        </div>
        <div class="btn-div pt-3"> 
          <router-link to="/front-doc">
            <button class="main-btn">
              Continue
            </button>
          </router-link>
        </div>
        <div class="back-btn text-center pt-4">
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
  
  name: 'UploadPermit',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
.height{
  height: 100px;
  width: 175px;
}
</style>