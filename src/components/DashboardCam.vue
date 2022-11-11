<template>
    <div class="cam-main-dashboard">
        <div class="body-div">
            <!---------------- header Start----------------->
            <div class="dashboard-header">
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

            <div class="body-inner">
                <div class="idnetity-main">
                    <h3 class="text-center">Allow camera access</h3>
                    <p class="font-12 pt-2 text-center">When prompted, you must enable camera access to continue</p>
                    <div class="text-center">
                    <!-- <img src="../assets/images/camera.png"> -->
                    <lord-icon
                        src="https://cdn.lordicon.com/vixtkkbk.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#0796d0"
                        style="width:250px;height:250px">
                    </lord-icon>
                    <p class="font-12 text-center">We cannot verify you without using your camera</p>
                    </div>
                    
                    <div class="btn-div pt-5"> 
                    <router-link to="/dashboard-scan">
                        <button class="main-btn">
                            Enable Camera
                        </button>
                    </router-link>
                    </div>
                    <div class="back-btn text-center pt-4">
                        <img src="../assets/images/arrow-left.png" alt="">
                        <button class="gray-btn">Back to previous</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
  </template>
  
  
  <script>
  
  export default {
    
    name: 'DashboardCam',
    components: {
    },
  }
  </script>
  
  <style scoped>

  </style>