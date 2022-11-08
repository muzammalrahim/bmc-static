<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="verification-main">
        <div class="pb-3">
          <p class="font-14 pb-2">
            <b>Enter the verification code</b>
          </p>
          <p class="font-12 pb-1 para-width">
            A text message with a six-digit verification code has 
            been to your phone number ending in ***23
          </p>
          <div class="">
            <b-form>

            </b-form>
            <b-form-input
              id="input-1"
              type="text"
              placeholder="Enter Code"
              class="form-fields mt-3 text-center"
            >
            </b-form-input>
          </div>
        </div>
      
        
        <div class="btn-div mt-2">
          <router-link to="/issue-region">
              <button class="main-btn">
                Verify
              </button>
            </router-link>
        </div>
        <div class="auth-btn-div pt-2">
          <button class="gray-btn">Haven’t receive the code?</button>
          <button class="gray-btn">Resend code</button>
        </div>
        
      </div>
  </div>
  <FooterCompVue/>
</template>


<script>

import NavBarVue from '../components/NavBar.vue';
import FooterCompVue from '../components/FooterComp.vue';
export default {
  
  name: 'VerificationCode',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>