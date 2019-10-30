<template>
    <div>
      <sidebar></sidebar>
      <div class="main-panel">
        <topnavbar></topnavbar>
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                
                <div class="card card-chart">
                  <div class="card-header card-header-success">
                    <chartdata style="width:500px; height:500px;color:white"></chartdata>

                    <!-- Default unchecked -->
                    <div class="row">
                      <div class="col-md-3">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" checked>
                          <label class="custom-control-label" for="defaultChecked">Daily</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="defaultUnchecked3" name="defaultExampleRadios">
                          <label class="custom-control-label" for="defaultUnchecked3">Weekly</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios">
                          <label class="custom-control-label" for="defaultUnchecked">Monthly</label>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="defaultUnchecked2" name="defaultExampleRadios">
                          <label class="custom-control-label" for="defaultUnchecked2">Yearly</label>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Keywords(FAQ)
                      <!-- <a href="#" class="btn btn-success" @click="testSMS()">test</a> -->
                    </div>
                    <p class="card-category">
                      <span class="text-success">
                        <!-- <i class="fa fa-long-arrow-up"></i>55% -->
                      </span>
                      <a href="#" @click="testSMS()" class="btn btn-success btn-sm">Test SMS</a>
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <font-awesome-icon icon="clock" style="font-size:15px"/> &nbsp; updated 4 minutes ago
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-md-6">
                <div class="card card-chart">
                  <div class="card-header card-header-warning">
                    <apexchart type=heatmap width="500" :options="options" :series="series"></apexchart>
                    
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Heatmap
                    </div>
                    <p class="card-category">
                        <span class="text-success">
                          65%
                        </span>
                      </p>
                  </div>
                  <div class="card-footer">
                    <div class="stats">
                      <font-awesome-icon icon="clock" style="font-size:15px"/> &nbsp; updated 4 minutes ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import chartdata from '@/components/chart-data.js'
import chartdata2 from '@/components/chart-data2.js'
import sidebar from '@/components/side-navbar.vue'
import topnavbar from '@/components/navbar-top.vue'


const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '5d055714',
  apiSecret: 'gTZZw7IxuLzUeyvL',
});

const from = 'SAKA.PH';
const to = '639278960929';
const text = 'Hello from SAKA.PH';

export default {
  name: 'home',
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['6:00AM', '8:00AM', '10:00AM', '12:00PM', '2:00PM', '4:00PM', '6:00PM', '8:00PM']
        }
      },
      series: [{
        name: 'Cavite',
        data: [47, 17, 63, 22, 68, 11, 15, 88]
      },
      {
        name: 'Laguna',
        data: [64, 63, 65, 57, 37, 43, 21, 74]
      },
      {
        name: 'Batangas',
        data: [55, 77, 45, 50, 99, 60, 30, 21]
      },
      {
        name: 'Quezon',
        data: [40, 30, 45, 50, 29, 20, 90, 91]
      },
      {
        name: 'Rizal',
        data: [50, 40, 45, 50, 49, 90, 40, 91]
      },
      {
        name: 'Mindoro',
        data: [90, 80, 45, 50, 49, 70, 70, 91]
      },
      {
        name: 'Marinduque',
        data: [50, 40, 45, 50, 49, 60, 50, 21]
      },
      {
        name: 'Romblon',
        data: [50, 40, 45, 50, 49, 50, 70, 91]
      },
      {
        name: 'Palawan',
        data: [50, 40, 45, 50, 49, 90, 70, 91]
      },
      ],
     
      
    }
  },
  components: {
    // HelloWorld
    sidebar,
    topnavbar,
    chartdata,
    chartdata2
  },
  methods: {
    testSMS() {
      nexmo.message.sendSms(from, to, text);
    }
  }
}
</script>


<style scoped>
.custom-control-label {
  margin-left: 20px;
  padding-left: 20px;
  color: #ffffff;
}

</style>