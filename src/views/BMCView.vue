<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="idnetity-main">
        <h3 class="pb-2">Verify your identity</h3>
        <p class="font-12">It should take a few minutes.</p>

        <div class="py-5">
          <b class="font-14">Use your device to:</b>
          <ul class="ins-list pt-3">
            <li class="pb-3">
              <span class="list-span">1</span>
              <p class="font-14">Scan your identity document</p>
            </li>
            <li class="pb-3">
              <span class="list-span">1</span>
              <p class="font-14">Take a photo of your face</p>
            </li>
          </ul>
        </div>
        
        <div class="btn-div">
            <button class="main-btn">
              <a href="personal-info">
                Choose document
              </a>
            </button>
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
  
  name: 'BMCView',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>