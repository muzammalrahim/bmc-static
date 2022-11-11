<template>
  <div class="main-dashboard">
      <div id="wrap-main">
        <div>

          <!--==================== Web Navbar =================-->
              <DashboardNav/>
            
        </div>

        <div class="main-doc-left">
          <UploadDoc/> 
        </div>
          
      </div>
  </div>
  
</template>


<script>

import DashboardNav from '../components/DashboardNav.vue'
import UploadDoc from '../components/UploadDoc.vue'
export default {
  
  name: 'DashboardDocMian',
  components: {
      DashboardNav,
      UploadDoc,
  },
}
</script>

<style scoped>

</style>