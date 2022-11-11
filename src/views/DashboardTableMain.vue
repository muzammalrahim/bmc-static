<template>
    <div class="main-dashboard">
        <div id="wrap-main">
          <div>
              <DashboardNav/>
          </div>
          <div>
            <UploadTable/>
          </div>
            
        </div>
    </div>
    
  </template>
  
  
  <script>
  
  import DashboardNav from '../components/DashboardNav.vue'
  import UploadTable from '../components/UploadTable.vue'
  export default {
    
    name: 'DashboardTableMain',
    components: {
        DashboardNav,
        UploadTable,
    },
  }
  </script>
  
  <style scoped>
  
  </style>