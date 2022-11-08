<template>
    <div class="footer-main">
      <b-container class="">
         <div class="footer-inner pt-3 pb-3">
          <b-row>
            <b-col md="6" sm="12">
              <p class="font-12">
                Copyright © 2022 BMC. All rights reserved.
              </p>
            </b-col>
            <b-col md="6" sm="12" class="footer-left-list">
                <ul class="footer-menu">
                  <li>
                    <a 
                      class="font-12" 
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a 
                      class="font-12" 
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
            </b-col>
          </b-row>
            

         </div>
      </b-container>
    </div>
  </template>


  <script>
  export default {
    name: 'FooterComp',
    components: {
      
    },
  }
  </script>

  <style scoped>
  .footer-left-list{
    text-align: right;
  }
  .footer-menu{
    display: inline-flex;
    gap: 20px;
  }

  @media only screen and (max-width: 425px) {
    .footer-inner{
      text-align: center;
    }
    .footer-left-list{
      text-align: center;
    }
  }
  </style>