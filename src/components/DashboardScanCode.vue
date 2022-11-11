<template>
    <div class="cam-main-dashboard">
        <div class="body-div">
            <!---------------- header Start----------------->
            <div class="dashboard-header pb-5">
                <div class="heading-area">
                    <div class="head-dropdown">
                        <b-dropdown split text="James Hunterson" class="">
                            <b-dropdown-item href="#">Action</b-dropdown-item>
                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                            <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                        </b-dropdown>
                        
                    </div>
                    <h2>Scan BMC QR Code</h2>
                    <p>
                        Use your camera to scan a BMC QR code to locate the original saved on blockchain
                    </p>
                </div>
            </div>
            <!---------------- header End----------------->

            <div class="border-styling">
                <div class=" inner-border-styling">

                </div>

            </div>
            <div>
                <div class="btn-div pt-5"> 
                    <!-- <router-link to="/">
                        <button class="cap-btn">
                            Capture
                        </button>
                        </router-link> -->
                        <div class="captur-modal">
                            <b-button 
                                class="cap-btn" 
                                @click="modalShow = !modalShow"
                            >
                                Capture
                            </b-button>

                            <b-modal hide-footer hide-header class="cap-modal"  id="modal-center" centered v-model="modalShow">
                                <div>
                                    <div class="dmi-inner">
                                        <div class="text-center pb-2">
                                            <img src="../assets/images/error.svg" alt="">
                                        </div>
                                        <h2 class="text-center pb-2">Error</h2>
                                        <p class="text-center font-changed pb-4">
                                            We were unable to recognise and locate the scanned BMC QR code. 
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <router-link to="/view-qr">
                                            <b-button class="w-100" variant="danger">
                                                Try again
                                            </b-button>
                                        </router-link>   
                                    </div>
                                </div>
                            </b-modal>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    
  </template>
  
  
  <script>
  
  export default {
    
    name: 'DashboardScanCode',
    components: {
    },
    data() {
      return {
        modalShow: false
      }
    }
  }
  </script>
  
  <style scoped>
 

  .border-styling{
    padding: 60px 50px;
    background: rgba(196, 196, 196, 0.25);
    border-radius: 5px;
    margin: 0 30px;
  }
  .inner-border-styling{
    padding: 10rem;
    /* border-style: dashed; */
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23888888FF' stroke-width='3' stroke-dasharray='5%25%2c 2%25' stroke-dashoffset='3' stroke-linecap='butt'/%3e%3c/svg%3e");
    border-radius: 10px;
  }
  .cap-btn {
    background: #0796D0;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
   }
   .font-changed{
    font-size: 16px;
    font-weight: 400;
    color: #292929BF;
   }
  </style>