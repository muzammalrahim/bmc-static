<template>
    <div class="navbar-main">
      <b-container class="">
         <div class="logo-row pt-3 pb-3">
            <img src="../assets/images/logo.svg" alt="logo">
         </div>
      </b-container>
    </div>
  </template>


  <script>
  export default {
    name: 'NavBar',
    components: {
      
    },
  }
  </script>

  <style scoped>
  .navbar-main{
    background: #FFFFFF;
    border-bottom: 1px solid rgba(185, 185, 185, 0.2);
  }
  .logo-row{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>