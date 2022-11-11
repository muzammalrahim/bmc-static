<template>
    <div class="main-dashboard">
        <div id="wrap-main">
          <div>

            <!--==================== Web Navbar =================-->
                <DashboardNav/>
              
          </div>

          <div class="main-doc-left">
            <UploadQR/> 
          </div>
            
        </div>
    </div>
    
  </template>
  
  
  <script>
  
  import DashboardNav from '../components/DashboardNav.vue'
  import UploadQR from '../components/UploadQR.vue'
  export default {
    
    name: 'DashboardViewQR',
    components: {
        DashboardNav,
        UploadQR,
    },
  }
  </script>
  
  <style scoped>
  
  </style>