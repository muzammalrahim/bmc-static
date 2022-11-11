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
                        <h2>View BMC</h2>
                    </div>
                </div>
                <!---------------- header End----------------->
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
                <div class="view-inner-area d-flex row ">
                    <div class="col-md-6 border bg-clr d-flex flex-column">
                        <div class=" pb-5">
                            <div class="float-end">
                                <img class="" src="../assets/images/verified-tick.svg" alt="">
                            </div>
                        </div>
                        <div class="pt-5 xxl:pb-5">
                            <img src="../assets/images/license.svg" alt="">
                        </div>
                        <div class="pt-5 pb-2">
                            <p class="clr-lic pt-5">
                                This is a valid Blockchain Made Certificate
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 border bg-clr2">
                        <div class="pb-3">
                           
                        </div>
                        <div class="pt-5 ps-5 ">
                           <div class="text-start">
                                <h3>
                                    BMC Information
                                </h3>
                           </div>
                            <div class=" text-start pt-5">
                                <div class="d-flex">
                                    <div class="col-2 clr">
                                        ID
                                    </div>
                                    <div class=" col-10 con">
                                        2554891
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
                                            0xc6626f3 ab01acf1e0240dd0 8dcf64b8b2d706ff8e9ef5 e254 280294a f7d97 7fe
                                        </p>
                                    </div>
                                    <div class="ps-2 pe-5">
                                        <img src="../assets/images/blue-copy.svg" alt="">
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
                                <div class=" pt-3 ">
                                    <button class="dowLic-btn ">
                                        Download Original BMC File
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="pt-5 pb-2">
                           
                        </div>
                
                    </div>
                    
                </div>

                <!-- Upload Doc Bottom -->
                <div class="dashboard-bottom">
                    <div class="tabs-btn d-flex justify-content-center">
                        <div class="">
                            <router-link to="#">
                                <button class="light-btn-blue2 ">
                                    <span>
                                        <img src="../assets/images/qr-code-blue-icon.svg" alt="icon">
                                    </span>
                                    Scan Another BMC QR Code
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
    
    name: 'ViewDoc',
    components: {
    },
  }
  </script>
  
  <style scoped>
    .main-uploadDoc .heading-area{
        border: none;
    }
    .bg-clr{
        background-color: #c4c4c4
    }
    .size{
        height: 171px;
        width: 174px;
    }
    .dowLic-btn {
    background: #263853;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    height: 50px;
    width: 90%;
    font-weight: 700;
    font-size: 14px;
    line-height: 18.23px;
    color: #FFFFFF;
   }
   .clr-lic{
    color: #0FA958;
    font-size: 8px;
    font-weight: 400;
   }
   .light-btn-blue2{
    width: 278px;
    height: 51.33px;
    background: rgba(63, 209, 255, 0.07);
    border: 1px solid #0796D0;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    color: #0796D0;
    }
  </style>