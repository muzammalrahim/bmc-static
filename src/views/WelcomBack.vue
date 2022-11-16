<template>
  <div>
    <div>
    <DashboardHeader/>
  </div>
  <div class="main-body-div">
      <div class="auth-main">
        
        <h3 class="pb-2">Welcome Back</h3>
        <p class="font-12">Enter your credentials to access your account.</p>

        <div class="pb-2">
          <div class="pt-2 pb-2">
          <b-form>
            
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Enter your email"
              class="form-fields mt-3"
            >
            
            </b-form-input>

            <b-form-input
              id="input-1"
              type="email"
              placeholder="Enter your password"
              class="form-fields mt-3"
            >
            </b-form-input>
            
          </b-form>
        </div>
        </div>
        
        <div class="btn-div">
          <router-link to="/doc-main">
            <button class="main-btn">
              Sign In
            </button>
          </router-link>
        </div>
      </div>
  </div>
  <FooterComDashboard/>
  </div>
  
</template>


<script>

import DashboardHeader from '../components/DashboardHeader.vue';
import FooterComDashboard from '../components/FooterComDashboard.vue';
export default {
  
  name: 'WelcomBack',
  components: {
    DashboardHeader,
    FooterComDashboard
},
}
</script>

<style scoped>
.main-body-div{
  background: #F2F5FF;
}
.auth-main {
    background: #FFFFFF;
    border-bottom: 1px solid rgba(185, 185, 185, 0.2);
    box-shadow: 0px 0px 15px rgb(0 0 0 / 3%);
    border-radius: 10px;
    text-align: center;
    padding: 30px;
}
</style>