<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="front-doc-main text-center">
        <p class="font-14 pb-3">Position the front of your document in the frame</p>

        <div class="doc-area py-5">
          <div class="doc-part">
            <LoaderComVue/>
          </div>
        </div>
        
        <div class="btn-div pt-4">
          <router-link to="frontPicture">
            <button class="main-btn">
              Capture
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
import LoaderComVue from '../components/LoaderCom.vue';
export default {
  
  name: 'FrontDoc',
  components: {
      NavBarVue,
      FooterCompVue,
      LoaderComVue
  },
}
</script>

<style scoped>
</style>