<template>
  <div class="footer-main">
    <b-container class="">
       <div class="footer-inner pt-3 pb-3">
        <b-row>
          <b-col lg="12" md="12" sm="12">
            <p class="font-12">
              Copyright © 2022 BMC. All rights reserved.
            </p>
          </b-col>
        </b-row>
          

       </div>
    </b-container>
  </div>
</template>


<script>
export default {
  name: 'FooterComDashboard',
  components: {
    
  },
}
</script>

<style scoped>
.footer-main {
  background: #F2F5FF;
  text-align: center;
}
.footer-left-list{
  text-align: right;
}
.footer-menu{
  display: inline-flex;
  gap: 20px;
}

@media only screen and (max-width: 768px) {
  .footer-inner{
    text-align: center;
  }
  .footer-left-list{
    text-align: center;
  }
}
</style>