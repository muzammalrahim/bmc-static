<template>
    <div class="main-dashboard">
        <div id="wrap-main">
          <div>
              <DashboardNav/>
          </div>
          <div>
            
            <DashboardScanCode/>
          </div>
            
        </div>
    </div>
    
  </template>
  
  
  <script>
  
  import DashboardNav from '../components/DashboardNav.vue'
  import DashboardScanCode from '../components/DashboardScanCode.vue'
  export default {
    
    name: 'DashboardScan',
    components: {
        DashboardNav,
        DashboardScanCode,
    },
  }
  </script>
  
  <style scoped>
  
  </style>