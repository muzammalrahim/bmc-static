<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <h3 class="pb-2">Take a selfie</h3>
        <p class="font-12">We’ll compare this with your document</p>

        <div class="py-5">
          <b class="font-14">Please make sure to:</b>
          <ul class="ins-list pt-3">
            <li class="pb-3">
              <span class="list-span">1</span>
              <p class="font-14">Face forward and make your eyes clearly visible</p>
            </li>
            <li class="pb-3">
              <span class="list-span">1</span>
              <p class="font-14">Remove your glasses, if necessary</p>
            </li>
          </ul>
        </div>
        
        <div class="btn-div">
          <router-link to="/personal-info">
            <button class="main-btn">
              Take selfie
            </button>
          </router-link>
        </div>
        <p class="text-center font-12 pt-3">
          Identity verification verified by BMC
        </p>
      </div>
  </div>
  <FooterCompVue/>
</template>


<script>

import NavBarVue from '../components/NavBar.vue';
import FooterCompVue from '../components/FooterComp.vue';
export default {
  
  name: 'TakeSelfi',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>