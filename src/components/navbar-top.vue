<template>
  <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <!-- <a class="navbar-brand" href="#pablo">Dashboard</a> -->
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="# ">
                  <font-awesome-icon icon="bell" style="font-size: 20px;"/>
                  <!-- <span class="notification">5</span> -->
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="# ">
                  <font-awesome-icon icon="user" style="font-size: 20px;"/>
                </a>
              </li>
              <!-- your navbar here -->
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->
</template>

<script>
import { faBell } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    notifIcon() {
      return faBell
    }
  }
}
</script>