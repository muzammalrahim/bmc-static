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
          <div class="radio-div-slct selct-field">
            <b-form-select class="selct-opt" v-model="selected" :options="options"><br>
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
            <b-form-group>
              <div :class="isActive ? 'h-auto' : 'radio-div'" @click="myFilter()">
                <b-form-radio 
                v-model="checked"
                name="radio-size"
                value="passport"
                class=""
                >
                <div class="radio-inner">
                  <p class="font-12">
                    <b>PASSPORT</b>
                  </p>
                </div>
                  
                </b-form-radio>
              </div>
  
              <div class="radio-div mt-3">
                <b-form-radio 
                v-model="checked"
                name="radio-size"
                value="residence"
                class=""
                >
                  <div class="radio-inner">
                    <p class="font-12">
                      <b>RESIDENCE PERMIT</b>
                    </p>
                  </div>
                  
                </b-form-radio>
              </div>
  
              <div class="radio-div mt-3">
                <b-form-radio 
                v-model="checked"
                name="radio-size"
                value="license"
                class=""
                >
                <div class="radio-inner">
                  <p class="font-12">
                    <b>DRIVER’S LICENSE</b>
                  </p>
                </div>
                </b-form-radio>
                
              </div>
            </b-form-group>
            <!-- <div class="mt-3">Selected: <strong>{{ checked }}</strong></div> -->
          </div>
        </div>
        
        <div class="btn-div mt-2">
          <router-link to="/camAccess">
              <button v-on:click="webcamSendRequestButton()" 
                class="main-btn"
                :disabled="checked === ''"
              >
                Continue
              </button>
          </router-link>
        </div>

        
        
        <div class="back-btn text-center pt-3 pb-5" @click="$router.go(-1)">
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
import axios from "axios"

