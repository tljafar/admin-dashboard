<template>
  <div class="container dashboard-content mt-4">
    <div>
      <SummeryReport />
      <h5 class="card-heading">Analytics Overview</h5>
      <div class="row">
        <div class="col-lg-8 col-lg-70 mb-3">
          <ProgressChart />
        </div>
        <div class="col-lg-4 col-lg-30 mb-3">
          <div class="card card-body h-100">
            <h5 class="card-subheading">Cost Breakdown</h5>
            <DoughnutChart />
          </div>
        </div>
      </div>
      <LineChart class="mb-3" />
      <div class="page-seperator">Orders Report</div>
      <OrdersReport />
      <div class="page-seperator">Print on Demand Report </div>
      <PrintOnDemandReport class="mb-4" />
      <div class="page-seperator">Profit Report</div>
      <ProfitReport />
      <div class="page-seperator">Marketing Report</div>
      <MarketingReport class="mb-4" />
      <div class="page-seperator">Metrics Report</div>
      <MetricsReport />
    </div>
    <Footer />
  </div>
</template>

<script>
import DoughnutChart from './components/DoughnutChart.vue';
import Footer from './components/Footer.vue';
import LineChart from './components/LineChart.vue';
import MarketingReport from './components/MarketingReport.vue';
import MetricsReport from './components/MetricsReport.vue';
import OrdersReport from './components/OrdersReport.vue';
import PrintOnDemandReport from './components/PrintOnDemandReport.vue';
import ProfitReport from './components/ProfitReport.vue';
import ProgressChart from './components/ProgressChart.vue';
import SummeryReport from './components/SummeryReport.vue';

export default {
  name: 'Dashboard',
  components: {
    LineChart,
    ProgressChart,
    DoughnutChart,
    SummeryReport,
    OrdersReport,
    ProfitReport,
    MarketingReport,
    PrintOnDemandReport,
    MetricsReport,
    Footer
  },
  data() {
    return {
      isContainerFluid: false
    }
  }
}
</script>