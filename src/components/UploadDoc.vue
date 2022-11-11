<template>
    <div class="cam-main-dashboard">

        <!-- main body tag -->
        <div class="body-div">
            <div class="main-uploadDoc">
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
                        <h2>Upload Document</h2>
                    </div>
                </div>
                <!---------------- header End----------------->

                <!-- Inner body tag -->
                <div class="">
                    <div class="dashbord-tabs">
                        <b-tabs content-class="mt-3">
                            <b-tab 
                                title="Select a blockchain network" 
                                active
                            >
                                <div class="dash-tab-inner">
                                    <div class="tab-gray-div">
                                        <div class="tabs-btn">
                                            <div>
                                                <router-link to="#">
                                                    <button class="main-btn">
                                                        Browse file
                                                    </button>
                                                    <span>No file selected</span>
                                                </router-link>
                                            </div>
                                            <div>
                                                <router-link to="/upload-qr">
                                                    <button class="gray-light-btn">
                                                        Create BMC QR Code
                                                    </button>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </b-tab>
                            <b-tab 
                                title="Solana"
                            >
                            <div class="dash-tab-inner">
                                    <div class="tab-gray-div">
                                        <div class="tabs-btn">
                                            <div>
                                                <router-link to="#">
                                                    <button class="main-btn">
                                                        Browse file
                                                    </button>
                                                    <span>No file selected</span>
                                                </router-link>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 
                            </b-tab>
                            <b-tab 
                                title="Ethereum"
                            >
                            <div class="dash-tab-inner">
                                    <div class="tab-gray-div">
                                        <div class="tabs-btn">
                                            <div>
                                                <router-link to="#">
                                                    <button class="main-btn">
                                                        Browse file
                                                    </button>
                                                    <span>No file selected</span>
                                                </router-link>
                                            </div>
                                            <div>
                                                <router-link to="#">
                                                    <button class="gray-btn">
                                                        Create BMC QR Code
                                                    </button>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>

                <!-- Upload Doc Bottom -->
                <div class="dashboard-bottom">
                    <div class="tabs-btn">
                        <div>
                            <router-link to="#">
                                <button class="light-btn-blue">
                                    <span>
                                        <img src="../assets/images/qr-code-blue-icon.svg" alt="icon">
                                    </span>
                                    Scan BMC QR Code
                                </button>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="#">
                                <button class="textblue-btn">
                                    Upload another file
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    
  </template>
  
  
  <script>
  
  export default {
    
    name: 'UploadDoc',
    components: {
    },
  }
  </script>
  
  <style scoped>
    .main-uploadDoc .heading-area{
        border: none;
    }
  </style>