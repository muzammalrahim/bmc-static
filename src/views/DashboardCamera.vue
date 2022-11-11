<template>
    <div class="main-dashboard">
        <div id="wrap-main">
          <div>
              <DashboardNav/>
          </div>
          <div>
            
            <DashboardCam/>
          </div>
            
        </div>
    </div>
    
  </template>
  
  
  <script>
  
  import DashboardNav from '../components/DashboardNav.vue'
  import DashboardCam from '../components/DashboardCam.vue'
  export default {
    
    name: 'DashboardCamera',
    components: {
        DashboardNav,
        DashboardCam,
    },
  }
  </script>
  
  <style scoped>
  
  </style>