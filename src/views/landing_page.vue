<template>
  <div class="about">
    <div class="row">
      <div class="col-md-12 landingPage">
        <router-link to="/dashboard" class="simple-text logo-normal">
         <img src="../assets/saka_logo_white.png" alt="" srcset="">
        </router-link>


        <div class="btn-enter">
          <router-link to="/dashboard" class="btn ghost-button">
            ENTER
            <font-awesome-icon icon="door-open" style="font-size: 20px;" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landingPage {
  padding: 50px 420px;
  height: 100vh;
}
.about {
  background-image: url('../assets/landing_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.ghost-button {
  font-size: 20px;
  display: inline-block;
  width: 200px;
  padding: 8px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: color 0.3s ease-out,
              background-color 0.3s ease-out,
              border-color 0.3s ease-out;
}
.ghost-button:hover,
.ghost-button:active {
  background-color: #27ae60;
  border-color: #27ae60;
  color: #fff;
  transition: color 0.3s ease-in,
              background-color 0.3s ease-in,
              border-color 0.3s ease-in;
}
.btn-enter {
  margin: 20% 35%;
}
</style>
