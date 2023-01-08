<template>
  <div id="app" class="my-5 container">
    <div class="d-lg-flex">
      <div class="flex-fill border-right bg-secondary" style="opacity: 0.4; margin-right: 20px">
        <div></div>
      </div>
      <div class="dashboard-content">
        <div>
          <SummeryReport />
          <h5 class="card-heading">Analytics Overview</h5>
          <div class="row">
            <div class="col-lg-8 col-lg-70 mb-3">
              <div class="card card-body h-100">
                <ProgressChart />
              </div>
            </div>
            <div class="col-lg-4 col-lg-30 mb-3">
              <div class="card card-body h-100">
                <h5 class="card-subheading">Cost Breakdown</h5>
                <DoughnutChart />
              </div>
            </div>
          </div>
          <LinChart class="mb-3" />
          <div class="page-seperator">Order Report</div>
          <OrderReport />
          <div class="page-seperator">Print on Demand Report </div>
          <PrintOnDemandReport class="mb-4" />
          <div class="page-seperator">Profit Report</div>
          <ProfitReport />
          <div class="page-seperator">Marketing Report</div>
          <MarketingReport class="mb-4" />
          <div class="page-seperator">Metrics Report</div>
          <MetricsReport />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import DoughnutChart from './components/DoughnutChart.vue';
import LinChart from './components/LinChart.vue';
import MarketingReport from './components/MarketingReport.vue';
import MetricsReport from './components/MetricsReport.vue';
import OrderReport from './components/OrderReport.vue';
import PrintOnDemandReport from './components/PrintOnDemandReport.vue';
import ProfitReport from './components/ProfitReport.vue';
import ProgressChart from './components/ProgressChart.vue';
import SummeryReport from './components/SummeryReport.vue';

export default {
  name: 'App',
  components: {
    LinChart,
    ProgressChart,
    DoughnutChart,
    SummeryReport,
    OrderReport,
    ProfitReport,
    MarketingReport,
    PrintOnDemandReport,
    MetricsReport
},
  data() {
    return {
      isContainerFluid: false
    }
  }
}
</script>