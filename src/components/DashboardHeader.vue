<template>
    <div class="navbarDas-main">
      <b-container class="">
         <div class="logo-row pt-3 pb-3">
          <a href="/">
            <img src="../assets/images/logo.svg" alt="logo">
          </a>  
         </div>
      </b-container>
    </div>
  </template>


  <script>
  export default {
    name: 'DashboardHeader',
    components: {
      
    },
  }
  </script>

  <style scoped>
  .navbarDas-main{
    background: #F2F5FF;
    /* border-bottom: 1px solid rgba(185, 185, 185, 0.2); */
  }
  .logo-row{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>