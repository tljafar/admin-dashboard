<template>
  <div id="app" class="my-5 container">
    <div class="d-lg-flex">
      <div class="flex-fill border-right bg-secondary" style="opacity: 0.4; margin-right: 20px">
        <div></div>
      </div>
      <div class="dashboard-content">
        <div>
          <h5 class="card-heading">Analytics Overview</h5>
          <div class="row">
            <div class="col-lg-8 col-lg-70 mb-3">
              <div class="card card-body h-100">
                <ProgressChart />
              </div>
            </div>
            <div class="col-lg-4 col-lg-30 mb-3">
              <div class="card card-body h-100">
                <h5 class="card-subheading">Breakdown</h5>
                <DoughnutChart />
              </div>
            </div>
          </div>
          <LinChart />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import DoughnutChart from './components/DoughnutChart.vue';
import LinChart from './components/LinChart.vue';
import ProgressChart from './components/ProgressChart.vue';

export default {
  name: 'App',
  components: {
    LinChart,
    ProgressChart,
    DoughnutChart
  },
  data() {
    return {
      isContainerFluid: false
    }
  }
}
</script>