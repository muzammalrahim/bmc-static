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

                                    <!---------------- Alert  ----------------->
                                    <div class="success-chip mt-5">
                                        <span>
                                            <img src="../assets/images/green-tick-icon.svg" alt="icon">
                                        </span>
                                        <p>
                                            <b>Success!</b> The document has been successfully uploaded to the blockchain and a BMC QR has been generated.
                                        </p>
                                        <span>
                                            <img src="../assets/images/close-icon.svg" alt="icon">
                                        </span>
                                    </div>

                                    <!---------------- Inner Heading ----------------->
                                    <div class="inner-heading mt-5">
                                        <h4>Result</h4>
                                    </div>

                                    <!---------------- Inner Content ----------------->
                                    <div class="dashbord-inner-area d-flex">
                                        <div class="img-area ">
                                            <img class="size" src="../assets/images/QR.svg" alt="">
                                        </div>
                                        <div class="content-area text-start col-10 ps-5">
                                            <div class="d-flex">
                                                <div class="col-2 clr">
                                                    ID
                                                </div>
                                                <div class=" col-10 con">
                                                    458763
                                                </div>
                                            </div>
                                            <div class="d-flex pt-3">
                                                <div class=" col-2 clr">
                                                    File Name 
                                                </div>
                                                <div class=" col-10 con">
                                                    passport_23456789.pdf
                                                </div>
                                            </div>
                                            <div class="d-flex pt-3">
                                                <div class=" col-2 clr">
                                                    Hash
                                                </div>
                                                <div class=" xxl:col-6 con">
                                                    <p>
                                                        How to increase space between dotted border dotsHow to increase space between dotted border dotsHow to increase space between dotted border dots
                                                    </p>
                                                </div>
                                                <div class="ps-3">
                                                    <img src="../assets/images/copy.svg" alt="">
                                                </div>
                                            </div>
                                            <div class="d-flex pt-3">
                                                <div class=" col-2 clr">
                                                    Upload Date
                                                </div>
                                                <div class=" col-10 con">
                                                    1 October 2022, 14:45:21
                                                </div>
                                            </div>
                                            <div class="d-flex pt-3">
                                                <div class=" col-2 clr">
                                                    Download
                                                </div>
                                                <div class=" col-10 con">
                                                    <button class="dow-btn">
                                                        Download BMC QR
                                                    </button>
                                                </div>
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
    .size{
        height: 171px;
        width: 174px;
    }
    .dow-btn {
    background: #0796D0;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    width: 215.55px;
    height: 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18.23px;
    color: #FFFFFF;
   }
  </style>