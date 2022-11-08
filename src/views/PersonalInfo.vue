<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="per-info-main">
        <h3 class="pb-2">Personal Information</h3>
        <p class="font-12">To get started, tell us about yourself.</p>

        <div class="pt-3 pb-2">
          <b-form>
            <div class="input-hf">
              <b-form-input
              id="input-1"
              type="email"
              placeholder="Samuel"
              class="form-fields custom-form-width"
              >
              </b-form-input>
              <b-form-input
                id="input-1"
                type="email"
                placeholder="Last name"
                class="form-fields custom-form-width"
              >
              </b-form-input>
            </div>
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Last name"
              class="form-fields mt-3"
            >
            </b-form-input>
            <div class="phone-div">
              <b-form-input
              id="input-1"
              type="number"
              placeholder="+1 (XXX) XXX-XXXX"
              class="form-fields mt-3"
              >
              </b-form-input>
              <img src="../assets/images/flag-icon.png" alt="logo">
            </div>
          </b-form>
        </div>
        
        <div class="btn-div mt-2">
          <button class="main-btn">
              <a href="verification-code">
                Continue
              </a>
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
  
  name: 'PersonalInfo',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>