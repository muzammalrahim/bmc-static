<template>
    <div class="main-dashboard">
        <div id="wrap-main">
          <div>

            <!--==================== Web Navbar =================-->
                <DashboardNav/>
              
          </div>

          <div class="main-doc-left">
            <ViewQR/> 
          </div>
            
        </div>
    </div>
    
  </template>
  <script>
  
  import DashboardNav from '../components/DashboardNav.vue'
  import ViewQR from '../components/ViewQR.vue'
  export default {
    
    name: 'DashboardViewQR',
    components: {
        DashboardNav,
        ViewQR,
    },
  }
  </script>
  
  <style scoped>
  
  </style>