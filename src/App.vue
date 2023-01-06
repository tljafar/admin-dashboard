<template>
  <div id="app" class="my-5" :class="[isContainerFluid ? 'container-fluid' : 'container']">
    <button type="button" class="btn btn-primary my-3" @click="isContainerFluid = !isContainerFluid">{{ isContainerFluid? 'Container': 'Container Fluid' }}</button>
    <div class="d-lg-flex">
      <div class="flex-fill border-right bg-secondary" style="opacity: 0.4; margin-right: 20px">
        <div></div>
      </div>
      <div style="width:calc(100% - 215px)">
        <div>
          <h5 class="card-heading">Analytics Overview</h5>
          <div class="row">
            <div class="col-lg-9">
              <ProgressChart class="mb-3" />
            </div>
            <div class="col-lg-3">
              <div class="card card-body">
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