export default {
  name: 'IssuingRegion',
  components: {
      NavBarVue,
      FooterCompVue
  },

  
  data() {
    return {
      selected: null,
      isActive: false,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'Afghanistan', text: 'Afghanistan' },
        { value: 'Albania', text: 'Albania' },
          { value: 'Algeria', text: 'Algeria' },
          { value: 'Andorra', text: 'TAndorra' },
          { value: 'Angola', text: 'Angola' },
          { value: 'Antigua & Deps', text: 'Antigua & Deps' },
          { value: 'Argentina', text: 'Argentina' },
          { value: 'Armenia', text: 'Armenia' },
          { value: 'Australia', text: 'Australia' },
          { value: 'Austria', text: 'Austria' },
          { value: 'Azerbaijan', text: 'Azerbaijan' },
          { value: 'Bahamas', text: 'Bahamas' },
          { value: 'Bahrain', text: 'Bahrain' },
          { value: 'Bangladesh', text: 'Bangladesh' },
          { value: 'Barbados', text: 'Barbados' },
          { value: 'Belarus', text: 'Belarus' },
          { value: 'Belgium', text: 'Belgium' },
          { value: 'Belize', text: 'Belize' },
          { value: 'Benin', text: 'Benin' },
          { value: 'Bhutan', text: 'Bhutan' },
          { value: 'Bolivia', text: 'Bolivia' },
          { value: 'Bosnia Herzegovina', text: 'Bosnia Herzegovina' },
          { value: 'Botswana', text: 'Botswana' },
          { value: 'Brazil', text: 'Brazil' },
          { value: 'Brunei', text: 'Brunei' },
          { value: 'Bulgaria', text: 'Bulgaria' },
          { value: 'Burkina', text: 'Burkina' },
          { value: 'Burundi', text: 'Burundi' },
          { value: 'Cambodia', text: 'Cambodia' },
          { value: 'Cameroon', text: 'Cameroon' },
          { value: 'Canada', text: 'Canada' },
          { value: 'Cape Verde', text: 'Cape Verde' },
          { value: 'Central African Rep', text: 'Central African Rep' },
          { value: 'Chad', text: 'Chad' },
          { value: 'Chile', text: 'Chile' },
          { value: 'China', text: 'China' },
          { value: 'Colombia', text: 'Colombia' },
          { value: 'Comoros', text: 'Comoros' },
          { value: 'Congo', text: 'Congo' },
          { value: 'Congo {Democratic Rep}', text: 'Congo {Democratic Rep}' },
          { value: 'Costa Rica', text: 'Costa Rica' },
          { value: 'Croatia', text: 'Croatia' },
          { value: 'Cuba', text: 'Cuba' },
          { value: 'Cyprus', text: 'Cyprus' },
          { value: 'Czech Republic', text: 'Czech Republic' },
          { value: 'Denmark', text: 'Denmark' },
          { value: 'Djibouti', text: 'Djibouti' },
          { value: 'Dominica', text: 'Dominica' },
          { value: 'Dominican Republic', text: 'Dominican Republic' },
          { value: 'East Timor', text: 'East Timor' },
          { value: 'Ecuador', text: 'Ecuador' },
          { value: 'Egypt', text: 'Egypt' },
          { value: 'El Salvador', text: 'El Salvador' },
          { value: 'Equatorial Guinea', text: 'Equatorial Guinea' },
          { value: 'Eritrea', text: 'Eritrea' },
          { value: 'Estonia', text: 'Estonia' },
          { value: 'Ethiopia', text: 'Ethiopia' },
          { value: 'Fiji', text: 'Fiji' },
          { value: 'Finland', text: 'Finland' },
          { value: 'France', text: 'France' },
          { value: 'Gabon', text: 'Gabon' },
          { value: 'Gambia', text: 'Gambia' },
          { value: 'Georgia', text: 'Georgia' },
          { value: 'Germany', text: 'Germany' },
          { value: 'Ghana', text: 'Ghana' },
          { value: 'Greece', text: 'Greece' },
          { value: 'Grenada', text: 'Grenada' },
          { value: 'Guatemala', text: 'Guatemala' },
          { value: 'Guinea', text: 'Guinea' },
          { value: 'Guinea-Bissau', text: 'Guinea-Bissau' },
          { value: 'Guyana', text: 'Guyana' },
          { value: 'Haiti', text: 'Haiti' },
          { value: 'Honduras', text: 'Honduras' },
          { value: 'Hungary', text: 'Hungary' },
          { value: 'Iceland', text: 'Iceland' },
          { value: 'India', text: 'India' },
          { value: 'Indonesia', text: 'Indonesia' },
          { value: 'Iran', text: 'Iran' },
          { value: 'Iraq', text: 'Iraq' },
          { value: 'Ireland {Republic}', text: 'Ireland {Republic}' },
          { value: 'Israel', text: 'Israel' },
          { value: 'Italy', text: 'Italy' },
          { value: 'Ivory Coast', text: 'Ivory Coast' },
          { value: 'Jamaica', text: 'Jamaica' },
          { value: 'Japan', text: 'Japan' },
          { value: 'Jordan', text: 'Jordan' },
          { value: 'Kazakhstan', text: 'Kazakhstan' },
          { value: 'Kenya', text: 'Kenya' },
          { value: 'Kiribati', text: 'Kiribati' },
          { value: 'Korea North', text: 'Korea North' },
          { value: 'Korea South', text: 'Korea South' },
          { value: 'Kosovo', text: 'Kosovo' },
          { value: 'Kuwait', text: 'Kuwait' },
          { value: 'Kyrgyzstan', text: 'Kyrgyzstan' },
          { value: 'Laos', text: 'Laos' },
          { value: 'Latvia', text: 'Latvia' },
          { value: 'Lebanon', text: 'Lebanon' },
          { value: 'Lesotho', text: 'Lesotho' },
          { value: 'Liberia', text: 'Liberia' },
          { value: 'Libya', text: 'Libya' },
          { value: 'Liechtenstein', text: 'Liechtenstein' },
          { value: 'Lithuania', text: 'Lithuania' },
          { value: 'Luxembourg', text: 'Luxembourg' },
          { value: 'Macedonia', text: 'Macedonia' },
          { value: 'Madagascar', text: 'Madagascar' },
          { value: 'Malawi', text: 'Malawi' },
          { value: 'Malaysia', text: 'Malaysia' },
          { value: 'Maldives', text: 'Maldives' },
          { value: 'Mali', text: 'Mali' },
          { value: 'Malta', text: 'Malta' },
          { value: 'Marshall Islands', text: 'Marshall Islands' },
          { value: 'Mauritania', text: 'Mauritania' },
          { value: 'Mauritius', text: 'Mauritius' },
          { value: 'Mexico', text: 'Mexico' },
          { value: 'Micronesia', text: 'Micronesia' },
          { value: 'Moldova', text: 'Moldova' },
          { value: 'Monaco', text: 'Monaco' },
          { value: 'Mongolia', text: 'Mongolia' },
          { value: 'Montenegro', text: 'Montenegro' },
          { value: 'Morocco', text: 'Morocco' },
          { value: 'Mozambique', text: 'Mozambique' },
          { value: 'Myanmar, {Burma}', text: 'Myanmar, {Burma}' },
          { value: 'Namibia', text: 'Namibia' },
          { value: 'Nauru', text: 'Nauru' },
          { value: 'Nepal', text: 'Nepal' },
          { value: 'Netherlands', text: 'Netherlands' },
          { value: 'New Zealand', text: 'New Zealand' },
          { value: 'Nicaragua', text: 'Nicaragua' },
          { value: 'Niger', text: 'Niger' },
          { value: 'Nigeria', text: 'Nigeria' },
          { value: 'Norway', text: 'Norway' },
          { value: 'Oman', text: 'Oman' },
          { value: 'Pakistan', text: 'Pakistan' },
          { value: 'Palau', text: 'Palau' },
          { value: 'Panama', text: 'Panama' },
          { value: 'Papua New Guinea', text: 'Papua New Guinea' },
          { value: 'Paraguay', text: 'Paraguay' },
          { value: 'Peru', text: 'Peru' },
          { value: 'Philippines', text: 'Philippines' },
          { value: 'Poland', text: 'Poland' },
          { value: 'Portugal', text: 'Portugal' },
          { value: 'Qatar', text: 'Qatar' },
          { value: 'Romania', text: 'Romania' },
          { value: 'Russian Federation', text: 'Russian Federation' },
          { value: 'Rwanda', text: 'Rwanda' },
          { value: 'St Kitts & Nevis', text: 'St Kitts & Nevis' },
          { value: 'St Lucia', text: 'St Lucia' },
          { value: 'Saint Vincent & the Grenadine', text: 'Saint Vincent & the Grenadine' },
          { value: 'Samoa', text: 'Samoa' },
          { value: 'San Marino', text: 'San Marino' },
          { value: 'Sao Tome & Principe', text: 'Sao Tome & Principe' },
          { value: 'Saudi Arabia', text: 'Saudi Arabia' },
          { value: 'Senegal', text: 'Senegal' },
          { value: 'Serbia', text: 'Serbia' },
          { value: 'Seychelles', text: 'Seychelles' },
          { value: 'Sierra Leone', text: 'Sierra Leone' },
          { value: 'Singapore', text: 'Singapore' },
          { value: 'Slovakia', text: 'Slovakia' },
          { value: 'Slovenia', text: 'Slovenia' },
          { value: 'Solomon Islands', text: 'Solomon Islands' },
          { value: 'Somalia', text: 'Somalia' },
          { value: 'South Africa', text: 'South Africa' },
          { value: 'South Sudan', text: 'South Sudan' },
          { value: 'Spain', text: 'Spain' },
          { value: 'Sri Lanka', text: 'Sri Lanka' },
          { value: 'Sudan', text: 'Sudan' },
          { value: 'Suriname', text: 'Suriname' },
          { value: 'Swaziland', text: 'Swaziland' },
          { value: 'Sweden', text: 'Sweden' },
          { value: 'Switzerland', text: 'Switzerland' },
          { value: 'Syria', text: 'Syria' },
          { value: 'Taiwan', text: 'Taiwan' },
          { value: 'Tajikistan', text: 'Tajikistan' },
          { value: 'Tanzania', text: 'Tanzania' },
          { value: 'Thailand', text: 'Thailand' },
          { value: 'Togo', text: 'Togo' },
          { value: 'Tonga', text: 'Tonga' },
          { value: 'Trinidad & Tobago', text: 'Trinidad & Tobago' },
          { value: 'Tunisia', text: 'Tunisia' },
          { value: 'Turkey', text: 'Turkey' },
          { value: 'Turkmenistan', text: 'Turkmenistan' },
          { value: 'Tuvalu', text: 'Tuvalu' },
          { value: 'Uganda', text: 'Uganda' },
          { value: 'Ukraine', text: 'Ukraine' },
          { value: 'United Arab Emirates', text: 'United Arab Emirates' },
          { value: 'United Kingdom', text: 'United Kingdom' },
          { value: 'United States', text: 'United States' },
          { value: 'Uruguay', text: 'Uruguay' },
          { value: 'Uzbekistan', text: 'Uzbekistan' },
          { value: 'Vanuatu', text: 'Vanuatu' },
          { value: 'Vatican City', text: 'Vatican City' },
          { value: 'Venezuela', text: 'Venezuela' },
          { value: 'Vietnam', text: 'Vietnam' },
          { value: 'Yemen', text: 'Yemen' },
          { value: 'Zambia', text: 'Zambia' },
          { value: 'Zimbabwe', text: 'Zimbabwe' },
        ],
      checked : ''
    }
  },

  methods: {
    
    async getList() {
      const res = await axios.get("https://gist.github.com/kalinchernev/486393efcca01623b18d")
      console.log("res", res);
    },
    // myFilter: function() {
    //   this.isActive = !this.isActive;
    //   // some code to filter users
    // },

    myFilter() {
      this.isActive = true;
    }
  },

  mounted() {
    this.getList()
  },
  

  watch: {
    checked(value) {
      console.log("value", value);
      localStorage.setItem("checked", value)
    },
  },
}
</script>

<style scoped>
</style>