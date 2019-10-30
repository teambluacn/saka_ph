<template>
  <div class="sidebar" data-color="green" data-background-color="white">
    <div class="logo">
      <router-link to="/" class="simple-text logo-normal">
         <img src="../assets/saka_logo.png" alt="" srcset="" height="auto" width="50%">
      </router-link>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active" id="linkActive">
            <router-link to="/dashboard" class="nav-link" id="dashbtn">
              <font-awesome-icon icon="home" style="font-size: 15px;"/>
                Dashboard
            </router-link>
          </li>
          <li class="nav-item active" id="linkActive2">
             <router-link to="/asembliya" class="nav-link" id="forumbtn">
                <font-awesome-icon icon="handshake" style="font-size: 15px;" />
                Asembliya
             </router-link>
          </li>
          <li class="nav-item" id="linkActive2">
             <router-link to="#" class="nav-link" id="forumbtn">
                <font-awesome-icon icon="folder" style="font-size: 15px;" />
                Reports
             </router-link>
          </li>
          <!-- your sidebar here -->
        </ul>
      </div>
  </div>
</template>


<script>
import JQuery from 'jquery'
let $ = JQuery
export default {
  data() {
    return {
      isActive: true
    }
  }
}

// $(document).ready(function () {
//   $('#dashbtn').click(function () {
//     if ($('#linkActive').hasClass('active')) {
//       $('#linkActive').removeClass('active')
//     } else {
//       $('#linkActive').addClass('active')
//     }
//   });

//   $('#forumbtn').click(function () {
//     if ($('#linkActive2').hasClass('active')) {
//       $('#linkActive2').removeClass('active')
//     } else {
//       $('#linkActive2').addClass('active')
//     }
//   });
// })
</script>

<style scoped>
  /* .nav-link {
    display: inline-flex;
  } */
</style>