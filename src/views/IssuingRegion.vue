<template>
  <div>
    <NavBarVue/>
  </div>
  <div class="main-body-div">
      <div class="region-main">
        <div class="pb-3">
          <p class="font-14 pb-2">
            <b>Issuing Country/Region</b>
          </p>
          <div class="radio-div selct-field">
            <b-form-select v-model="selected" :options="options">
              <template #first>
                <b-form-select-option value="" disabled>
                    <p class="font-12">
                      <b>United States of America</b>
                    </p>
                </b-form-select-option>
                <b-form-select-option value="" >United States</b-form-select-option>
                <b-form-select-option value="" >UAE</b-form-select-option>
              </template>
            </b-form-select>
          </div>
        </div>
        
        <div class="pt-3 pb-2">
          <div>
            <p class="font-14">
              <b>Select Identity Type</b>
            </p>
            <p class="font-10 pb-3 pt-1">
                This should be a government-issued photo identity.
            </p>
            <div class="radio-div">
              <b-form-radio 
              name="radio-size"
              class=""
              >
                <p class="font-12">
                  <b>PASSPORT</b>
                </p>
              </b-form-radio>
            </div>

            <div class="radio-div mt-3">
              <b-form-radio 
              name="radio-size"
              class=""
              >
                <p class="font-12">
                  <b>RESIDENCE PERMIT</b>
                </p>
              </b-form-radio>
            </div>

            <div class="radio-div mt-3">
              <b-form-radio 
              name="radio-size"
              class=""
              >
                <p class="font-12">
                  <b>DRIVER’S LICENSE</b>
                </p>
              </b-form-radio>
            </div>
          </div>
        </div>
        
        <div class="btn-div mt-2">
            <button class="main-btn">Continue</button>    
        </div>
        <div class="back-btn text-center pt-4">
          <img src="../assets/images/arrow-left.png" alt="">
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
  
  name: 'IssuingRegion',
  components: {
      NavBarVue,
      FooterCompVue
  },
}
</script>

<style scoped>
</style>