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
                            <h2>KYC User Database</h2>
                            <!-- <p>
                                Use your camera to scan a BMC QR code to locate the original saved on blockchain
                            </p> -->
                        </div>
                    </div>
                    <!---------------- header End----------------->


                    <!-- Inner body tag -->
                    <div class="pt-4">
                        <div class="input-group rounded position-relative">
                            <input type="search" class="form-control rounded ps-5 bg" placeholder="Search the user database" aria-label="Search" aria-describedby="search-addon" />
                            <img src="./../assets/images/search.svg" class="position-absolute pt-3 ps-3 zIndex" alt="">
                        </div>
                        <div class="table-responsive  pt-4 user-table">
                            <table class="table text-start">
                                <thead class="tableHeading">
                                    <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Identity Type</th>
                                    <th scope="col">Status</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr class="t-row">
                                        <td class="top-bor" scope="row">458762</td>
                                        <td class="top-bor">28 Sep 2022</td>
                                        <td class="top-bor">Sarah</td>
                                        <td class="top-bor">Langford</td>
                                        <td class="top-bor">sarah.langford@gmail.com</td>
                                        <td class="top-bor">+1 212 555-1234</td>
                                        <td class="top-bor">United States</td>
                                        <td class="top-bor">Passport</td>
                                        <td class="top-bor text-green">Verified</td>
                                        <td class="top-bor text-blue">
                                            <u>
                                                View
                                            </u>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">458760</td>
                                        <td>27 Sep 2022</td>
                                        <td>John</td>
                                        <td>Belkins</td>
                                        <td>j.belkins@acme.com</td>
                                        <td>+44 7912 345 6789</td>
                                        <td>United Kingdom</td>
                                        <td>Driver’s License</td>
                                        <td class="text-red">Failed</td>
                                        <td>
                                            <u>
                                            
                                            </u>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!--------------- Pegination area --------------->
                        <div class="pegi-main pt-5">
                            <div class="pegi-dropdown">
                                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    10
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">5</a>
                                    <a class="dropdown-item" href="#">15</a>
                                    <a class="dropdown-item" href="#">20</a>
                                </div>
                            </div>
                            <div class="">
                                <div class="pagination">
                                <a href="#">  
                                    <img src="./../assets/images/Left-arrow-gray.svg" class="" alt="icon">
                                   
                                </a>
                                <a href="#" class="active">1</a>
                                <a href="#" >2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <!-- <a href="#">6</a> -->
                                <a href="#">
                                    <img src="./../assets/images/right-arrow-gray.svg" class="" alt="icon">
                                </a>
                                </div>
                            </div>
                            <div class="pegi-search-num pegi-search">Results 1 - 10 of 164</div>
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
   
    
  </template>
  
  
  <script>
  
  export default {
    
    name: 'UploadTable',
    components: {
    },
  }
  </script>
  
  <style scoped>
    .main-uploadDoc .heading-area{
        border: none;
    }

  </style>