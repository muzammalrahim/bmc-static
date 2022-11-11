<template>
  <div class="main-dashboard">
       <!--==================== Web Navbar =================-->
      <div class ="web-div">
          <div class="sidebar-wrap">
              <div class="sidebar-inner">
                  <router-link to="/">
                      <img src="../assets/images/Logo-white.svg" alt="logo">
                  </router-link>
                  <div class="dashboard-list">
                      <ul class="ins-list">

                          
                          <router-link to="/doc-main">
                              <li class="side-nev-link">
                                  <span class="icon-span">
                                      <img src="../assets/images/home-icon.svg" alt="icon">
                                  </span>
                                  <p class="sidebar-menu">Overview</p>
                              </li>
                          </router-link>
                          
                          <router-link to="/doc-main">
                              <li class="side-nev-link">
                                  <span class="icon-span">
                                      <img src="../assets/images/cloud-icon.svg" alt="icon">
                                  </span>
                                  <p class="sidebar-menu">Upload Document</p>
                              </li>
                          </router-link>
                          
                          <router-link to="dashboard-cam">
                              <li class="side-nev-link">
                                  <span class="icon-span">
                                      <img src="../assets/images/scan-icon.svg" alt="icon">
                                  </span>
                                  <p class="sidebar-menu">Scan BMC QR Code</p>
                              </li>
                          </router-link>
                          
                          <router-link to="dashboard-table">
                              <li class="side-nev-link">
                                  <span class="icon-span">
                                      <img src="../assets/images/user-icon.svg" alt="icon">
                                  </span>
                                  <p class="sidebar-menu">User Database</p>
                              </li>
                          </router-link>
                      </ul>
                  </div>
              
              </div>
              
              <div class="log-out-div">
                  <div class="side-nev-link">
                      <span class="icon-span">
                          <img src="../assets/images/logout-icon.svg" alt="icon">
                      </span>
                      <p class="sidebar-menu">Log Out </p>
                  </div>
              </div>
          </div>
          
      </div>

      <!--==================== Mobile Navbar =================-->
      <div class="mob-div">
          <nav role="navigation" class="navigation">
              <div class="navigation__logo">
              <router-link to="/">
                  <img src="../assets/images/Logo-white.svg" alt="logo">
              </router-link>
              </div>
              <div class="navigation__wrapper">
              <input type="checkbox" id="hamburger">
              <label for="hamburger" class="navigation__button">
                  <span></span>
                  <span></span>
                  <span></span>
              </label>
              
              <ul class="navigation__links ins-list">
                  <router-link to="dashboard">
                      <li class="side-nev-link">
                          <span class="icon-span">
                              <img src="../assets/images/home-icon.svg" alt="icon">
                          </span>
                          <p class="sidebar-menu">Overview</p>
                      </li>
                  </router-link>

                  <router-link to="dashboard">
                      <li class="side-nev-link">
                          <span class="icon-span">
                              <img src="../assets/images/cloud-icon.svg" alt="icon">
                          </span>
                          <p class="sidebar-menu">Upload Document</p>
                      </li>
                  </router-link>

                  <router-link to="dashboard-cam">
                      <li class="side-nev-link">
                          <span class="icon-span">
                              <img src="../assets/images/scan-icon.svg" alt="icon">
                          </span>
                          <p class="sidebar-menu">Scan BMC QR Code</p>
                      </li>
                  </router-link>
                  <router-link to="dashboard-table">
                      <li class="side-nev-link">
                          <span class="icon-span">
                              <img src="../assets/images/user-icon.svg" alt="icon">
                          </span>
                          <p class="sidebar-menu">User Database</p>
                      </li>
                  </router-link>
              </ul>
              
              </div>
          </nav>
      </div>
      
  </div>
  
  
</template>


<script>

export default {
  
  name: 'DashboardNav',
  components: {
  },
}
</script>

<style scoped>
.sidebar-wrap{
  background: url(../assets/images/sidebar-bg.svg) no-repeat;
  height: 100vh;
  background-size: cover;
}
.sidebar-inner{
  padding: 30px 0 0 0;
}
.sidebar-menu{
  font-weight: 700;
  font-size: 14px;
  color: #F0F0F0;
}
.side-nev-link{
  padding: 10px 0 10px 20px;
  width: 200px;
}
.side-nev-link:hover{
  background: #263853;
  border-radius: 5px;
}
.log-out-div .side-nev-link{
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
.log-out-div .side-nev-link:hover{
  background: transparent;
}
</style>